import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const navItems: { href: string; key: TranslationKey }[] = [
  { href: "#about", key: "nav.about" },
  { href: "#services", key: "nav.services" },
  { href: "#work", key: "nav.work" },
  { href: "#tech", key: "nav.stack" },
  { href: "#contact", key: "nav.contact" },
];

export function Header() {
  const { t, lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open ? "border-b border-border bg-[#F7F4EE]/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/img/logo.jpg" alt="Ciscode" className="h-10 w-auto rounded-xl" />
          <span className="hidden text-sm text-muted-foreground lg:inline">{t("brand.tagline")}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-foreground/80 transition hover:text-foreground">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full bg-white p-1">
            {(["es", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  lang === code ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? t("nav.close") : t("nav.open")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav className="container flex flex-col gap-1 pb-5 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-lg hover:bg-white"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
