import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-3 text-4xl font-bold">{t("notfound.title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("notfound.desc")}</p>
        <Button asChild className="mt-8">
          <Link to="/">{t("notfound.cta")}</Link>
        </Button>
      </div>
    </main>
  );
}
