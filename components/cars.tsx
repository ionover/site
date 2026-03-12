import Image from "next/image";
import { carsSection, siteMeta } from "@/data/site";

const previewSlides = [1, 2, 3];

export function Cars() {
  return (
    <section
      id="cars"
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">{carsSection.title}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Комфортная машина для поездок</h2>
      <div className="mt-3 grid gap-2 text-sm leading-7 text-slate/75">
        {carsSection.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {previewSlides.map((slide) => (
          <article key={slide} className="overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image src={siteMeta.placeholderImage} alt={carsSection.imageAlt} fill className="object-cover" />
            </div>
            <div className="px-4 py-3 text-sm text-slate/70">Фото автомобиля {slide}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
