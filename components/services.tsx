import { services } from "@/data/site";

export function Services() {
  const items = services.items.slice(0, 6);

  return (
    <section
      id="services"
      className="rounded-[32px] border border-[#d8c6ad] bg-[#fff9ef] p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">{services.title}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Основные услуги</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate/75">{services.intro}</p>
      {items.length > 0 ? (
        <div className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-[#d8c5ad] bg-[#f7e8d3] px-4 py-4 text-sm leading-6 text-slate/85">
              {item}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-5 text-sm leading-7 text-slate/70">
          Список услуг обновляется. Для уточнения маршрута свяжитесь с водителем напрямую.
        </p>
      )}
    </section>
  );
}
