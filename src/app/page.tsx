import { CheckCircle, Zap, Shield, ArrowRight, CreditCard, FileText, Brain } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Nav */}
      <nav className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">ReconcilerAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#how" className="hover:text-white transition">How it Works</a>
          </div>
          <a href="#pricing" className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-400 mb-8">
          <Zap className="w-3.5 h-3.5" />
          AI-Powered Invoice Reconciliation
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Stop Matching<br />Invoices Manually
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          ReconcilerAI automatically matches your invoices to bank transactions with 95%+ accuracy. 
          Save 10+ hours per month on bookkeeping.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how" className="text-slate-400 hover:text-white font-medium px-8 py-3.5 rounded-xl text-lg border border-slate-700 hover:border-slate-600 transition">
            See How It Works
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
      </section>

      {/* Social Proof */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-sm text-slate-500 mb-8">TRUSTED BY SMALL BUSINESSES</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600 text-lg font-semibold">
            <span>Acme Corp</span>
            <span>TechStart Inc</span>
            <span>FlowState</span>
            <span>DataPrime</span>
            <span>CloudNine</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything you need to reconcile faster</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">Powerful AI that learns your business patterns and gets smarter over time.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Brain, title: "AI Auto-Matching", desc: "Our AI reads invoices and matches them to bank transactions with 95%+ accuracy. Learns your patterns over time." },
            { icon: Shield, title: "Bank-Grade Security", desc: "256-bit encryption, SOC 2 compliant. Your financial data never leaves our secure infrastructure." },
            { icon: Zap, title: "10x Faster", desc: "What takes hours takes minutes. Upload invoices, connect your bank, and let AI do the heavy lifting." },
            { icon: FileText, title: "Smart OCR", desc: "Extracts data from any invoice format — PDF, email, scanned documents. No manual data entry." },
            { icon: CreditCard, title: "Plaid Integration", desc: "Connect 12,000+ banks instantly via Plaid. Real-time transaction syncing." },
            { icon: CheckCircle, title: "Discrepancy Alerts", desc: "Instantly flags mismatches, duplicates, and missing payments. Never miss a discrepancy again." },
          ].map((f, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition">
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Three simple steps</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">Up and running in under 5 minutes.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Connect Your Bank", desc: "Securely link your business bank account via Plaid. 12,000+ banks supported." },
              { step: "02", title: "Upload Invoices", desc: "Drag & drop PDFs, forward emails, or connect your invoicing software." },
              { step: "03", title: "AI Reconciles", desc: "Our AI matches everything automatically. Review flagged items and export." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-violet-500/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">No hidden fees. No long-term contracts.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Starter", price: "$19", period: "/mo", invoices: "100 invoices/mo", features: ["Bank connections", "AI matching", "Email support", "CSV export"], cta: "Start Free Trial", popular: false },
            { name: "Growth", price: "$49", period: "/mo", invoices: "500 invoices/mo", features: ["Everything in Starter", "Priority support", "QuickBooks export", "API access", "Team members (3)"], cta: "Start Free Trial", popular: true },
            { name: "Pro", price: "$99", period: "/mo", invoices: "Unlimited invoices", features: ["Everything in Growth", "Unlimited team members", "Custom integrations", "Dedicated account manager", "SLA guarantee"], cta: "Start Free Trial", popular: false },
          ].map((p, i) => (
            <div key={i} className={`rounded-2xl p-8 border ${p.popular ? "border-violet-500 bg-violet-500/5 scale-105" : "border-slate-700/50 bg-slate-800/50"} transition`}>
              {p.popular && <div className="text-xs font-semibold text-violet-400 mb-3 uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-slate-400">{p.period}</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">{p.invoices}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-slate-700 hover:bg-slate-600 text-white"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop wasting hours on manual reconciliation</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Join thousands of small businesses saving 10+ hours per month with AI-powered invoice matching.</p>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition">
            Start Your Free Trial <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded-md flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold">ReconcilerAI</span>
          </div>
          <p className="text-sm text-slate-500">© 2026 ReconcilerAI by ZOO. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
