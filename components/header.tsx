"use client";

import { useState } from "react";
import { contacts, navigation, siteMeta } from "@/data/site";

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
    <header className="rounded-[28px] border border-[#d8c6ad] bg-[#fff7ea] px-5 py-4 shadow-soft sm:px-6">
      <div className="flex items-start justify-between gap-4 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">{siteMeta.name}</p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate/80">{siteMeta.tagline}</p>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            className="inline-flex w-fit rounded-full bg-slate px-4 py-2.5 text-sm font-semibold tracking-wide text-sand transition hover:bg-slate/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
            href={contacts.phoneHref}
          >
            {contacts.phoneDisplay}
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-[#ccb79c] bg-[#f9eddd] px-3.5 py-2 text-sm font-semibold text-slate transition hover:border-[#bfaa90] hover:bg-[#f3e2cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-nav"
          >
            {isMenuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>
      </div>

      <div className="mt-4 hidden items-center justify-between gap-6 lg:flex">
        <nav aria-label="Основная навигация">
          <ul className="flex flex-wrap gap-2.5 text-sm text-slate/85">
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                <a
                  className="rounded-full border border-[#ccb79c] bg-[#f9eddd] px-3 py-1.5 transition hover:border-[#bfaa90] hover:bg-[#f3e2cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
                  href={`#${item.id}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="inline-flex w-fit rounded-full bg-slate px-4 py-2.5 text-sm font-semibold tracking-wide text-sand transition hover:bg-slate/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
          href={contacts.phoneHref}
        >
          {contacts.phoneDisplay}
        </a>
      </div>

      <nav
        id="mobile-main-nav"
        aria-label="Мобильная навигация"
        className={`${isMenuOpen ? "mt-4 grid" : "hidden"} gap-3 lg:hidden`}
      >
        <ul className="grid gap-2 text-sm text-slate/85">
          {primaryNavigation.map((item) => (
            <li key={item.id}>
              <a
                className="block rounded-2xl border border-[#ccb79c] bg-[#f9eddd] px-3.5 py-2.5 transition hover:border-[#bfaa90] hover:bg-[#f3e2cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="inline-flex w-fit rounded-full bg-slate px-4 py-2.5 text-sm font-semibold tracking-wide text-sand transition hover:bg-slate/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
          href={contacts.phoneHref}
          onClick={closeMenu}
        >
          {contacts.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
