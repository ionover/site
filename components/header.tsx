"use client";

import { useState } from "react";
import Image from "next/image";
import faviconer from "@/faviconer.png";
import { contacts, navigation } from "@/data/site";

const primaryNavIds = ["services", "cars", "pricing", "faq", "contacts"] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryNavigation = primaryNavIds
    .map((id) => navigation.find((item) => item.id === id))
    .filter((item): item is (typeof navigation)[number] => item !== undefined);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.3)]">
      <div className="site-row flex min-h-[76px] items-center justify-between gap-5 py-0">
        <div className="flex min-w-0 items-center gap-5 sm:gap-9">
          <Image
            src={faviconer}
            alt="Крым Такси"
            width={faviconer.width}
            height={faviconer.height}
            className="h-12 w-auto sm:h-14"
            priority
          />
          <a
            className="hidden whitespace-nowrap font-[Montserrat] text-[clamp(1.15rem,3vw,1.75rem)] font-bold leading-none text-[#202020] transition hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35 sm:inline-flex"
            href={contacts.phoneHref}
          >
            {contacts.phoneDisplay}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex border border-slate-300 bg-white px-4 py-2.5 text-base font-bold text-[#202020] transition hover:border-[#2ea3f2] hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-nav"
          >
            {isMenuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex flex-wrap justify-end gap-x-7 gap-y-3 font-[Montserrat] text-[15px] font-semibold uppercase tracking-[0.02em] text-[#202020]">
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                <a
                  className="transition hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35"
                  href={`#${item.id}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-main-nav"
        aria-label="Мобильная навигация"
        className={`${isMenuOpen ? "grid" : "hidden"} border-t border-slate-200 bg-white lg:hidden`}
      >
        <div className="site-row grid gap-3 py-5">
          <ul className="grid gap-2 font-[Montserrat] text-base font-semibold uppercase text-[#202020]">
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                <a
                  className="block border border-slate-200 px-4 py-3 transition hover:border-[#2ea3f2] hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35"
                  href={`#${item.id}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="inline-flex w-fit border-2 border-[#202020] px-5 py-3 font-[Montserrat] text-lg font-bold text-[#202020] transition hover:border-[#2ea3f2] hover:text-[#2ea3f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ea3f2]/35"
            href={contacts.phoneHref}
            onClick={closeMenu}
          >
            {contacts.phoneDisplay}
          </a>
        </div>
      </nav>
    </header>
  );
}
