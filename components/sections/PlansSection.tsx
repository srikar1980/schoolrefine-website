export default function PlansSection() {
  const plans = [
    {
      duration: "1 Year Plan",
      price: "₹25,000",
      description:
        "Complete access to all ERP modules including student management, exams, attendance, report cards, accounts, and administration tools.",
    },
    {
      duration: "3 Year Plan",
      price: "₹60,000",
      badge: "Most Popular",
      description:
        "Best value for schools looking for long-term digital transformation with reduced yearly pricing and continuous support.",
    },
    {
      duration: "5 Year Plan",
      price: "₹90,000",
      description:
        "Ideal for institutions seeking long-term stability, operational continuity, and maximum pricing advantage.",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-900 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Simple & Transparent Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            One Complete Platform for Your School
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            All plans include full access to every module with no hidden feature
            restrictions. Schools receive better pricing benefits for long-term
            partnerships.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.duration}
              className={`relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.06] ${
                plan.badge ? "ring-1 ring-yellow-300/40" : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute right-6 top-6 rounded-full bg-[var(--brand-primary)] px-3 py-1 text-xs font-semibold text-slate-900">
                  {plan.badge}
                </div>
              )}

              {/* Plan */}
              <h3 className="text-2xl font-bold">{plan.duration}</h3>

              {/* Price */}
              <div className="mt-6">
                <span className="text-5xl font-bold">{plan.price}</span>

                <span className="ml-2 text-slate-400">total</span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-slate-300">
                {plan.description}
              </p>

              {/* Included */}
              <div className="mt-8 space-y-3">
                {[
                  "Student Management",
                  "Attendance & Exams",
                  "Report Cards",
                  "Accounts & Fees",
                  "Technical Support",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <div className="h-2 w-2 rounded-full bg-[var(--brand-primary)]" />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-10 w-full rounded-xl bg-[var(--brand-primary)] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[var(--brand-primary)]">
                Schedule a Demo
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          Pricing may vary depending on student strength, deployment scope,
          onboarding requirements, and customization needs.
        </p>
      </div>
    </section>
  );
}