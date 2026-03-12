import type { Metadata } from "next";
import Link from "next/link";
import { legalPages } from "@/data/legal";

export const metadata: Metadata = {
  title: legalPages.agreement.title,
  description: legalPages.agreement.description,
};

export default function AgreementPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 sm:px-8">
      <Link className="text-sm font-medium text-slate/60 hover:text-slate" href="/">
        На главную
      </Link>
      <div className="mt-6 rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
          {legalPages.agreement.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate">
          {legalPages.agreement.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate/80">
          {legalPages.agreement.body}
        </p>
      </div>
    </main>
  );
}
