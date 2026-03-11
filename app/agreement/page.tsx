import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description: "Временная страница пользовательского соглашения для нового сайта.",
};

export default function AgreementPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 sm:px-8">
      <Link className="text-sm font-medium text-slate/60 hover:text-slate" href="/">
        На главную
      </Link>
      <div className="mt-6 rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
          Заглушка
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate">
          Пользовательское соглашение
        </h1>
        <p className="mt-4 text-base leading-7 text-slate/80">
          Страница создана заранее, чтобы структура проекта была полной. Финальный
          юридический текст можно вставить без переделки маршрутов и layout.
        </p>
      </div>
    </main>
  );
}
