import { pricesContent } from "@/data/prices";

export function Pricing() {
  const routes = pricesContent.routes;

  return (
    <section
      id="pricing"
      className="section-pad bg-white"
    >
      <div className="site-row">
        <div className="text-center">
          <h2 className="section-title">Цены</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[clamp(1.05rem,2.4vw,1.22rem)] leading-[1.75] text-[#555]">
            {pricesContent.note}
          </p>
        </div>

        {routes.length > 0 ? (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-center text-[clamp(1rem,2.1vw,1.12rem)]">
              <thead>
                <tr className="bg-[#f0f0f0]">
                  <th className="border border-[#dddddd] px-4 py-4 font-[Montserrat] text-lg font-bold text-[#202020]">
                    Маршрут
                  </th>
                  <th className="border border-[#dddddd] px-4 py-4 font-[Montserrat] text-lg font-bold text-[#202020]">
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.route} className="bg-[#fafafa]">
                    <td className="border border-[#dddddd] px-4 py-4 text-[#555]">{route.route}</td>
                    <td className="border border-[#dddddd] px-4 py-4 font-bold text-[#202020]">
                      {route.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-5 text-[1.08rem] leading-[1.75] text-[#555]">
            Примеры маршрутов обновляются. Стоимость согласовывается заранее при обращении.
          </p>
        )}
      </div>
    </section>
  );
}
