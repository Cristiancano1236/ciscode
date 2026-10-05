import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/landing/Reveal";
import { links } from "@/data/site";
import { useTranslation } from "@/i18n/LanguageContext";

const socials = [
  { href: links.instagram, label: "Instagram" },
  { href: links.tiktok, label: "TikTok" },
  { href: links.youtube, label: "YouTube" },
  { href: links.github, label: "GitHub" },
  { href: links.linkedin, label: "LinkedIn" },
];

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="container">
        <Reveal>
          <div className="rounded-[1.75rem] bg-primary px-6 py-10 text-primary-foreground sm:px-10">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("contact.title")}</h2>
            <p className="mt-3 max-w-md text-lg">{t("contact.whatsapp_d")}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href={links.phone} className="underline-offset-4 hover:underline">
                {links.phoneLabel}
              </a>
              <a href={links.email} className="underline-offset-4 hover:underline">
                {links.emailLabel}
              </a>
            </div>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <a href={links.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-4" />
                {t("contact.chat")}
              </a>
            </Button>
          </div>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 px-1 text-sm">
          <span className="text-muted-foreground">{t("contact.socials")}</span>
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:underline">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
