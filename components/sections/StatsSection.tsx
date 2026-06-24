"use client";

export default function StatsSection() {
  const schools = [
    "ABC School",
    "Oxford Public School",
    "Green Valley School",
    "Future Kids Academy",
  ];

  const duplicatedSchools = [...schools, ...schools];

  return (
    <section
      id="trusted-schools"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Trusted Schools
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Schools & Institutions Using Our Platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Collaborating with educational institutions focused on simplifying
            academic operations and digital school management.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative mt-16 overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

        <div
  className="marquee-wrapper"
  tabIndex={0}
  aria-label="Trusted schools and partners logos"
>
            <div className="marquee-track">
              {duplicatedSchools.map((school, index) => (
                <div
                  key={`${school}-${index}`}
                  className="group flex h-28 min-w-[260px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    {/* Placeholder Logo */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-[var(--brand-primary)]">
                      LOGO
                    </div>

                    <p className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                      {school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          Focused on building practical and transparent digital solutions for
          modern educational institutions.
        </p>
      </div>
    </section>
  );
}