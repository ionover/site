import { services } from "@/data/site";

export function Services() {
  const items = services.items;

  return (
    <section
      id="services"
      className="old-paper relative border-y border-[#e7eef5] py-12 sm:py-14 lg:py-16"
    >
      <div className="site-row">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{services.title}</h2>
          <p className="mt-4 text-[clamp(1.05rem,2.4vw,1.25rem)] leading-[1.75] text-[#555]">
            {services.intro}
          </p>
        </div>
      </div>

      {items.length > 0 ? (
        <div className="mx-auto mt-8 grid w-[calc(100%_-_40px)] max-w-[1280px] grid-cols-1 border-x border-t border-[#e7eef5] bg-white/70 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex min-h-[132px] items-center justify-center border-b border-r border-[#e7eef5] px-5 py-9 text-center font-[Montserrat] text-sm font-semibold uppercase tracking-[0.08em] leading-[1.8] text-[#27384a] sm:px-6"
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
