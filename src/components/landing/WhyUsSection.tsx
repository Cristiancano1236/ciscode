import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";
import { links } from "@/data/site";
import { useTranslation } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const lead: { title: TranslationKey; desc: TranslationKey }[] = [
  { title: "why.experts", desc: "why.experts_d" },
  { title: "why.agile", desc: "why.agile_d" },
];

const rest: { title: TranslationKey; desc: TranslationKey }[] = [
  { title: "why.secure", desc: "why.secure_d" },
  { title: "why.support", desc: "why.support_d" },
  { title: "why.results", desc: "why.results_d" },
  { title: "why.tech", desc: "why.tech_d" },
];

export function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section id="why" className="scroll-mt-24 py-16">
      <div className="container">
        <SectionHeading eyebrow="Ciscode" title={t("why.title")} subtitle={t("why.subtitle")} />
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-[#41474A] p-8 text-[#F7F4EE]">
              <div className="space-y-8">
                {lead.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-2xl font-bold">{t(item.title)}</h3>
                    <p className="mt-2 max-w-sm text-[#F7F4EE]/80">{t(item.desc)}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-10 w-fit">
                <a href={links.whatsapp} target="_blank" rel="noreferrer">
                  {t("why.cta")}
                </a>
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article
                  className={
                    index === 0
                      ? "rounded-[1.5rem] bg-primary p-5 text-primary-foreground"
                      : "rounded-[1.5rem] bg-white p-5"
                  }
                >
                  <h3 className="font-semibold">{t(item.title)}</h3>
                  <p className="mt-1 text-sm leading-relaxed opacity-80">{t(item.desc)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
