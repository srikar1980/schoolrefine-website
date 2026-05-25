export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-28 text-white"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
          Contact Us
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Ready to Transform Your School Operations?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Schedule a free demo and discover how our School ERP platform can
          simplify administration, improve academic workflows, and enhance
          communication.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-xl bg-[var(--brand-primary)] px-6 py-3 font-semibold text-slate-900 transition hover:bg-[var(--brand-primary)]">
            Book a Free Demo
          </button>

          <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/10">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}