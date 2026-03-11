type SectionPlaceholderProps = {
  title: string;
  description: string;
};

export function SectionPlaceholder({
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <section className="rounded-[28px] border border-dashed border-slate/20 bg-white/60 p-6">
      <h2 className="text-2xl font-semibold text-slate">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate/75">{description}</p>
    </section>
  );
}
