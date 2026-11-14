export function Hero() {
  return (
    <section className="flex h-[calc(100svh-3.5rem)] items-end overflow-hidden sm:h-[calc(100svh-4rem)]">
      <div className="section-shell pb-16 sm:pb-20">
        <p className="kicker">
          01 <span className="text-white/25">//</span> working capital
        </p>
        <h1 className="hero-title mt-5 text-left">
          Financing built into
          <br />
          <span className="hero-commerce">commerce.</span>
        </h1>
        <p className="mt-5 max-w-md text-[14px] leading-[1.6] text-[#8aa396]">
          Stack is noon’s B2B financing platform, providing working capital to
          businesses already selling within the noon ecosystem.
        </p>
      </div>
    </section>
  );
}
