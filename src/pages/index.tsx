import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Hero Section */}
        <div className="inline-block max-w-4xl text-center justify-center">
          <img
            alt="ACDC Thunders Logo"
            className="h-32 w-32 mx-auto mb-6"
            src="/logo.webp"
          />
          <div className="relative">
            <span className={title()}>ACDC&nbsp;</span>
            <span className={title({ color: "violet" })}>Thunders&nbsp;</span>
            <span
              className={title({ color: "yellow", size: "sm" })}
              style={{ verticalAlign: "super" }}
            >
              ⚡
            </span>
          </div>
          <div className={subtitle({ class: "mt-4" })}>
            Association CALI Dodgeball Club
          </div>
        </div>

        {/* Welcome Section */}
        <div className="max-w-4xl mt-12 px-6">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bienvenue chez les Thunders !
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-center">
            <p>
              Faire partie des Thunders c&apos;est rejoindre la référence du
              club de dodgeball du Libournais et du Fronsadais.
            </p>

            <p>
              Le dodgeball est un sport en plein essor, dynamique,
              spectaculaire, intergénérationnel et mixte.
            </p>

            <p>
              Rejoignez-nous pour pratiquer le dodgeball en loisir ou en
              compétition. Les Thunders partagent les valeurs de
              l&apos;olympisme à savoir l&apos;excellence, l&apos;amitié et le
              respect.
            </p>
          </div>

          {/* Hero Image with CTA Buttons */}
          <div className="mt-8 relative rounded-lg overflow-hidden shadow-lg max-w-2xl w-full mx-auto">
            <img
              alt="Équipe ACDC Thunders Dodgeball Libourne"
              className="w-full h-auto object-cover"
              src="/dodgeball-picture.jpg"
            />
            {/* Overlay gradient pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Boutons CTA superposés */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-4">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                })}
                href="/rejoindre"
              >
                Nous rejoindre
              </Link>
              <Link
                className={buttonStyles({
                  color: "secondary",
                  variant: "solid",
                  radius: "full",
                  size: "lg",
                })}
                href="/entrainements"
              >
                Entraînements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;
