import { links } from "@/data/site";
import { useTranslation } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img src="/img/logo.jpg" alt="Ciscode" className="h-9 w-auto rounded-lg" />
          <p className="mt-2 text-sm text-muted-foreground">{t("footer.note")}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} · {t("footer.rights")}{" "}
          <a href={links.email} className="underline-offset-4 hover:underline">
            {links.emailLabel}
          </a>
        </p>
      </div>
    </footer>
  );
}
