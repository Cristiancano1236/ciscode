import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/landing/Reveal";
import { projects } from "@/data/projects";
import { useTranslation } from "@/i18n/LanguageContext";

export function PortfolioSection() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const total = projects.length;

  const go = (next: number) => {
    setIndex((next + total) % total);
  };

  return (
    <section id="work" className="scroll-mt-24 py-16">
      <div className="container">
        <SectionHeading eyebrow={t("portfolio.badge")} title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />

        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {projects.map((item, itemIndex) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(itemIndex)}
              aria-pressed={itemIndex === index}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                itemIndex === index ? "bg-primary text-primary-foreground" : "bg-white text-foreground hover:bg-secondary"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-white">
          <AnimatePresence mode="wait">
            <motion.article
              key={project.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-2"
            >
              <img src={project.image} alt={project.name} className="h-72 w-full object-cover lg:h-full" />
              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-sm text-muted-foreground">{t("portfolio.featured")}</p>
                <h3 className="mt-2 text-3xl font-bold">{project.name}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t(project.descKey)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {t("portfolio.visit")}
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {t("portfolio.showing_one")
                      .replace("{current}", String(index + 1))
                      .replace("{total}", String(total))}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="icon" aria-label={t("portfolio.prev")} onClick={() => go(index - 1)}>
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" aria-label={t("portfolio.next")} onClick={() => go(index + 1)}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
