import { Logo } from "./Logo";

const links = [
  { href: "#products", label: "Offer" },
  { href: "#layers", label: "Stages" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/75 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 md:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-ink"
          aria-label="stack by noon"
        >
          <Logo className="h-3.5 w-5 text-[#7dffc3]" />
          <span className="font-[family-name:var(--font-inter-tight)] text-[13px] font-medium tracking-[-0.03em]">
            stack
          </span>
          <span className="font-mono text-[11px] tracking-[0.16em] text-[#8aa396] uppercase">
            noon
          </span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Page">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.12em] text-[#8aa396] uppercase transition-colors hover:text-[#7dffc3] sm:tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
