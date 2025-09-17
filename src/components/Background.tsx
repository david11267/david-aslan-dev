export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(35%_30%_at_80%_30%,rgba(236,72,153,0.12),transparent),radial-gradient(45%_35%_at_50%_80%,rgba(34,197,94,0.12),transparent)]" />
    </div>
  )
}
