import Image from "next/image";
import toySideImage from "@/media/toyota/toy_side.jpeg";
import { contacts, heroContent } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[24px] border border-[#705139] bg-[#493327] p-6 text-white shadow-soft sm:p-8">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">{heroContent.title}</h1>

        <div className="mt-6 grid gap-3 text-base leading-7 text-white">
          {heroContent.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-xl font-semibold uppercase tracking-[0.2em] text-white">Предлагаемые услуги:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-white">
            {heroContent.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <a
            className="flex h-20 items-center justify-center rounded-full bg-amber px-5 text-center text-[38px] font-semibold text-sand transition hover:bg-[#945327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            href={contacts.phoneHref}
          >
            {contacts.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] shadow-soft">
        <div className="relative aspect-[16/9]">
          <Image src={toySideImage} alt="Автомобиль Toyota для трансфера по Крыму" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1f]/78 via-[#3b2a1f]/24 to-transparent" />
        </div>
        <div className="flex flex-col gap-3 p-6 sm:p-7">
          <a
            className="flex h-[60px] items-center justify-center rounded-full border border-[#d6b28c]/45 bg-[#5c4230] px-5 text-center text-2xl font-semibold text-sand transition hover:bg-[#674a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
          <a
            className="flex h-[60px] items-center justify-center rounded-full border border-[#d6b28c]/45 bg-[#5c4230] px-5 text-center text-2xl font-semibold text-sand transition hover:bg-[#674a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Max
          </a>
        </div>
      </div>
    </section>
  );
}
