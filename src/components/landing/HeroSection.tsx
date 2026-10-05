import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { useTranslation } from "@/i18n/LanguageContext";

const code = {
  es: ["function armar(idea) {", "  return {", "    clara: true,", "    enElCelular: true,", "    tuya: true,", "  };", "}"],
  en: ["function build(idea) {", "  return {", "    clear: true,", "    onYourPhone: true,", "    yours: true,", "  };", "}"],
};

function paint(line: string) {
  const parts = line.split(/(\bfunction\b|\breturn\b|\btrue\b)/g);
  return parts.map((part, index) => {
    const marked = part === "function" || part === "return" || part === "true";
    return (
      <span key={`${part}-${index}`} className={marked ? "text-primary" : undefined}>
        {part}
      </span>
    );
  });
}

function TypingCode({ lines, lang }: { lines: string[]; lang: "es" | "en" }) {
  const reduce = useReducedMotion();
  const full = lines.join("\n");
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let shown = 0;
    let timer = 0;
    let stopped = false;

    const step = () => {
      if (stopped) return;
      if (shown < full.length) {
        shown += 1;
        setCount(shown);
        const previous = full[shown - 1];
        const wait = previous === "\n" ? 220 : previous === " " ? 30 : 48;
        timer = window.setTimeout(step, wait);
        return;
      }
      timer = window.setTimeout(() => {
        shown = 0;
        setCount(0);
        timer = window.setTimeout(step, 280);
      }, 1700);
    };

    setCount(0);
    timer = window.setTimeout(step, 360);
    return () => {
      stopped = true;
      window.clearTimeout(timer);
    };
  }, [full, reduce, run]);

  const visible = reduce ? full : full.slice(0, count);
  const writing = !reduce && count < full.length;
  const rows = visible.split("\n");
  const status = reduce ? "" : writing ? (lang === "en" ? "writing…" : "escribiendo…") : lang === "en" ? "done." : "listo.";

  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -bottom-3 -right-3 h-[92%] w-[92%] rounded-[1.75rem] bg-primary" />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="relative block w-full rounded-[1.75rem] bg-[#41474A] p-6 text-left sm:p-8"
        aria-label={lang === "en" ? "Play the code again" : "Volver a escribir el código"}
      >
        <pre className="min-h-[13.5rem] overflow-x-auto font-mono text-sm leading-7 text-[#F7F4EE]">
          <code>
            {rows.map((line, index) => (
              <span key={index} className="block min-h-7">
                {paint(line)}
                {index === rows.length - 1 ? <span className="typing-caret ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-primary" /> : null}
              </span>
            ))}
          </code>
        </pre>
        <span className="mt-4 block font-mono text-xs text-[#F7F4EE]/70">{status}</span>
      </button>
    </div>
  );
}

export function HeroSection() {
  const { t, lang } = useTranslation();

  return (
    <section id="top" className="pb-16 pt-28 sm:pt-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="text-sm text-muted-foreground">{t("hero.badge")}</p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.12] sm:text-5xl">{t("hero.title_lead")}</h1>
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
          <TypingCode lines={lang === "en" ? code.en : code.es} lang={lang} />
        </Reveal>
      </div>
    </section>
  );
}
