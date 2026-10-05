import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";
import { useTranslation } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const services: {
  title: TranslationKey;
  line: TranslationKey;
  stack: string;
  className: string;
}[] = [
  {
    title: "services.card1.title",
    line: "services.card1.f1",
    stack: "HTML · CSS",
    className: "bg-primary text-primary-foreground lg:col-span-7",
  },
  {
    title: "services.card2.title",
    line: "services.card2.f1",
    stack: "React · Node",
    className: "bg-white lg:col-span-5",
  },
  {
    title: "services.card3.title",
    line: "services.card3.f1",
    stack: "WordPress · Shopify",
    className: "bg-[#41474A] text-[#F7F4EE] sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:col-span-12",
  },
];

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="scroll-mt-24 py-16">
      <div className="container">
        <SectionHeading eyebrow={t("services.badge")} title={t("services.title")} subtitle={t("services.subtitle")} />
        <div className="grid gap-4 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} className={service.className && "lg:contents"}>
              <article className={cn("flex h-full flex-col rounded-[1.75rem] p-7 sm:p-8", service.className)}>
                <div>
                  <h3 className="text-2xl font-bold">{t(service.title)}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed opacity-90">{t(service.line)}</p>
                  <p className="mt-4 text-sm opacity-70">{service.stack}</p>
                </div>
                <Button
                  asChild
                  variant={index === 0 ? "secondary" : "outline"}
                  className={cn("mt-8 w-fit", index === 2 && "border-white/20 bg-transparent text-[#F7F4EE] hover:bg-white/10")}
                >
                  <a href="#contact">{t("services.cta")}</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
