

export default function FeaturesSection() {
  const features = [
    {
      title: "Student Management",
      description:
        "Manage student profiles, admissions, attendance records, and academic information from one centralized platform.",
    },
    {
      title: "Staff & Attendance",
      description:
        "Track staff attendance, manage employee records, and monitor school operations efficiently.",
    },
    {
      title: "Role-Based Authentication",
      description:
        "Secure access for administrators, teachers, students, and staff with dedicated dashboards and permissions.",
    },
    {
      title: "Exam & Marks Management",
      description:
        "Schedule exams, enter marks in bulk, and generate report cards with streamlined academic workflows.",
    },
    {
      title: "AI Question Paper Generator",
      description:
        "Create structured question papers for core subjects in minutes using intelligent automation tools.",
    },
    {
      title: "Accounts & Fee Collection",
      description:
        "Monitor fee payments, manage accounts, and analyze financial data with smart reporting tools.",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Core Modules
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Powerful Features for Modern Schools
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A complete school ERP platform designed to simplify academic
            operations, administration, examinations, attendance, report cards,
            and financial management.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  {/* Dot */}
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--brand-primary)]" />

                  <div>
                    <h3 className="text-base font-semibold transition group-hover:text-[var(--brand-primary)]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        {/* Right Product Preview */}
<div className="relative lg:min-h-[520px]">
  {/* Main Card */}
  <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl">

    {/* Browser Top */}
    <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
      <div className="h-3 w-3 rounded-full bg-red-400" />
      <div className="h-3 w-3 rounded-full bg-[var(--brand-primary)]" />
      <div className="h-3 w-3 rounded-full bg-green-400" />
    </div>

    {/* Main Image */}
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <img
        src="/images/modern-dashboard.png"
        alt="School ERP Dashboard Preview"
        className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
      />
    </div>
  </div>

  {/* Floating Card 1 */}
  <div
    className="
      absolute right-10 z-20 hidden lg:block
      w-64 overflow-hidden rounded-2xl
      border border-white/10 bg-white/[0.06]
      p-3 shadow-2xl backdrop-blur-xl
      -top-6 right-0
      translate-x-1/3
    "
  >
    <img
      src="/images/reports.png"
      alt="Attendance Analytics"
      className="rounded-xl"
    />
    <p className="mt-3 text-sm font-medium text-white">
      Attendance Analytics
    </p>
  </div>

  {/* Floating Card 2 */}
  <div
    className="
      absolute left-10  z-20 hidden lg:block
      w-72 overflow-hidden rounded-2xl
      border border-white/10 bg-white/[0.06]
      p-3 shadow-2xl backdrop-blur-xl
      bottom-8
      -translate-x-1/4
    "
  >
    <img
      src="/images/login.png"
      alt="Automated Report Cards"
      className="rounded-xl"
    />
    {/* <p className="mt-3 text-sm font-medium text-white">
      Automated Report Cards
    </p> */}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}