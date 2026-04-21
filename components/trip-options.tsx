import { tripOptions } from "@/data/site";

export function TripOptions() {
  const columns = tripOptions.columns;
  const features = tripOptions.features;

  return (
    <section
      id="trip-options"
      className="old-paper section-pad"
    >
      <div className="site-row">
        <div className="text-center">
          <h2 className="section-title">Спланируйте свое следующее мероприятие</h2>
        </div>

        {columns.length > 0 ? (
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {columns.map((column) => (
              <article key={column.title}>
                <h3 className="text-center font-[Montserrat] text-[clamp(1.55rem,4vw,2.1rem)] font-bold text-[#202020]">
                  {column.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-center text-[clamp(1.02rem,2.3vw,1.16rem)] leading-[1.75] text-[#555]">
                  {column.description}
                </p>
                <div className="mt-7 grid gap-3">
                  {column.items.map((item, index) => (
                    <details
                      key={item.title}
                      className="group border border-[#dce6ef] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(15,35,54,0.04)]"
                      open={index === 0}
                    >
                      <summary className="cursor-pointer list-none font-[Montserrat] text-lg font-bold text-[#202020] marker:hidden">
                        <span className="inline-flex w-full items-center justify-between gap-5">
                          {item.title}
                          <span className="text-2xl leading-none text-[#2ea3f2] group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-3 text-[1.02rem] leading-[1.75] text-[#555]">{item.text}</p>
                    </details>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-[1.08rem] leading-[1.75] text-[#555]">
            Варианты поездок обновляются. Свяжитесь с водителем, чтобы согласовать индивидуальный маршрут.
          </p>
        )}

        {features.length > 0 && (
          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2ea3f2] font-[Montserrat] text-2xl font-bold text-white">
                  {feature.title.slice(0, 1)}
                </div>
                <p className="mt-5 font-[Montserrat] text-xl font-bold text-[#202020]">{feature.title}</p>
                <p className="mt-3 text-[1.02rem] leading-[1.75] text-[#555]">{feature.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
