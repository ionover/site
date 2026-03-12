import Image from "next/image";
import { contacts, heroContent, siteMeta } from "@/data/site";

export function Hero() {
  const shortDescription =
    heroContent.description[0] ??
    "Трансферы и междугородние поездки по Крыму по предварительной договоренности.";

  return (
    <section id="hero" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[24px] border border-[#705139] bg-[#493327] p-6 text-sand shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f1c694]">{heroContent.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{heroContent.title}</h1>

        <div className="mt-6 grid gap-3 text-base leading-7 text-sand/85">
          <p>{shortDescription}</p>
          <p className="text-sand">
            Частный водитель {contacts.driverName}, без посредников: вы заранее знаете, кто вас повезет и на каких
            условиях.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <a
            className="rounded-full bg-amber px-5 py-3 text-center text-base font-semibold text-sand transition hover:bg-[#945327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            href={contacts.phoneHref}
          >
            {contacts.phoneDisplay}
          </a>
          <a
            className="rounded-full border border-[#d6b28c]/45 bg-[#5c4230] px-5 py-3 text-center text-base font-semibold text-sand transition hover:bg-[#674a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
        </div>

      </div>

      <div className="overflow-hidden rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] shadow-soft">
        <div className="relative aspect-[16/11]">
          <Image
            src={siteMeta.placeholderImage}
            alt="Автомобиль для трансфера по Крыму"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1f]/78 via-[#3b2a1f]/24 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-sand">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1c694]">Главное на старте</p>
            <p className="mt-2 text-lg font-semibold sm:text-xl">Один водитель, чистая машина, понятные условия.</p>
          </div>
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
