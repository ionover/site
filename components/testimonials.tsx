import { testimonialsContent } from "@/data/testimonials";

export function Testimonials() {
  const hasItems = testimonialsContent.items.length > 0;

  return (
    <section
      id="testimonials"
      className="rounded-[32px] border border-[#d8c6ad] bg-[#fff9ef] p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">Отзывы</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">
        {testimonialsContent.title}
      </h2>
      {hasItems ? (
        <div className="mt-6 grid gap-3.5 md:grid-cols-3">
          {testimonialsContent.items.map((item) => (
            <blockquote key={`${item.author}-${item.text}`} className="rounded-2xl border border-[#d8c5ad] bg-[#f7e8d3] p-5">
              <p className="text-sm leading-7 text-slate/80">“{item.text}”</p>
              <cite className="mt-3 block text-sm font-semibold not-italic text-slate">{item.author}</cite>
            </blockquote>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm leading-7 text-slate/70">
          Отзывы в процессе обновления. По запросу отправим актуальные примеры поездок.
        </p>
      )}
    </section>
  );
}
