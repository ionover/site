import { tripOptions } from "@/data/site";

export function TripOptions() {
  const columns = tripOptions.columns;
  const features = tripOptions.features;

  return (
    <section
      id="trip-options"
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Сценарии поездок</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">{tripOptions.title}</h2>

      {columns.length > 0 ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {columns.map((column) => (
            <article key={column.title} className="rounded-2xl border border-slate/10 bg-slate/5 p-5">
              <h3 className="text-lg font-semibold text-slate">{column.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate/70">{column.description}</p>
              <div className="mt-4 grid gap-3">
                {column.items.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate/10 bg-white/70 p-4">
                    <p className="text-sm font-semibold text-slate">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-5 text-sm leading-7 text-slate/70">
          Варианты поездок обновляются. Свяжитесь с водителем, чтобы согласовать индивидуальный маршрут.
        </p>
      )}

      {features.length > 0 && (
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate/10 bg-white px-4 py-4">
              <p className="text-sm font-semibold text-slate">{feature.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate/70">{feature.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
