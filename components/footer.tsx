import { siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-6 rounded-[28px] border border-white/70 bg-white/85 px-5 py-5 text-sm text-slate/70 shadow-soft sm:px-6">
      <p>{siteMeta.name}</p>
      <p className="mt-1 leading-6">Частный трансфер по Крыму. Для заказа удобнее звонок или Telegram.</p>
    </footer>
  );
}
