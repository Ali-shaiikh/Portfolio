import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--bg)]">
      <div className="glass max-w-md w-full">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="mono text-xs text-[var(--text-muted)] ml-2">ali@init ~ 404</span>
        </div>
        <div className="px-5 py-6 mono text-xs space-y-2">
          <div className="text-[var(--accent)]">❯ cd {"{requested path}"}</div>
          <div className="text-[var(--text-muted)] pl-4">error: path not found</div>
          <div className="text-[var(--text-muted)] pl-4">exit code: 404</div>
          <div className="text-[var(--text-dim)] pl-4 pt-2">// this page doesn't exist</div>
        </div>
        <div className="px-5 pb-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mono text-xs px-4 py-2 border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            ← cd ~/home
          </Link>
        </div>
      </div>
    </div>
  );
}
