import { contacts, howToOrder } from "@/data/site";

export function HowToOrder() {
  return (
    <section
      id="how-to-order"
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Как заказать</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">{howToOrder.title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate/75">{howToOrder.intro}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {howToOrder.steps.map((step) => (
          <div key={step.num} className="rounded-2xl border border-slate/10 bg-slate/5 p-5">
            <p className="text-2xl font-bold text-amber/60">{step.num}</p>
            <p className="mt-3 text-base font-semibold text-slate">{step.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate/70">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-slate/10 bg-slate/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-slate/75">{howToOrder.cancelNote}</p>
        <div className="flex shrink-0 gap-3">
          <a
            className="rounded-full bg-slate px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
            href={contacts.phoneHref}
          >
            Позвонить
          </a>
          <a
            className="rounded-full border border-slate/20 bg-white px-4 py-2.5 text-sm font-semibold text-slate transition hover:border-slate/30 hover:bg-slate/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}