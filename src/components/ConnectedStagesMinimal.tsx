"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "./ui/SectionTitle";

const stages = [
  {
    title: "Data",
    body: "Commerce signals from across noon help Stack understand seller performance and determine eligibility.",
  },
  {
    title: "Financing",
    body: "Eligible businesses receive working capital based on their business activity and financing requirements.",
  },
  {
    title: "Commerce",
    body: "Financing supports inventory and sales activity within the noon ecosystem.",
  },
  {
    title: "Repayment",
    body: "Collections are embedded into the same infrastructure noon already uses to settle sellers every week.",
  },
];

export function ConnectedStagesMinimal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(wrapRef, { once: true, amount: 0.2 });

  return (
    <section id="layers" className="section-shell">
      <p className="kicker">
        03 <span className="text-white/25">//</span> the loop
      </p>
      <SectionTitle
        className="mt-4"
        line1="One platform."
        line2="Four connected stages."
      />

      <div ref={wrapRef} className="mt-12">
        <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stages.map((stage, index) => (
            <motion.li
              key={stage.title}
              className="min-w-0 border-t border-white/[0.1] pt-4"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: reduce ? 0 : 0.45,
                delay: reduce ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-mono text-[12px] tracking-[0.18em] text-[#7dffc3]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-inter-tight)] text-[18px] font-medium tracking-[-0.03em] text-white">
                {stage.title}
              </h3>
              <p className="mt-2 max-w-[28ch] text-[14px] leading-[1.6] text-[#8aa396]">
                {stage.body}
              </p>
            </motion.li>
          ))}
        </ol>
        <p className="mt-8 font-mono text-[12px] tracking-[0.08em] text-[#7dffc3]/80">
          ↺ repayment feeds back into data
        </p>
      </div>
    </section>
  );
}
