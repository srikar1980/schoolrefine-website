export default function OperationsSection() {
  const roles = [
    {
      title: "Administration",
      description:
        "Manage admissions, staff, attendance, fees, exams, and school-wide operations from a centralized dashboard.",
    },
    {
      title: "Teachers",
      description:
        "Track attendance, manage timetables, enter marks, create question papers, and monitor student performance.",
    },
    {
      title: "Students",
      description:
        "Access academic records, practice papers, schedules, announcements, and performance reports anytime.",
    },
    {
      title: "Parents",
      description:
        "Stay informed with attendance updates, report cards, fee details, and important school communication.",
    },
  ];

  return (
    <section
      id="operations"
      className="relative overflow-hidden bg-slate-900 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Built for Everyone
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            One Platform for Your Entire School
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Designed for administrators, teachers, students, and parents to
            simplify communication, academic workflows, and school management.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h3 className="text-xl font-semibold">{role.title}</h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}