import Image from "next/image";
import toySideImage from "@/media/toyota/toy_side.jpeg";
import { contacts, heroContent } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="dark-road relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={toySideImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center blur-[1px]"
          priority
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-[#0f2336]/80" />

      <div className="site-row-full relative grid items-start gap-4 lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-0 xl:min-h-[660px]">
        <div className="px-5 pb-6 pt-9 sm:px-10 sm:pb-8 sm:pt-12 lg:px-[6vw] lg:py-[5vw]">
          <h1 className="max-w-3xl font-[Montserrat] text-[clamp(2.2rem,4.6vw,3.125rem)] font-bold leading-[1.12] text-white">
            {heroContent.title}
          </h1>

          <div className="mt-5 max-w-2xl space-y-3 text-[clamp(1.05rem,2vw,1.2rem)] font-medium leading-[1.65] text-white">
            {heroContent.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7">
            <p className="font-[Montserrat] text-[clamp(1.35rem,2.7vw,1.55rem)] font-semibold leading-tight text-white">
              Предлагаемые услуги:
            </p>
            <ul className="mt-3 grid list-[circle] gap-x-8 gap-y-1.5 pl-6 text-[clamp(1rem,1.8vw,1.08rem)] font-medium leading-[1.8] text-white sm:grid-cols-2">
              {heroContent.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-col gap-4">
            <a
              className="font-[Montserrat] text-[clamp(1.9rem,5.5vw,2.45rem)] font-bold leading-none text-white transition hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
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

        <div className="flex items-start self-stretch px-0 pb-7 pt-0 sm:px-8 lg:items-center lg:px-0 lg:pb-0 lg:pt-8">
          <Image
            src={toySideImage}
            alt="Автомобиль Toyota для трансфера по Крыму"
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="ml-auto h-auto w-[112%] max-w-none object-contain sm:w-full lg:w-[112%] xl:w-[118%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
