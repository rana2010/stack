import { MatrixRain } from "./MatrixRain";

const MONEY = "$€£¥₿0123456789";

export function Footer() {
  return (
    <div>
      <section id="close" className="relative overflow-hidden">
        <div className="section-shell relative flex flex-col items-center justify-center text-center">
          <h2 className="section-display max-w-4xl text-center text-balance">
            <span className="section-display-muted block">Built by noon.</span>
            <span className="section-display-strong block">Embedded into noon.</span>
          </h2>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/[0.06]">
        <div className="relative h-14 overflow-hidden" aria-hidden>
          <MatrixRain
            mode="field"
            glyphs={MONEY}
            strength={2.4}
            stepMs={110}
            every={1}
            className="absolute inset-0"
          />
        </div>
        <div className="border-t border-white/[0.06]">
          <div className="page-wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 font-mono text-[12px] tracking-[0.04em] text-[#8aa396]">
            <a href="mailto:stack@noon.com" className="transition-colors hover:text-[#7dffc3]">
              stack@noon.com
            </a>
            <nav className="flex items-center gap-6" aria-label="Legal">
              <a href="#terms" className="transition-colors hover:text-[#7dffc3]">
                Terms
              </a>
              <a href="#privacy" className="transition-colors hover:text-[#7dffc3]">
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
