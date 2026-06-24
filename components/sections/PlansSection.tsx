export default function PlansSection() {
  const plans = [
    {
      duration: "1 Year Plan",
      price: "₹12,000",
      yearly: "₹12,000/year",
      description:
        "Complete access to all SchoolRefine ERP modules with onboarding, updates, and technical support for schools with up to 500 students.",
    },
    {
      duration: "2 Year Plan",
      price: "₹20,000",
      yearly: "₹10,000/year",
      savings: "Save ₹4,000",
      description:
        "Reduced annual cost with uninterrupted access, priority support, regular updates, and long-term operational continuity.",
    },
    {
      duration: "3 Year Plan",
      price: "₹28,000",
      yearly: "₹9,333/year",
      savings: "Save ₹8,000",
      badge: "Most Popular",
      description:
        "Best value for schools planning long-term digital transformation with the lowest annual cost and continuous platform improvements.",
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
            Transparent pricing for schools with up to 500 students. Every
            plan includes full access to all SchoolRefine ERP modules with no
            hidden feature restrictions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.duration}
              className={`relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.06] ${
                plan.badge
                  ? "ring-2 ring-[var(--brand-primary)] scale-[1.02]"
                  : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute right-6 top-6 rounded-full bg-[var(--brand-primary)] px-3 py-1 text-xs font-semibold">
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

              {/* Yearly Cost */}
              <p className="mt-2 text-sm text-slate-400">
                {plan.yearly}
              </p>

              {/* Savings */}
              {plan.savings && (
                <p className="mt-2 text-sm font-medium text-green-400">
                  {plan.savings}
                </p>
              )}

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-slate-300">
                {plan.description}
              </p>

              {/* Included Features */}
              <div className="mt-8 space-y-3">
                {[
                  "Student Management",
                  "Attendance & Exams",
                  "Report Cards",
                  "Accounts & Fees",
                  "Technical Support",
                  "Software Updates & Maintenance",
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
              <button className="mt-10 w-full rounded-xl bg-[var(--brand-primary)] px-5 py-3 font-semibold  transition hover:opacity-90">
                Schedule a Demo
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          Pricing shown is applicable for schools with up to 500 students.
          Larger institutions, custom deployments, data migration, or advanced
          integrations may require a customized quotation.
        </p>
      </div>
    </section>
  );
}