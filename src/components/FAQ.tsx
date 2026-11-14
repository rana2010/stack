import { Reveal } from "./ui/Reveal";

const items = [
  {
    q: "What is Stack?",
    a: "Stack is noon’s B2B financing platform. We use data and infrastructure from within the noon ecosystem to provide embedded working-capital solutions to businesses.",
  },
  {
    q: "Who can use Stack?",
    a: "Stack is currently available to eligible noon sellers in the UAE. Eligibility and available financing are determined using business performance and other relevant signals.",
  },
  {
    q: "How are sellers assessed?",
    a: "Stack uses data available within the noon ecosystem to understand the seller’s business and determine eligibility and potential financing limits. This includes commerce and operational signals generated through the seller’s activity.",
  },
  {
    q: "How does repayment work?",
    a: "Repayment is linked to future noon sales and integrated into noon’s existing weekly seller payout cycle. This allows sellers to repay through the same commercial activity the financing is designed to support.",
  },
  {
    q: "Is Stack available outside the UAE?",
    a: "Stack’s current financing proposition is focused on the UAE.",
  },
  {
    q: "Does Stack work with financial institutions?",
    a: "Yes. Stack’s technology and embedded infrastructure can support financing programs with banks and other financial institutions. For partnership enquiries, email stack@noon.com.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-shell">
      <Reveal>
        <p className="kicker">
          04 <span className="text-white/25">//</span> questions
        </p>
        <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:gap-16">
          <h2 className="section-display text-balance lg:w-[min(36%,18rem)] lg:shrink-0">
            <span className="section-display-muted block">Frequently</span>
            <span className="section-display-strong block">asked questions</span>
          </h2>
          <div className="min-w-0 flex-1 border-t border-white/[0.08]">
            {items.map((item, index) => (
              <details
                key={item.q}
                name="stack-faq"
                className="faq-item border-b border-white/[0.08] py-4"
                open={index === 0}
              >
                <summary className="group flex w-full cursor-pointer items-center gap-4 text-left">
                  <h3 className="min-w-0 flex-1 font-[family-name:var(--font-inter-tight)] text-[16px] font-medium tracking-[-0.02em] text-ink">
                    {item.q}
                  </h3>
                  <span
                    className="faq-toggle font-mono text-[16px] leading-none text-[#7dffc3]"
                    aria-hidden
                  />
                </summary>
                <p className="max-w-xl pt-3 text-[14px] leading-[1.6] text-[#8aa396]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
