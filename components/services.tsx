import { services } from "@/data/site";

export function Services() {
  const items = services.items;

  return (
    <section
      id="services"
      className="rounded-[24px] border border-[#c8af91] bg-[#f7e9d3] p-6 shadow-soft sm:p-8"
    >
      {items.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex min-h-[165px] items-center justify-center rounded-2xl border border-[#c7ae90] bg-[#f0ddc2] px-7 py-7 text-center font-semibold uppercase tracking-[0.07em] text-[14px] leading-[1.8em] text-slate/90 [font-family:'Montserrat','Segoe_UI',Tahoma,sans-serif] sm:min-h-[180px] sm:px-8 sm:py-8"
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
