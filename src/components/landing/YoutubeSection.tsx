import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { links } from "@/data/site";
import { useTranslation } from "@/i18n/LanguageContext";

export function YoutubeSection() {
  const { t } = useTranslation();

  return (
    <section id="youtube" className="scroll-mt-24 py-16">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm text-muted-foreground">{t("yt.badge")}</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            {t("yt.title")} {t("yt.title_accent")}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{t("yt.desc")}</p>
          <p className="mt-4 text-sm">
            {t("yt.s1")} · {t("yt.s2")} · {t("yt.s3")}
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href={links.youtube} target="_blank" rel="noreferrer">
              {t("yt.cta")}
            </a>
          </Button>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.5rem] bg-primary" />
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-white">
              <iframe
                className="h-full w-full"
                src={links.youtubeEmbed}
                title="Canal de Ciscode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
