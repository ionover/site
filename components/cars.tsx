"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { carsSection } from "@/data/site";

export function Cars() {
  const slides = carsSection.slides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

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
          {slides.map((slide, index) => (
            <article key={slide.id} className="min-w-full">
              <div className="relative h-[260px] bg-[#d8c3a8] sm:h-[360px] lg:h-[420px]">
                <Image src={slide.image} alt="" fill className="scale-110 object-cover opacity-35 blur-2xl" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1f]/15 via-transparent to-[#f0ddc2]/20" />
                <div className="absolute inset-0 p-3 sm:p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt || carsSection.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1100px"
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-[#c7ae90] px-3 py-3 sm:px-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/65">
              {activeSlide ? `${activeIndex + 1} / ${slides.length}` : ""}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={moveToPrevious}
                className="rounded-full border border-[#bea486] px-3 py-1.5 text-sm font-semibold text-slate transition hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
              >
                {"<"}
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={moveToNext}
                className="rounded-full border border-[#bea486] px-3 py-1.5 text-sm font-semibold text-slate transition hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
              >
                {">"}
              </button>
            </div>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35 sm:h-16 sm:w-24 ${
                  activeIndex === index
                    ? "border-amber ring-2 ring-amber/30"
                    : "border-[#bfa587] hover:border-[#aa8f72]"
                }`}
              >
                <Image src={slide.image} alt="" fill sizes="96px" className="object-cover" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 rounded-2xl border border-amber/35 bg-[#ecdabd] p-4 text-sm leading-7 text-slate/80">
        {carsSection.comfortNote}
      </p>
    </section>
  );
}
