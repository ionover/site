import { contacts, howToOrder } from "@/data/site";

export function HowToOrder() {
  const steps = howToOrder.steps;

  return (
    <section
      id="how-to-order"
      className="old-paper section-pad border-y border-[#e7eef5]"
    >
      <div className="site-row">
        <div className="text-center">
          <h2 className="section-title">{howToOrder.title}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[clamp(1.05rem,2.4vw,1.22rem)] leading-[1.75] text-[#555]">
            {howToOrder.intro}
          </p>
        </div>

        {steps.length > 0 ? (
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-7 text-center shadow-[0_8px_22px_rgba(15,35,54,0.06)]">
                <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2ea3f2] font-[Montserrat] text-3xl font-bold text-white">
                  {step.num}
                </p>
                <p className="mt-5 font-[Montserrat] text-xl font-bold text-[#202020]">{step.title}</p>
                <p className="mt-3 text-[1.02rem] leading-[1.75] text-[#555]">{step.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-[1.08rem] leading-[1.75] text-[#555]">
            Этапы заказа обновляются. Позвоните или напишите в Telegram, чтобы согласовать поездку.
          </p>
        )}

        <div className="mt-10 flex flex-col gap-5 bg-[#162f46] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-3xl text-[clamp(1.05rem,2.4vw,1.22rem)] leading-[1.75] text-white/90">
            {howToOrder.cancelNote}
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              className="bg-[#2ea3f2] px-6 py-3 font-[Montserrat] text-lg font-bold text-white transition hover:bg-[#1d8bd4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              href={contacts.phoneHref}
            >
              Позвонить
            </a>
            <a
              className="border-2 border-white px-6 py-3 font-[Montserrat] text-lg font-bold text-white transition hover:bg-white hover:text-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
