import { contacts } from "@/data/site";

export function Contacts() {
  const telegramLabel = contacts.telegram.replace("https://t.me/", "@");

  return (
    <section
      id="contacts"
      className="rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Контакты</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Связь с водителем напрямую</h2>
      <p className="mt-2 text-base text-slate/60">
        Водитель —{" "}
        <span className="font-semibold text-slate">{contacts.driverName}</span>, стаж более 30 лет
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <a
          className="rounded-2xl bg-slate p-5 text-sand shadow-soft transition hover:bg-[#413126] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
          href={contacts.phoneHref}
        >
          <p className="text-sm text-sand/70">Телефон</p>
          <p className="mt-2 text-xl font-semibold">{contacts.phoneDisplay}</p>
        </a>
        <a
          className="rounded-2xl bg-[#f0ddc2] p-5 text-slate shadow-soft ring-1 ring-[#c7ae90] transition hover:ring-[#b79d7f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
          href={contacts.telegram}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm text-slate/60">Telegram</p>
          <p className="mt-2 text-xl font-semibold">{telegramLabel}</p>
        </a>
        <a
          className="rounded-2xl bg-[#f0ddc2] p-5 text-slate shadow-soft ring-1 ring-[#c7ae90] transition hover:ring-[#b79d7f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
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
