// "use client";

// export default function HeroSection() {
//   return (
//     <section
//       id="hero"
//       aria-label="Hero section"
//       className="relative overflow-hidden bg-slate-950 text-white"
//     >
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

//       {/* Glow Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
//         <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
//       </div>

//       {/* Grid Overlay */}
//       <div className="absolute inset-0 opacity-20">
//         <svg className="h-full w-full">
//           <defs>
//             <pattern
//               id="grid"
//               width="40"
//               height="40"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 40 0 L 0 0 0 40"
//                 fill="none"
//                 stroke="white"
//                 strokeOpacity="0.08"
//               />
//             </pattern>
//           </defs>

//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
//         {/* Badge */}
//         <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
//           Trusted by Schools Across India
//         </div>

//         {/* Heading */}
//         <h1 className="max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
//           Modern{" "}
//           <span className="bg-gradient-to-r text-[#f2610d] text-[#f2610d] bg-clip-text text-transparent">
//             School ERP
//           </span>{" "}
//           & Management Platform
//         </h1>

//         {/* Description */}
//         <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
//           Streamline admissions, attendance, exams, fees, communication,
//           transport, analytics, and administration in one powerful cloud-based
//           school management system.
//         </p>

//         {/* Buttons */}
//         <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//           <button className="rounded-lg bg-[var(--brand-primary)] px-6 py-3 font-semibold text-slate-900 transition hover:scale-105 hover:bg-[var(--brand-primary)]">
//             Book a Demo
//           </button>

//           <button className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/10">
//             Explore Features
//           </button>
//         </div>



//         {/* Feature Cards */}
//         <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10">
//             <h3 className="text-lg font-semibold">AI-Powered</h3>

//             <p className="mt-2 text-sm leading-relaxed text-slate-300">
//               Smart automation and analytics for better academic and operational
//               decisions.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10">
//             <h3 className="text-lg font-semibold">Multi-Board Support</h3>

//             <p className="mt-2 text-sm leading-relaxed text-slate-300">
//               Built for CBSE, ICSE, IB, State Boards, and international
//               curriculum workflows.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10">
//             <h3 className="text-lg font-semibold">All-in-One Platform</h3>

//             <p className="mt-2 text-sm leading-relaxed text-slate-300">
//               Connect admins, teachers, students, and parents in one unified
//               ecosystem.
//             </p>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="mt-16 flex flex-col items-center text-slate-400">
//           <div className="flex h-8 w-5 justify-center rounded-full border border-white/30">
//             <div className="mt-1 h-2 w-1 animate-bounce rounded-full bg-white" />
//           </div>

//           <p className="mt-2 text-xs">Scroll</p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeOpacity="0.08"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
          Built for Modern Schools Across India
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
          Manage Your Entire{" "}
          <span className="bg-gradient-to-r text-[#f2610d] bg-clip-text ">
            School Ecosystem
          </span>{" "}
          from One Platform
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
          Streamline student management, attendance, examinations, report
          cards, staff operations, fee collection, and academic workflows with
          a modern cloud-based school ERP platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-[var(--brand-primary)] px-6 py-3 font-semibold text-slate-900 transition hover:scale-105 hover:bg-[var(--brand-primary)]">
            Book a Demo
          </button>

          <button className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/10">
            Explore Modules
          </button>
        </div>

        {/* Dashboard Preview Card */}
        <div className="mt-16 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          {/* Top */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="text-left">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
                Smart School ERP
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Everything Your School Needs in One Place
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Built for administrators, teachers, students, and management to
                simplify academic operations, automate workflows, and improve
                school productivity.
              </p>
            </div>

            {/* Mini Dashboard Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-left shadow-2xl backdrop-blur-md lg:min-w-[320px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Today’s Attendance</p>
                  <h3 className="mt-1 text-3xl font-bold">94%</h3>
                </div>

                <div className="rounded-xl bg-green-500/10 px-3 py-2 text-sm font-medium text-green-400">
                  +2.5%
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-300">
                    Fee Collection
                  </span>

                  <span className="text-sm font-semibold text-white">
                    ₹4.2L
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-300">
                    Exams Scheduled
                  </span>

                  <span className="text-sm font-semibold text-white">
                    12 Active
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-300">
                    Report Cards
                  </span>

                  <span className="text-sm font-semibold text-white">
                    Generated
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
              <h3 className="text-lg font-semibold">
                Student & Staff Management
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Manage profiles, attendance, records, and role-based access for
                students, teachers, and administrators.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
              <h3 className="text-lg font-semibold">
                Exams & Academic Workflow
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Schedule exams, manage timetables, enter marks in bulk, and
                generate report cards effortlessly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
              <h3 className="text-lg font-semibold">
                Smart Automation & Accounts
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Generate question papers in minutes, track fee collection, and
                gain insights with powerful analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
       <button
  type="button"
  aria-label="Scroll to trusted schools section"
  onClick={() => {
    const nextSection = document.querySelector("#trusted-schools");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
  className="group mt-16 flex flex-col items-center text-slate-400 transition hover:text-white"
>
  <div className="flex h-8 w-5 justify-center rounded-full border border-white/30 transition group-hover:border-white/60">
    <div className="mt-1 h-2 w-1 animate-bounce rounded-full bg-white" />
  </div>

  <p className="mt-2 text-xs">Scroll</p>
</button>
      </div>
    </section>
  );
}