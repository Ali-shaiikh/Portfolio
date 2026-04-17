import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "portfolio:likes";
const SEED = 31;

export async function GET() {
  try {
    let count = await redis.get<number>(KEY);
    if (count === null) { await redis.set(KEY, SEED); count = SEED; }
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: SEED });
  }
}

export async function POST() {
  try {
    let count = await redis.get<number>(KEY);
    if (count === null) await redis.set(KEY, SEED);
    const next = await redis.incr(KEY);
    return NextResponse.json({ count: next });
  } catch {
    return NextResponse.json({ count: SEED + 1 });
  }
}
