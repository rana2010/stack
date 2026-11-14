import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

const points = [
  {
    title: "Pre-qualified using noon commerce data",
    body: "Eligibility comes from your existing noon sales and inventory.",
  },
  {
    title: "Tied to your inventory",
    body: "Financing is tied to inventory held within noon’s warehouses.",
  },
  {
    title: "Repaid as you sell",
    body: "A share of sales, taken from the weekly payout noon already sends.",
  },
];

export function ProductCards() {
  return (
    <section id="products" className="section-shell">
      <Reveal>
        <p className="kicker">
          02 <span className="text-white/25">//</span> the offer
        </p>
        <SectionTitle
          className="mt-4"
          line1="Financing built around"
          line2="how you already sell"
        />
      </Reveal>
      <div className="mt-10 border-y border-white/[0.08]">
        {points.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.06}
            className="grid gap-3 border-b border-white/[0.08] py-6 last:border-b-0 sm:grid-cols-[4.5rem_1fr] sm:items-baseline sm:gap-10 sm:py-8"
          >
            <p className="font-mono text-[12px] tracking-[0.18em] text-[#7dffc3]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-inter-tight)] text-[18px] font-medium tracking-[-0.03em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#8aa396]">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
