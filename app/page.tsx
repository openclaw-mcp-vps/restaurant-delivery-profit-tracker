export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Real Profit from{" "}
          <span className="text-[#58a6ff]">Delivery Platforms</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing. Calculate true margins on every DoorDash and Uber Eats order after platform fees, payment processing, and your actual food costs.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          {[
            ["Per-Order", "Profit Breakdown"],
            ["Daily & Monthly", "Summaries"],
            ["Unprofitable", "Order Alerts"],
          ].map(([top, bottom]) => (
            <div key={top} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-[#58a6ff] font-semibold text-sm">{top}</p>
              <p className="text-[#8b949e] text-xs mt-1">{bottom}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect DoorDash & Uber Eats",
              "Automatic order import",
              "True profit per order",
              "Daily & monthly reports",
              "Unprofitable order alerts",
              "Custom food cost entries",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to DoorDash and Uber Eats?",
              a: "You link your delivery platform accounts via API credentials or CSV export. Orders are imported automatically so your profit data stays current.",
            },
            {
              q: "How are food costs calculated?",
              a: "You define your own food cost per menu item once. The tracker applies those costs to every order automatically, giving you accurate margin data.",
            },
            {
              q: "What fees are factored in?",
              a: "Platform commissions, payment processing fees, and any per-order service charges are all deducted so you see true net profit, not just revenue.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} Restaurant Delivery Profit Tracker. All rights reserved.
      </footer>
    </main>
  );
}
