import Link from "next/link";
import { contacts, siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-6 rounded-[28px] border border-[#d8c6ad] bg-[#fff7ea] px-5 py-5 text-sm text-slate/75 shadow-soft sm:px-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate">{siteMeta.name}</p>
          <p className="mt-1 leading-6">
            Водитель {contacts.driverName}. Частный трансфер по Крыму без посредников.
          </p>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-4 sm:mt-0">
          <Link className="text-slate/65 transition hover:text-slate" href="/policy">
            Политика
          </Link>
          <Link className="text-slate/65 transition hover:text-slate" href="/agreement">
            Соглашение
          </Link>
          <a href={contacts.phoneHref} className="font-semibold text-slate transition hover:text-amber">
            {contacts.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
