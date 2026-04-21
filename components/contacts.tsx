import { contacts } from "@/data/site";

export function Contacts() {
  const telegramLabel = contacts.telegram.replace("https://t.me/", "@");

  return (
    <section
      id="contacts"
      className="dark-road section-pad text-white"
    >
      <div className="site-row grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h2 className="section-title text-white">Связь с водителем напрямую</h2>
          <p className="mt-5 text-[clamp(1.08rem,2.4vw,1.25rem)] leading-[1.75] text-white/90">
            Водитель - <span className="font-bold text-white">{contacts.driverName}</span>, стаж более 30 лет.
          </p>
          <p className="mt-4 text-[clamp(1.08rem,2.4vw,1.25rem)] leading-[1.75] text-white/90">
            Звоните или пишите, на номере доступны мессенджеры.
          </p>
        </div>

        <div className="grid gap-4">
          <a
            className="block bg-white px-6 py-6 text-[#202020] shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            href={contacts.phoneHref}
          >
            <p className="section-kicker text-[#2ea3f2]">Телефон</p>
            <p className="mt-2 font-[Montserrat] text-[clamp(1.65rem,5vw,2.8rem)] font-bold leading-tight">
              {contacts.phoneDisplay}
            </p>
          </a>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              className="block border-2 border-white px-6 py-5 text-white transition hover:bg-white hover:text-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <p className="section-kicker">Telegram</p>
              <p className="mt-2 font-[Montserrat] text-xl font-bold">{telegramLabel}</p>
            </a>
            <a
              className="block border-2 border-white px-6 py-5 text-white transition hover:bg-white hover:text-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              href={`mailto:${contacts.email}`}
            >
              <p className="section-kicker">Email</p>
              <p className="mt-2 break-words font-[Montserrat] text-xl font-bold">{contacts.email}</p>
            </a>
          </div>
        </div>

        <p className="border-l-4 border-[#2ea3f2] pl-5 text-[clamp(1.02rem,2.2vw,1.16rem)] leading-[1.75] text-white/85 lg:col-span-2">
          {contacts.note}
        </p>
      </div>
    </section>
  );
}
