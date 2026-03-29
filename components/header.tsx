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
    <header className="sticky top-0 z-50 w-full border-b border-[#c8af91] bg-white shadow-soft">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-12">
          <Image src={faviconer} alt="Крым Такси" width={faviconer.width} height={faviconer.height} priority />
          <a
            className="inline-flex w-fit rounded-full bg-slate px-4 py-2.5 text-sm font-semibold tracking-wide text-sand transition hover:bg-[#413126] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
            href={contacts.phoneHref}
          >
            {contacts.phoneDisplay}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex rounded-full border border-[#c8af91] bg-[#efdec4] px-3.5 py-2 text-sm font-semibold text-slate transition hover:border-[#b89f82] hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-nav"
          >
            {isMenuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex flex-wrap justify-end gap-2.5 text-sm text-slate/85">
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                <a
                  className="rounded-full border border-[#c8af91] bg-[#efdec4] px-3 py-1.5 transition hover:border-[#b89f82] hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
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
        className={`${isMenuOpen ? "grid" : "hidden"} border-t border-[#d9c3a8] lg:hidden`}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-3 px-5 py-4 sm:px-8 lg:px-10">
          <ul className="grid gap-2 text-sm text-slate/85">
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                <a
                  className="block rounded-2xl border border-[#c8af91] bg-[#efdec4] px-3.5 py-2.5 transition hover:border-[#b89f82] hover:bg-[#e8d4b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
                  href={`#${item.id}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="inline-flex w-fit rounded-full bg-slate px-4 py-2.5 text-sm font-semibold tracking-wide text-sand transition hover:bg-[#413126] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
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
