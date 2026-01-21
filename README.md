# ACDC Thunders - Site Web Officiel

Site web de l'Association CALI Dodgeball Club (ACDC Thunders), club de dodgeball de Libourne.

## À propos

Les ACDC Thunders sont la référence du club de dodgeball du Libournais et du Fronsadais. Le dodgeball est un sport en plein essor, dynamique, spectaculaire, intergénérationnel et mixte.

Le club partage les valeurs de l'olympisme : l'excellence, l'amitié et le respect.

## Fonctionnalités

- 🏠 Page d'accueil avec présentation du club
- 🏋️ Page des entraînements avec horaires et lieu
- 📝 Page d'inscription avec formulaire Yapla et tarifs
- 📧 Page de contact avec coordonnées
- 🌙 Mode sombre/clair
- 📱 Design responsive (mobile, tablette, desktop)

## Technologies utilisées

- [Vite](https://vitejs.dev/guide/) - Build tool rapide
- [React](https://react.dev) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org) - Typage statique
- [HeroUI](https://heroui.com) - Composants UI
- [React Router](https://reactrouter.com) - Navigation
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [pnpm](https://pnpm.io) - Gestionnaire de paquets

## Installation

### Prérequis

- Node.js 18+
- pnpm (recommandé) ou npm

### Cloner le projet

```bash
git clone <url-du-repo>
cd dodge-landing-page
```

### Installer les dépendances

```bash
pnpm install
```

### Lancer le serveur de développement

```bash
pnpm dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
pnpm build
```

### Prévisualiser le build

```bash
pnpm preview
```

## Structure du projet

```
src/
├── components/     # Composants réutilisables (navbar, icons, theme-switch)
├── pages/          # Pages du site (index, entrainements, contact, rejoindre)
├── layouts/        # Layout par défaut
├── config/         # Configuration (navigation, liens)
├── styles/         # Styles globaux
└── types/          # Types TypeScript

public/
├── logo.webp              # Logo du club
├── gymnase.webp           # Photo du gymnase
└── dodgeball-picture.jpg  # Photo d'équipe
```

## Informations du club

- **Site web** : [https://www.calidodgeball.fr](https://www.calidodgeball.fr)
- **Email** : contact@calidodgeball.fr
- **Téléphone** : 06 28 34 26 80 (Olivier - Président)
- **Facebook** : [DodgeballLibourne](https://www.facebook.com/DodgeballLibourne)
- **Instagram** : [@dodgeballlibourne_a.c.d.c](https://www.instagram.com/dodgeballlibourne_a.c.d.c)

## Horaires d'entraînement

- **Lundi** : 20h00 - 22h00 (Adultes et ados 15 ans et +)
- **Jeudi** :
  - 18h00 - 19h00 (Enfants 10-15 ans)
  - 19h00 - 20h00 (Adultes et ados 15 ans et +)

**Lieu** : Gymnase Saint-Exupéry, Libourne

## Licence

MIT
