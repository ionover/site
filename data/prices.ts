export type PriceRoute = {
  route: string;
  price: string;
};

export const pricesContent = {
  title: "Маршруты и цены",
  note: "Указана ориентировочная стоимость. Точная цена подтверждается при бронировании.",
  routes: [
    { route: "Симферополь ↔ Ялта", price: "3500 ₽" },
    { route: "Симферополь ↔ Севастополь", price: "3000 ₽" },
    { route: "Симферополь ↔ Алушта", price: "2500 ₽" },
    { route: "Симферополь ↔ Керчь", price: "7000 ₽" },
    { route: "Симферополь ↔ Феодосия", price: "3500 ₽" },
    { route: "Симферополь ↔ Евпатория", price: "3000 ₽" },
    { route: "Симферополь ↔ Джанкой", price: "4000 ₽" },
  ] satisfies PriceRoute[],
};
