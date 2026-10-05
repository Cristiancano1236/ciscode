import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const { lang } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={lang === "en" ? "Back to top" : "Volver arriba"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-5 left-5 z-40 flex size-12 items-center justify-center rounded-full border border-border bg-white text-foreground transition",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
