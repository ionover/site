import { faqContent } from "@/data/faq";

export function Faq() {
  const hasItems = faqContent.items.length > 0;

  return (
    <section
      id="faq"
      className="dark-road section-pad text-white"
    >
      <div className="site-row grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="section-title text-white">{faqContent.title}</h2>
          <p className="mt-5 max-w-lg text-[clamp(1.08rem,2.4vw,1.25rem)] leading-[1.75] text-white/85">
            Ответы на основные вопросы о бронировании, машинах, отмене и поездках по межгороду.
          </p>
        </div>

        {hasItems ? (
          <div className="grid gap-3">
            {faqContent.items.map((item, index) => (
              <details
                key={item.question}
                className="group bg-white px-5 py-4 text-[#202020] shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none font-[Montserrat] text-lg font-bold marker:hidden sm:text-xl">
                  <span className="inline-flex w-full items-center justify-between gap-5">
                    {item.question}
                    <span className="text-2xl leading-none text-[#2ea3f2] group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-[1.03rem] leading-[1.75] text-[#555]">{item.answer}</p>
              </details>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[1.08rem] leading-[1.75] text-white/85">
            Блок с вопросами обновляется. Уточняйте детали поездки по телефону или в Telegram.
          </p>
        )}
      </div>
    </section>
  );
}
