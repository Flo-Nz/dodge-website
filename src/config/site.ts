export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ACDC Thunders",
  description:
    "Association CALI Dodgeball Club - La référence du dodgeball du Libournais et du Fronsadais",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Entraînements",
      href: "/entrainements",
    },
    {
      label: "Nous rejoindre",
      href: "/rejoindre",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/DodgeballLibourne",
    instagram: "https://www.instagram.com/dodgeballlibourne_a.c.d.c",
  },
};
