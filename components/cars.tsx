"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { carsSection, siteMeta } from "@/data/site";

export function Cars() {
  const slides = carsSection.slides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const moveToPrevious = () => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const moveToNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  useEffect(() => {
    if (isPaused || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, carsSection.autoplayMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, slides.length]);

  return (
    <section id="cars" className="rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] p-6 shadow-soft sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">{carsSection.title}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">Комфортная машина для поездок</h2>
      <div className="mt-3 grid gap-2 text-sm leading-7 text-slate/75">
        {carsSection.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div
        className="mt-6 overflow-hidden rounded-2xl border border-[#c7ae90] bg-[#f0ddc2] shadow-soft"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article key={slide.id} className="min-w-full">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image src={siteMeta.placeholderImage} alt={carsSection.imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1f]/76 via-transparent to-transparent" />
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[#c7ae90] px-3 py-3 sm:px-4">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Показать слайд ${index + 1}`}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  activeIndex === index ? "bg-amber" : "bg-[#bfa587] hover:bg-[#aa8f72]"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={moveToPrevious}
              className="rounded-full border border-[#bea486] px-3 py-1.5 text-sm font-semibold text-slate transition hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Следующий слайд"
              onClick={moveToNext}
              className="rounded-full border border-[#bea486] px-3 py-1.5 text-sm font-semibold text-slate transition hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 rounded-2xl border border-amber/35 bg-[#ecdabd] p-4 text-sm leading-7 text-slate/80">
        {carsSection.comfortNote}
      </p>
    </section>
  );
}
