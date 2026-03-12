import Image from "next/image";
import { contacts, heroContent, siteMeta } from "@/data/site";

export function Hero() {
  const description =
    heroContent.description.length > 0
      ? heroContent.description
      : ["Трансферы и междугородние поездки по Крыму по предварительной договоренности."];
  const highlights =
    heroContent.highlights.length > 0
      ? heroContent.highlights
      : ["Прямая связь с водителем", "Фиксация условий заранее", "Аккуратная подача ко времени"];

  return (
    <section id="hero" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[32px] border border-white/70 bg-slate p-6 text-white shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">{heroContent.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{heroContent.title}</h1>
        <div className="mt-6 grid gap-3 text-base leading-7 text-white/80">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-full bg-amber px-5 py-3 text-center text-sm font-semibold text-slate transition hover:bg-amber/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            href={contacts.phoneHref}
          >
            Позвонить: {contacts.phoneDisplay}
          </a>
          <a
            className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <li key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm leading-6">
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
        <div className="p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Машина для поездок</p>
          <p className="mt-3 text-sm leading-7 text-slate/75">
            Чистый и ухоженный автомобиль для междугородних и частных поездок по Крыму с заранее согласованным
            временем подачи.
          </p>
        </div>
      </div>
    </section>
  );
}
