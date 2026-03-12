import { faqContent } from "@/data/faq";

export function Faq() {
  const hasItems = faqContent.items.length > 0;

  return (
    <section
      id="faq"
      className="rounded-[32px] border border-[#d8c6ad] bg-[#fff9ef] p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">FAQ</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">{faqContent.title}</h2>
      {hasItems ? (
        <div className="mt-6 grid gap-3.5">
          {faqContent.items.map((item) => (
            <article key={item.question} className="rounded-2xl border border-[#d8c5ad] bg-[#f7e8d3] p-5">
              <h3 className="text-base font-semibold text-slate">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate/75">{item.answer}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm leading-7 text-slate/70">
          Блок с вопросами обновляется. Уточняйте детали поездки по телефону или в Telegram.
        </p>
      )}
    </section>
  );
}
