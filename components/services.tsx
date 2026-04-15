import { services } from "@/data/site";

export function Services() {
  const items = services.items;

  return (
    <section
      id="services"
      className="rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] p-6 shadow-soft sm:p-8"
    >
      {items.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center rounded-2xl border border-[#c7ae90] bg-[#f0ddc2] px-7 py-7 text-center text-lg leading-8 text-slate/90 sm:min-h-[140px] sm:px-8 sm:py-8 sm:text-xl sm:leading-9"
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
