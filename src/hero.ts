import { heroui } from "@heroui/theme";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#0EA5E9", // Bleu électrique (ciel électrique)
          foreground: "#FFFFFF",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        secondary: {
          DEFAULT: "#F59E0B", // Jaune électrique (ambre)
          foreground: "#000000",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#38BDF8", // Bleu électrique plus clair pour le dark mode
          foreground: "#000000",
          50: "#0C4A6E",
          100: "#075985",
          200: "#0369A1",
          300: "#0284C7",
          400: "#0EA5E9",
          500: "#38BDF8",
          600: "#7DD3FC",
          700: "#BAE6FD",
          800: "#E0F2FE",
          900: "#F0F9FF",
        },
        secondary: {
          DEFAULT: "#FBBF24", // Jaune électrique plus clair pour le dark mode
          foreground: "#000000",
          50: "#78350F",
          100: "#92400E",
          200: "#B45309",
          300: "#D97706",
          400: "#F59E0B",
          500: "#FBBF24",
          600: "#FCD34D",
          700: "#FDE68A",
          800: "#FEF3C7",
          900: "#FFFBEB",
        },
      },
    },
  },
});
