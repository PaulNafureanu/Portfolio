type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="border-t border-slate-200 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {eyebrow}
            </p>
          )}

          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-base leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
