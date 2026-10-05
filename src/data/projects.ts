import type { TranslationKey } from "@/i18n/translations";

export type Project = {
  name: string;
  href: string;
  image: string;
  descKey: TranslationKey;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "ECL Fruver",
    href: "https://eclfruver.com/",
    image: "/img/ECLfruver.png",
    descKey: "portfolio.p1_desc",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL", "Zod", "JWT", "Gemini API"],
  },
  {
    name: "Mindagro",
    href: "https://mind-agro.com/",
    image: "/img/mindagro.jpeg",
    descKey: "portfolio.p3_desc",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "MySQL", "PWA"],
  },
  {
    name: "Diálogo",
    href: "https://dialogoencuentro.com/",
    image: "/img/dialogo-preview.jpg",
    descKey: "portfolio.p2_desc",
    tags: ["Node.js", "Express", "JavaScript", "MySQL", "Bootstrap", "FullCalendar", "Helmet"],
  },
  {
    name: "Casa Blanca Control",
    href: "https://casablancacontrol.com/",
    image: "/img/casablanca-preview.png",
    descKey: "portfolio.p4_desc",
    tags: ["JavaScript", "Node.js", "Express", "Bootstrap 5", "MySQL", "JWT", "AWS EC2"],
  },
  {
    name: "Miaz Tienda",
    href: "https://miaztienda.com/",
    image: "/img/miaz-preview.png",
    descKey: "portfolio.p5_desc",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS", "Cloudflare"],
  },
];
