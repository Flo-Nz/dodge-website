import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const EvenementsPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            <span className={title({ color: "violet", size: "lg" })}>
              Événements
            </span>
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Les prochains rendez-vous du club
          </div>
        </div>

        <Card className="max-w-4xl w-full">
          <CardHeader className="flex flex-col items-start px-6 pt-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CALI Dodgeball Cup
            </h2>
          </CardHeader>
          <CardBody className="px-6 pb-6 space-y-6">
            <div className="flex justify-center">
              <img
                alt="Affiche de la CALI Dodgeball Cup"
                className="w-full max-w-sm rounded-lg shadow-lg"
                src="/calidodgeballcup.png"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Date
                </h3>
                <p>Dimanche 13 septembre</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-secondary mb-1">
                  Horaire
                </h3>
                <p>À partir de 14h</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Lieu
                </h3>
                <p>Gymnase des Dagueys, Libourne</p>
              </div>
            </div>

            <Divider />

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">
                À propos de l&apos;événement
              </h3>
              <p className="text-lg text-default-700">
                Venez vivre une après-midi de découverte et d&apos;initiation au
                dodgeball, encadrée par les coachs du club. Dynamique,
                spectaculaire et convivial, ce sport hors du commun se pratique
                en équipe et ne requiert aucune expérience préalable.
                L&apos;événement est ouvert à toutes et à tous, à partir de 16
                ans.
              </p>
            </div>

            <Divider />

            <div className="flex flex-col items-center gap-3">
              <Button
                as="a"
                color="primary"
                href="https://forms.gle/UfAzm6bVbTRx4z4N6"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
                variant="shadow"
              >
                S&apos;inscrire à l&apos;événement
              </Button>
              <p className="text-sm text-default-500">
                Inscription via le formulaire Google Forms
              </p>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default EvenementsPage;
