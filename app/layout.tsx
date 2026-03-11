import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krimea-taxi.ru"),
  title: {
    default: "Крым Такси",
    template: "%s | Крым Такси",
  },
  description:
    "Частный трансфер и междугороднее такси по Крыму: поездки без посредников, понятная связь с водителем и комфортный маршрут.",
  openGraph: {
    title: "Крым Такси",
    description:
      "Частный трансфер по Крыму с понятной подачей автомобиля, прямой связью и аккуратной подачей информации.",
    url: "https://krimea-taxi.ru",
    siteName: "Крым Такси",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
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
