export default function Footer() {
  const links = [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "Operations",
      href: "#operations",
    },
    {
      label: "Modules",
      href: "#features",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10  bg-white text-slate-900">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          {/* <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r text-[#f2610d] text-[#f2610d] bg-clip-text text-transparent">
                School
              </span>
              Refine
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              A modern School ERP & Management Platform designed to simplify
              academic operations, administration, attendance, exams, report
              cards, accounts, and school workflows through one connected
              digital system.
            </p>
          </div> */}
          <div className="max-w-md">

  <h2 className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tracking-tight select-none">

    <span className="text-slate-900">School</span>

    <span className="text-[var(--brand-primary)] italic relative">
      Refine
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--brand-primary)]/40" />
    </span>

  </h2>

  <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">
    A modern School ERP & Management Platform designed to simplify
    academic operations, administration, attendance, exams, report
    cards, accounts, and school workflows through one connected
    digital system.
  </p>

</div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-700 "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p>srikar.ravoori@gmail.com</p>

              <p>+91 99488 00149</p>

              <p>Telangana, India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-600">
          © 2026 SchoolRefine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}