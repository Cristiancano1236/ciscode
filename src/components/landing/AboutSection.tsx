import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";
import { links } from "@/data/site";
import { useTranslation } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const facts: TranslationKey[] = ["about.nationality", "about.location", "about.experience", "about.channel"];

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <img
            src="/img/profile.png"
            alt="Cristian Cano"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover object-top"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading align="left" eyebrow={t("about.badge")} title={t("about.title")} />
          <p className="-mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{t("about.desc")}</p>
          <p className="mt-5 text-sm text-foreground">
            {facts.map((key, index) => (
              <span key={key}>
                {index > 0 ? " · " : ""}
                {t(key)}
              </span>
            ))}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={links.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                {t("about.github")}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon className="size-4" />
                {t("about.linkedin")}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={links.youtube} target="_blank" rel="noreferrer">
                <YouTubeIcon className="size-4" />
                {t("about.youtube")}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
