import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krimea-taxi.ru"),
  title: {
    default: "Крым Такси — частный трансфер по Крыму",
    template: "%s | Крым Такси",
  },
  description:
    "Частный трансфер и междугороднее такси по Крыму: поездки без посредников, понятная связь с водителем и комфортный маршрут.",
  openGraph: {
    title: "Крым Такси — частный трансфер по Крыму",
    description:
      "Частный трансфер по Крыму без посредников. Прямая связь с водителем, фиксированная цена, стаж более 30 лет.",
    url: "https://krimea-taxi.ru",
    siteName: "Крым Такси",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/i.jpeg",
        width: 1200,
        height: 630,
        alt: "Крым Такси — частный трансфер по Крыму",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Крым Такси — частный трансфер по Крыму",
    description:
      "Частный трансфер по Крыму без посредников. Прямая связь с водителем, фиксированная цена, стаж более 30 лет.",
    images: ["/images/i.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
