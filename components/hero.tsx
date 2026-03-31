import Image from "next/image";
import toySideImage from "@/media/toyota/toy_side.jpeg";
import { contacts, heroContent } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
      <div className="flex h-full flex-col rounded-[24px] border border-[#705139] bg-[#493327] p-6 text-white shadow-soft sm:p-8">
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{heroContent.title}</h1>

        <div className="mt-6 grid gap-3 text-sm leading-6 text-white sm:text-[15px] sm:leading-7">
          {heroContent.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold uppercase tracking-[0.16em] text-white sm:text-xl">Предлагаемые услуги:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-white sm:text-[15px] sm:leading-7">
            {heroContent.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 sm:mt-10">
          <a
            className="flex h-16 w-full max-w-full items-center justify-center whitespace-nowrap rounded-full bg-amber px-4 text-center text-[clamp(1.15rem,6vw,2.35rem)] font-semibold leading-none tracking-tight text-sand transition hover:bg-[#945327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35 sm:h-20 sm:px-5"
            href={contacts.phoneHref}
          >
            {contacts.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] shadow-soft">
        <div className="relative min-h-[220px] flex-1 bg-[#f7e9d3] sm:min-h-[280px] lg:min-h-[320px]">
          <Image src={toySideImage} alt="Автомобиль Toyota для трансфера по Крыму" fill className="object-contain" priority />
        </div>
        <div className="flex flex-col gap-3 p-5 sm:p-6">
          <a
            className="flex h-14 w-full items-center justify-center whitespace-nowrap rounded-full border border-[#d6b28c]/45 bg-[#5c4230] px-4 text-center text-[clamp(0.95rem,4.2vw,1.45rem)] font-semibold leading-none text-sand transition hover:bg-[#674a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 sm:h-[60px] sm:px-5"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
          <a
            className="flex h-14 w-full items-center justify-center whitespace-nowrap rounded-full border border-[#d6b28c]/45 bg-[#5c4230] px-4 text-center text-[clamp(0.95rem,4.2vw,1.45rem)] font-semibold leading-none text-sand transition hover:bg-[#674a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 sm:h-[60px] sm:px-5"
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
