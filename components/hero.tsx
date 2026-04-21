import Image from "next/image";
import toySideImage from "@/media/toyota/toy_side.jpeg";
import { contacts, heroContent } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="dark-road relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-15">
        <Image
          src={toySideImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-[#0f2336]/90" />

      <div className="site-row-full relative grid min-h-[calc(100svh-76px)] items-center lg:grid-cols-2">
        <div className="px-5 py-12 sm:px-10 sm:py-16 lg:px-[6vw]">
          <h1 className="max-w-3xl font-[Montserrat] text-[clamp(2.4rem,5vw,3.125rem)] font-bold leading-[1.18] text-white">
            {heroContent.title}
          </h1>

          <div className="mt-7 max-w-2xl space-y-4 text-[clamp(1.12rem,2.3vw,1.25rem)] font-medium leading-[1.7] text-white">
            {heroContent.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9">
            <p className="font-[Montserrat] text-[clamp(1.5rem,3vw,1.625rem)] font-semibold leading-tight text-white">
              Предлагаемые услуги:
            </p>
            <ul className="mt-4 grid list-[circle] gap-x-8 gap-y-2 pl-6 text-[clamp(1.05rem,2.1vw,1.125rem)] font-medium leading-[2] text-white sm:grid-cols-2">
              {heroContent.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <a
              className="font-[Montserrat] text-[clamp(2rem,6vw,2.5rem)] font-bold leading-none text-white transition hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              href={contacts.phoneHref}
            >
              {contacts.phoneDisplay}
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                className="border-2 border-white px-5 py-3 font-[Montserrat] text-base font-bold text-white transition hover:bg-white hover:text-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                className="border-2 border-white px-5 py-3 font-[Montserrat] text-base font-bold text-white transition hover:bg-white hover:text-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Max
              </a>
            </div>
          </div>
        </div>

        <div className="flex min-h-[42svh] items-start self-stretch px-5 pb-10 pt-4 sm:px-10 lg:min-h-[calc(100svh-76px)] lg:px-0 lg:py-10">
          <Image
            src={toySideImage}
            alt="Автомобиль Toyota для трансфера по Крыму"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
