import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { useTranslation } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t, lang } = useTranslation();
  const lines =
    lang === "en"
      ? ["function build(idea) {", "  return {", "    clear: true,", "    onYourPhone: true,", "    yours: true,", "  };", "}"]
      : ["function armar(idea) {", "  return {", "    clara: true,", "    enElCelular: true,", "    tuya: true,", "  };", "}"];

  return (
    <section id="top" className="pb-16 pt-28 sm:pt-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="text-sm text-muted-foreground">{t("hero.badge")}</p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.12] sm:text-5xl">
            {t("hero.title_lead")}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed">
            <span className="font-semibold">{t("hero.title_highlight")}</span> {t("hero.desc")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">{t("hero.cta")}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#work">{t("about.projects")}</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -bottom-3 -right-3 h-[92%] w-[92%] rounded-[1.75rem] bg-primary" />
            <pre className="relative overflow-x-auto rounded-[1.75rem] bg-[#41474A] p-6 font-mono text-sm leading-7 text-[#F7F4EE] sm:p-8">
              <code>
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
