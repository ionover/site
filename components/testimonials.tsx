import { testimonialsContent } from "@/data/testimonials";

export function Testimonials() {
  const hasItems = testimonialsContent.items.length > 0;

  return (
    <section
      id="testimonials"
      className="section-pad bg-white"
    >
      <div className="site-row text-center">
        <h2 className="section-title">{testimonialsContent.title}</h2>
        {hasItems ? (
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonialsContent.items.map((item) => (
              <blockquote key={`${item.author}-${item.text}`} className="px-3">
                <p className="text-[clamp(1.03rem,2.3vw,1.16rem)] italic leading-[1.85] text-[#555]">
                  {`"${item.text}"`}
                </p>
                <cite className="mt-5 block font-[Montserrat] text-lg font-bold not-italic text-[#202020]">
                  {item.author}
                </cite>
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[1.08rem] leading-[1.75] text-[#555]">
            Отзывы в процессе обновления. По запросу отправим актуальные примеры поездок.
          </p>
        )}
      </div>
    </section>
  );
}
