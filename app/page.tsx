export default function Home() {
  const faqs = [
    {
      q: "What compliance rules can I check?",
      a: "You can configure rules for legal disclaimers, GDPR notices, company registration numbers, physical address, phone numbers, and brand logo requirements."
    },
    {
      q: "How do I submit signatures for scanning?",
      a: "Paste the signature HTML or plain text directly into the checker, or upload a file. Bulk CSV uploads are supported for scanning entire teams at once."
    },
    {
      q: "What does the compliance report include?",
      a: "Each report lists every rule checked, pass/fail status, and specific actionable fixes so employees can update their signatures immediately."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Legal &amp; Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Email Signature<br />
          <span className="text-[#58a6ff]">Compliance Checker</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly scan employee email signatures for required legal disclaimers, contact information, and branding rules. Generate actionable compliance reports in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Checking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⚖️", title: "Legal Disclaimers", desc: "Verify GDPR, CCPA, and jurisdiction-specific notices are present." },
          { icon: "📋", title: "Contact Info", desc: "Ensure phone, address, and registration numbers are included." },
          { icon: "🎨", title: "Brand Compliance", desc: "Check logo usage, font, and color guidelines are followed." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need for full compliance</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited signature scans",
              "Customizable compliance rules",
              "Bulk CSV team uploads",
              "Detailed PDF reports",
              "Email alerts for violations",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Email Signature Compliance Checker. All rights reserved.
      </footer>
    </main>
  );
}
