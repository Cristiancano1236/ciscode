import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { links } from "@/data/site";
import { useTranslation } from "@/i18n/LanguageContext";

export function WhatsAppButton() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("wppMsgClosed")) return;
    const timer = window.setTimeout(() => setVisible(true), 15000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {visible ? (
        <div className="flex max-w-xs items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm shadow-lg">
          <span>{t("wpp.text")}</span>
          <button
            type="button"
            aria-label={t("wpp.close")}
            className="text-muted-foreground hover:text-foreground"
            onClick={() => {
              setVisible(false);
              sessionStorage.setItem("wppMsgClosed", "1");
            }}
          >
            <X className="size-4" />
          </button>
        </div>
      ) : null}
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-black transition hover:brightness-95"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
