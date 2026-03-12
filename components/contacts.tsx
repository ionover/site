import { contacts } from "@/data/site";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Контакты</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Связь с водителем напрямую</h2>
      <p className="mt-2 text-base text-slate/60">
        Водитель —{" "}
        <span className="font-semibold text-slate">{contacts.driverName}</span>, стаж более 30 лет
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <a
          className="rounded-2xl bg-slate p-5 text-white shadow-soft transition hover:bg-slate/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
          href={contacts.phoneHref}
        >
          <p className="text-sm text-white/70">Телефон</p>
          <p className="mt-2 text-xl font-semibold">{contacts.phoneDisplay}</p>
        </a>
        <a
          className="rounded-2xl bg-white p-5 text-slate shadow-soft ring-1 ring-slate/10 transition hover:ring-slate/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
          href={contacts.telegram}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm text-slate/60">Telegram</p>
          <p className="mt-2 text-xl font-semibold">@Vova_0888</p>
        </a>
        <a
          className="rounded-2xl bg-white p-5 text-slate shadow-soft ring-1 ring-slate/10 transition hover:ring-slate/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
          href={`mailto:${contacts.email}`}
        >
          <p className="text-sm text-slate/60">Email</p>
          <p className="mt-2 text-xl font-semibold">{contacts.email}</p>
        </a>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate/75">{contacts.note}</p>
    </section>
  );
}
