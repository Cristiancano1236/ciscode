import { SectionHeading } from "@/components/landing/Reveal";
import { useTranslation } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const rows: { title: TranslationKey; body: string }[] = [
  { title: "tech.frontbase", body: "HTML, CSS, JavaScript, TypeScript" },
  { title: "tech.frontfw", body: "React, Next.js, Vue" },
  { title: "tech.ui", body: "Tailwind, Bootstrap" },
  { title: "tech.backend", body: "Node, Express" },
  { title: "tech.db", body: "MySQL, MongoDB" },
  { title: "tech.cms", body: "WordPress, Shopify" },
  { title: "tech.tooling", body: "Vite, GitHub" },
  { title: "tech.cloud", body: "AWS" },
];

export function TechStackSection() {
  const { t } = useTranslation();

  return (
    <section id="tech" className="scroll-mt-24 py-16">
      <div className="container">
        <SectionHeading eyebrow={t("nav.stack")} title={t("tech.title")} subtitle={t("tech.subtitle")} />
        <div className="overflow-hidden rounded-[1.75rem] bg-white">
          {rows.map((row) => (
            <div
              key={row.title}
              className="flex flex-col gap-1 border-b border-border px-6 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <h3 className="font-semibold">{t(row.title)}</h3>
              <p className="text-sm text-muted-foreground sm:text-right">{row.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
