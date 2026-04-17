import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "portfolio:likes";
const SEED = 31;

export async function GET() {
  let count = await redis.get<number>(KEY);
  if (count === null) {
    await redis.set(KEY, SEED);
    count = SEED;
  }
  return NextResponse.json({ count });
}

export async function POST() {
  let count = await redis.get<number>(KEY);
  if (count === null) await redis.set(KEY, SEED);
  const next = await redis.incr(KEY);
  return NextResponse.json({ count: next });
}
