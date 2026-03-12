import { contacts, siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-6 rounded-[28px] border border-white/70 bg-white/85 px-5 py-5 text-sm text-slate/70 shadow-soft sm:px-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate">{siteMeta.name}</p>
          <p className="mt-1 leading-6">
            Водитель {contacts.driverName}. Частный трансфер по Крыму без посредников.
          </p>
        </div>
        <a
          href={contacts.phoneHref}
          className="mt-2 font-semibold text-slate transition hover:text-amber sm:mt-0"
        >
          {contacts.phoneDisplay}
        </a>
      </div>
    </footer>
  );
}
