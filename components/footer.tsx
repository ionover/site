import Link from "next/link";
import { contacts, siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-white py-8 text-base text-[#555]">
      <div className="site-row flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[Montserrat] text-lg font-bold text-[#202020]">{siteMeta.name}</p>
          <p className="mt-1 leading-7">
            Водитель {contacts.driverName}. Частный трансфер по Крыму без посредников.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-[Montserrat] text-sm font-semibold uppercase text-[#202020]">
          <Link className="transition hover:text-[#2ea3f2]" href="/policy">
            Политика конфиденциальности
          </Link>
          <Link className="transition hover:text-[#2ea3f2]" href="/agreement">
            Пользовательское соглашение
          </Link>
          <a href={contacts.phoneHref} className="font-bold transition hover:text-[#2ea3f2]">
            {contacts.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
