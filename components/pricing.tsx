import { pricesContent } from "@/data/prices";

export function Pricing() {
  const routes = pricesContent.routes;

  return (
    <section
      id="pricing"
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">{pricesContent.title}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Примеры маршрутов</h2>
      <p className="mt-3 text-sm leading-7 text-slate/75">{pricesContent.note}</p>
      {routes.length > 0 ? (
        <div className="mt-6 grid gap-3.5">
          {routes.map((route) => (
            <div
              key={route.route}
              className="flex flex-col gap-1 rounded-2xl border border-slate/10 bg-slate/5 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-slate/80">{route.route}</span>
              <span className="font-semibold text-slate">{route.price}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-5 text-sm leading-7 text-slate/70">
          Примеры маршрутов обновляются. Стоимость согласовывается заранее при обращении.
        </p>
      )}
    </section>
  );
}
