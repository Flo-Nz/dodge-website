export type NavItem = {
  label: string;
  href: string;
  color:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
};

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ACDC Thunders",
  description:
    "Association CALI Dodgeball Club - La référence du dodgeball du Libournais et du Fronsadais",
  navItems: [
    {
      label: "Accueil",
      href: "/",
      color: "foreground",
    },
    {
      label: "Entraînements",
      href: "/entrainements",
      color: "foreground",
    },
    {
      label: "Événements",
      href: "/evenements",
      color: "primary",
    },
    {
      label: "Nous rejoindre",
      href: "/rejoindre",
      color: "secondary",
    },
    {
      label: "Contact",
      href: "/contact",
      color: "danger",
    },
  ] as NavItem[],
  links: {
    facebook: "https://www.facebook.com/DodgeballLibourne",
    instagram: "https://www.instagram.com/dodgeballlibourne_a.c.d.c",
  },
};
