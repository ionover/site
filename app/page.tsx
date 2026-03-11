import Image from "next/image";
import Link from "next/link";

const sections = [
  "Hero",
  "Services",
  "CarsGallery",
  "Advantages",
  "TripOptions",
  "Testimonials",
  "Faq",
  "Pricing",
  "Contacts",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-8 lg:px-10">
      <header className="mb-10 flex flex-col gap-6 rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            Этап 2 готов
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate sm:text-5xl">
            Новый каркас сайта на Next.js и Tailwind подготовлен.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate/80">
            Подключен App Router, настроены базовые metadata, структура каталогов и
            временные страницы. Фото пока заменены единым плейсхолдером.
          </p>
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

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-white/70 bg-slate p-6 text-white shadow-soft sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
            Базовая структура
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm"
              >
                {section}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-soft">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/i.jpeg"
              alt="Временный плейсхолдер для фотографий сайта"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
              Фото-времянка
            </p>
            <p className="mt-3 text-sm leading-6 text-slate/80">
              Пока реальные фотографии не переданы, в проекте используется
              `public/images/i.jpeg` как единый временный источник для всех визуальных
              блоков.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
