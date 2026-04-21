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
    <section id="cars" className="section-pad bg-white">
      <div className="site-row text-center">
        <h2 className="section-title">{carsSection.title}</h2>
        <div className="mx-auto mt-5 grid max-w-4xl gap-3 text-[clamp(1.05rem,2.4vw,1.22rem)] leading-[1.8] text-[#555]">
          {carsSection.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div
        className="site-row-full mt-10 overflow-hidden bg-[#eef3f8]"
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
              <div className="relative h-[64svh] min-h-[380px] bg-[#e7eef5] lg:h-[760px]">
                <Image src={slide.image} alt="" fill className="scale-110 object-cover opacity-25 blur-2xl" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/40" />
                <div className="absolute inset-0 p-3 sm:p-7 lg:p-10">
                  <div className="relative h-full w-full">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt || carsSection.imageAlt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="site-row border-t border-[#dce6ef] py-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-[Montserrat] text-sm font-semibold uppercase tracking-[0.12em] text-[#555]">
              {activeSlide ? `${activeIndex + 1} / ${slides.length}` : ""}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={moveToPrevious}
                className="border border-[#202020] px-4 py-2 font-[Montserrat] text-base font-bold text-[#202020] transition hover:border-[#2ea3f2] hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35"
              >
                {"<"}
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={moveToNext}
                className="border border-[#202020] px-4 py-2 font-[Montserrat] text-base font-bold text-[#202020] transition hover:border-[#2ea3f2] hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35"
              >
                {">"}
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35 sm:h-20 sm:w-32 ${
                  activeIndex === index
                    ? "border-[#2ea3f2] ring-2 ring-[#2ea3f2]/30"
                    : "border-[#dce6ef] hover:border-[#2ea3f2]"
                }`}
              >
                <Image src={slide.image} alt="" fill sizes="96px" className="object-cover" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="site-row mt-8">
        <p className="mx-auto max-w-4xl border-l-4 border-[#2ea3f2] bg-[#f1f5f9] px-6 py-5 text-[clamp(1.05rem,2.4vw,1.22rem)] leading-[1.8] text-[#555]">
          {carsSection.comfortNote}
        </p>
      </div>
    </section>
  );
}
