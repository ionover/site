import Image from "next/image";
import Link from "next/link";
import { faqContent } from "@/data/faq";
import { pricesContent } from "@/data/prices";
import {
  advantages,
  carsSection,
  contacts,
  heroContent,
  navigation,
  services,
  siteMeta,
  tripOptions,
} from "@/data/site";
import { testimonialsContent } from "@/data/testimonials";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-8 lg:px-10">
      <header className="mb-10 flex flex-col gap-6 rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate sm:text-5xl">
            {heroContent.title}
          </h1>
          <div className="mt-4 grid gap-3 text-base leading-7 text-slate/80">
            {heroContent.description.map((paragraph) => (
              <p key={paragraph} className="max-w-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm font-medium text-slate/80">
          <Link
            className="rounded-full bg-slate px-5 py-3 text-center text-white transition hover:bg-slate/90"
            href="/policy"
          >
            Политика
          </Link>
          <Link
            className="rounded-full border border-slate/15 bg-white px-5 py-3 text-center transition hover:border-slate/35"
            href="/agreement"
          >
            Соглашение
          </Link>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-white/70 bg-slate p-6 text-white shadow-soft sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
            Навигация и структура
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {navigation.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm"
              >
                {section.label}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">{services.title}</p>
            <p className="mt-2 text-sm leading-6 text-white/75">{services.intro}</p>
            <ul className="mt-4 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
              {services.items.slice(0, 6).map((item) => (
                <li key={item} className="rounded-xl border border-white/10 px-3 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-soft">
          <div className="relative aspect-[4/3]">
            <Image
              src={siteMeta.placeholderImage}
              alt={carsSection.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
              {carsSection.title}
            </p>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-slate/80">
              {carsSection.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate/80">
              Временное изображение берется из{" "}
              <code className="rounded bg-slate/10 px-1.5 py-0.5 text-[0.95em] text-slate">
                {siteMeta.placeholderImage}
              </code>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            Контакты
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate">{contacts.driverName}</h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-slate/80">
            <a className="hover:text-slate" href={contacts.phoneHref}>
              {contacts.phoneDisplay}
            </a>
            <a className="hover:text-slate" href={`mailto:${contacts.email}`}>
              {contacts.email}
            </a>
            <a className="hover:text-slate" href={contacts.telegram}>
              Telegram
            </a>
            <p>{contacts.note}</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            Преимущества
          </p>
          <div className="mt-4 grid gap-3">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate/5 p-4">
                <h2 className="text-base font-semibold text-slate">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            Ключевые тезисы
          </p>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate/80">
            {heroContent.highlights.map((item) => (
              <li key={item} className="rounded-2xl bg-slate/5 p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            {tripOptions.title}
          </p>
          <div className="mt-4 grid gap-4">
            {tripOptions.columns.map((column) => (
              <div key={column.title} className="rounded-2xl bg-slate/5 p-5">
                <h2 className="text-lg font-semibold text-slate">{column.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate/75">{column.description}</p>
                <ul className="mt-4 grid gap-3">
                  {column.items.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm font-semibold text-slate">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate/75">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
              {pricesContent.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate/75">{pricesContent.note}</p>
            <div className="mt-4 grid gap-3">
              {pricesContent.routes.map((route) => (
                <div
                  key={route.route}
                  className="flex items-center justify-between rounded-2xl bg-slate/5 px-4 py-3 text-sm"
                >
                  <span className="text-slate/80">{route.route}</span>
                  <span className="font-semibold text-slate">{route.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
              {faqContent.title}
            </p>
            <div className="mt-4 grid gap-3">
              {faqContent.items.map((item) => (
                <div key={item.question} className="rounded-2xl bg-slate/5 p-4">
                  <h2 className="text-sm font-semibold text-slate">{item.question}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate/75">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
          {testimonialsContent.title}
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {testimonialsContent.items.map((item) => (
            <blockquote key={item.author} className="rounded-2xl bg-slate/5 p-5">
              <p className="text-sm leading-6 text-slate/80">{item.text}</p>
              <footer className="mt-3 text-sm font-semibold text-slate">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
