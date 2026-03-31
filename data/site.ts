import type { StaticImageData } from "next/image";
import solFront from "@/media/solaris/sol_front.jpg";
import solFrontBest from "@/media/solaris/sol_front_best.jpg";
import solInsideBack from "@/media/solaris/sol_inside_back.jpg";
import solInsideFront from "@/media/solaris/sol_inside_front.jpg";
import solInsideRight from "@/media/solaris/sol_inside_right.jpg";
import toyBack from "@/media/toyota/toy_back.jpeg";
import toyFront from "@/media/toyota/toy_front.jpeg";
import toySide from "@/media/toyota/toy_side.jpeg";
export type NavItem = {
  id: string;
  label: string;
};

export type InfoItem = {
  title: string;
  text: string;
};

export type TripColumn = {
  title: string;
  description: string;
  items: InfoItem[];
};

export type CarSlide = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export const siteMeta = {
  name: "Крым Такси",
  domain: "https://krimea-taxi.ru",
  ownerName: "Владимир",
  placeholderImage: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/i.jpeg`,
  tagline: "Частный трансфер и междугороднее такси по Крыму без посредников.",
};

export const navigation: NavItem[] = [
  { id: "hero", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "cars", label: "Мои машины" },
  { id: "pricing", label: "Цены" },
  { id: "trip-options", label: "Поездки" },
  { id: "how-to-order", label: "Как заказать" },
  { id: "testimonials", label: "Отзывы" },
  { id: "faq", label: "FAQ" },
  { id: "contacts", label: "Контакты" },
];

export const heroContent = {
  eyebrow: "Крым Такси",
  title: "Крым Такси",
  description: [
    "Никаких посредников: вы общаетесь напрямую с водителем и заранее знаете, какой автомобиль приедет.",
    "Стаж вождения более 30 лет. Доставлю в любую точку Крыма без лишних проблем.",
  ],
  highlights: [
    "Бронирование такси по межгороду",
    "Встреча в аэропорту и на вокзале с комфортом",
    "Персональный трансфер в любой город",
    "Звоните заранее",
  ],
};

export const contacts = {
  driverName: "Владимир",
  phoneDisplay: "+7 978 07 90 888",
  phoneHref: "tel:+79780790888",
  email: "v_crimea@mail.ru",
  telegram: "https://t.me/Vova_0888",
  note: "Меня зовут Владимир. Звоните или пишите — на номере доступны мессенджеры. Если планы изменились, предупредите заранее — отмена без штрафов.",
};

export const services = {
  title: "Услуги",
  intro:
    "Частный трансфер по Крыму, поездки по межгороду и заранее согласованные маршруты без диспетчеров и агрегаторов.",
  items: [
    "Бронирование такси по межгороду",
    "Встреча в аэропорту и на вокзале",
    "Персональный трансфер в любой город",
    "Авиатрансфер",
    "Заблаговременный заказ",
    "Индивидуальный трансфер",
    "Поездки по межгороду",
    "Дневные туры",
    "Трансфер с железнодорожного вокзала",
    "Почасовая аренда с водителем",
    "Комфортное такси",
  ],
};

export const carsSection = {
  title: "Мои машины",
  description: [
    "Слежу за чистотой, тишиной в салоне и техническим состоянием автомобиля.",
    "Пассажиру не нужно угадывать, что приедет: формат поездки можно обсудить заранее.",
  ],
  comfortNote:
    "В поездке важны тишина, аккуратная подача и предсказуемый комфорт. Машина всегда готовится к маршруту заранее.",
  imageAlt: "Временный плейсхолдер для фотографий автомобилей",
  autoplayMs: 6000,
  slides: [
    {
      id: "toyota-front",
      title: "Toyota front",
      description: "Exterior front view.",
      image: toyFront,
      imageAlt: "Toyota front view",
    },
    {
      id: "toyota-side",
      title: "Toyota side",
      description: "Exterior side view.",
      image: toySide,
      imageAlt: "Toyota side view",
    },
    {
      id: "toyota-back",
      title: "Toyota back",
      description: "Exterior rear view.",
      image: toyBack,
      imageAlt: "Toyota rear view",
    },
    {
      id: "solaris-front",
      title: "Solaris front",
      description: "Exterior front view.",
      image: solFront,
      imageAlt: "Solaris front view",
    },
    {
      id: "solaris-front-best",
      title: "Solaris front alt",
      description: "Alternative front angle.",
      image: solFrontBest,
      imageAlt: "Solaris front view alternative angle",
    },
    {
      id: "solaris-inside-front",
      title: "Solaris interior front",
      description: "Front interior view.",
      image: solInsideFront,
      imageAlt: "Solaris interior front seats",
    },
    {
      id: "solaris-inside-right",
      title: "Solaris interior right",
      description: "Right side interior view.",
      image: solInsideRight,
      imageAlt: "Solaris interior right side",
    },
    {
      id: "solaris-inside-back",
      title: "Solaris interior back",
      description: "Rear interior view.",
      image: solInsideBack,
      imageAlt: "Solaris interior back seats",
    },
  ] satisfies CarSlide[],
};

export const advantages: InfoItem[] = [
  {
    title: "Фиксированная цена",
    text: "Стоимость согласовывается заранее и не меняется по дороге без дополнительных условий.",
  },
  {
    title: "Гибкая отмена",
    text: "Если планы меняются, достаточно предупредить заранее без штрафов и скрытых правил.",
  },
  {
    title: "Прямой контакт с водителем",
    text: "Все детали поездки обсуждаются напрямую без диспетчеров и посредников.",
  },
  {
    title: "Стаж 30+ лет",
    text: "Большой практический опыт вождения по Крыму и междугородним маршрутам.",
  },
];

export type HowToOrderStep = {
  num: string;
  title: string;
  text: string;
};

export const howToOrder = {
  title: "Как проходит заказ",
  intro: "Всё согласовывается заранее — без сюрпризов в дороге.",
  steps: [
    {
      num: "1",
      title: "Свяжитесь удобным способом",
      text: "Позвоните или напишите в Telegram. Я отвечаю быстро и без лишних формальностей.",
    },
    {
      num: "2",
      title: "Согласуем маршрут и стоимость",
      text: "Обсудим откуда, куда, во сколько. Цена фиксируется заранее — никаких доплат в пути.",
    },
    {
      num: "3",
      title: "Приеду вовремя",
      text: "В нужное место, в назначенное время. Помогу с багажом, если нужно.",
    },
  ] satisfies HowToOrderStep[],
  cancelNote:
    "Если планы изменились — просто предупредите заранее. Штрафов нет, отмена без условий.",
};

export const tripOptions = {
  title: "Сценарии поездок",
  columns: [
    {
      title: "Частные и групповые поездки",
      description:
        "Поездки по делам, на отдых или на встречу можно собрать под ваш маршрут и темп.",
      items: [
        {
          title: "Загородные поездки",
          text: "Поездки за город, на дачу, к друзьям или по семейным делам.",
        },
        {
          title: "Мероприятия и встречи",
          text: "Концерты, выставки, праздники и другие события без забот о парковке.",
        },
        {
          title: "Винные туры",
          text: "Маршрут можно согласовать заранее и спокойно посвятить поездку отдыху.",
        },
        {
          title: "Деловые поездки",
          text: "Несколько точек за день, встреча в городе или почасовой формат с водителем.",
        },
      ],
    },
    {
      title: "Аэропорт и вокзал",
      description:
        "Трансфер на вокзал, из аэропорта и на массовые события с понятным временем подачи.",
      items: [
        {
          title: "Концерты и площадки",
          text: "Доставка на крупные события и обратный выезд без ожидания такси на месте.",
        },
        {
          title: "Конференции",
          text: "Спокойная поездка на деловую встречу или конференцию по согласованному времени.",
        },
        {
          title: "Спортивные события",
          text: "Маршрут на матч, турнир или тренировочную площадку без пересадок.",
        },
        {
          title: "Трансфер из аэропорта",
          text: "Встреча, помощь с багажом и прямая поездка до нужной точки.",
        },
      ],
    },
  ] satisfies TripColumn[],
  features: [
    {
      title: "Фиксированная цена",
      text: "Стоимость согласовывается до поездки и не меняется в пути.",
    },
    {
      title: "Гибкая отмена",
      text: "Если планы изменились, достаточно предупредить заранее без штрафов и сложных условий.",
    },
    {
      title: "Прямой контакт с водителем",
      text: "Договариваетесь напрямую со мной, без диспетчеров и смены исполнителя.",
    },
    {
      title: "Стаж 30+ лет",
      text: "Большой практический опыт вождения по Крыму и междугородним маршрутам.",
    },
  ] satisfies InfoItem[],
};

