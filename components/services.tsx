import { services } from "@/data/site";

export function Services() {
  return (
    <section
      id="services"
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">{services.title}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Основные услуги</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate/75">{services.intro}</p>
      <div className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
        {services.items.slice(0, 6).map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate/10 bg-slate/5 px-4 py-4 text-sm leading-6 text-slate/80"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
