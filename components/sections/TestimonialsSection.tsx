export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Trusted by Schools & Educators
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md"
            >
              <p className="text-sm leading-relaxed text-slate-300">
                “This platform simplified our school administration and reduced
                manual work significantly. Attendance, exams, and fee management
                became seamless.”
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">School Principal</h3>

                <p className="text-sm text-slate-400">
                  ABC International School
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}