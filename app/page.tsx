import Image from "next/image";
import { pricesContent } from "@/data/prices";
import { contacts, heroContent, services, siteMeta } from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-8 lg:px-10">
      <header className="flex items-center justify-between rounded-[28px] border border-white/70 bg-white/80 px-5 py-4 shadow-soft backdrop-blur sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">
            {siteMeta.name}
          </p>
          <p className="mt-1 text-sm text-slate/70">{siteMeta.tagline}</p>
        </div>
        <a
          className="rounded-full bg-slate px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate/90"
          href={contacts.phoneHref}
        >
          {contacts.phoneDisplay}
        </a>
      </header>

      <main className="flex-1">
        <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/70 bg-slate p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {heroContent.title}
            </h1>
            <div className="mt-5 grid gap-3 text-base leading-7 text-white/80">
              {heroContent.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-amber px-5 py-3 text-center text-sm font-semibold text-slate transition hover:bg-amber/90"
                href={contacts.phoneHref}
              >
                Позвонить: {contacts.phoneDisplay}
              </a>
              <a
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </a>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroContent.highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src={siteMeta.placeholderImage}
                alt="Автомобиль для трансфера по Крыму"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
                Машина для поездок
              </p>
              <p className="mt-3 text-sm leading-6 text-slate/75">
                На первом экране используется реальная фотография автомобиля, чтобы локально сразу
                видеть базовую структуру будущего лендинга.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mt-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            {services.title}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Основные услуги</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate/75">{services.intro}</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {services.items.slice(0, 6).map((item) => (
              <div key={item} className="rounded-2xl bg-slate/5 px-4 py-4 text-sm text-slate/80">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="mt-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            {pricesContent.title}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">
            Примеры маршрутов
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate/75">{pricesContent.note}</p>
          <div className="mt-6 grid gap-3">
            {pricesContent.routes.map((route) => (
              <div
                key={route.route}
                className="flex flex-col gap-1 rounded-2xl bg-slate/5 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-slate/80">{route.route}</span>
                <span className="font-semibold text-slate">{route.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contacts"
          className="mt-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Контакты</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">
            Связь напрямую с водителем
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a className="rounded-2xl bg-slate p-5 text-white shadow-soft" href={contacts.phoneHref}>
              <p className="text-sm text-white/70">Телефон</p>
              <p className="mt-2 text-xl font-semibold">{contacts.phoneDisplay}</p>
            </a>
            <a
              className="rounded-2xl bg-white p-5 text-slate shadow-soft ring-1 ring-slate/10"
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm text-slate/60">Telegram</p>
              <p className="mt-2 text-xl font-semibold">@Vova_0888</p>
            </a>
            <a
              className="rounded-2xl bg-white p-5 text-slate shadow-soft ring-1 ring-slate/10"
              href={`mailto:${contacts.email}`}
            >
              <p className="text-sm text-slate/60">Email</p>
              <p className="mt-2 text-xl font-semibold">{contacts.email}</p>
            </a>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate/75">{contacts.note}</p>
        </section>
      </main>

      <footer className="mt-6 rounded-[28px] border border-white/70 bg-white/80 px-5 py-4 text-sm text-slate/70 shadow-soft sm:px-6">
        <p>{siteMeta.name}</p>
        <p className="mt-1">Частный трансфер по Крыму. Для заказа удобнее звонок или Telegram.</p>
      </footer>
    </div>
  );
}
