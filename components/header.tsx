import { contacts, navigation, siteMeta } from "@/data/site";

export function Header() {
  return (
    <header className="rounded-[28px] border border-white/70 bg-white/85 px-5 py-4 shadow-soft backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">{siteMeta.name}</p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate/70">{siteMeta.tagline}</p>
        </div>

        <nav aria-label="Основная навигация">
          <ul className="flex flex-wrap gap-2.5 text-sm text-slate/80">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  className="rounded-full border border-slate/10 bg-white px-3 py-1.5 transition hover:border-slate/20 hover:bg-slate/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/35"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="inline-flex w-fit rounded-full bg-slate px-4 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-slate/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate/30"
          href={contacts.phoneHref}
        >
          {contacts.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
