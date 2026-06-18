import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const EntrainementsPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            <span className={title({ color: "violet", size: "lg" })}>
              Entraînements
            </span>
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Horaires et lieu des séances
          </div>
        </div>

        {/* Créneaux par jour */}
        <div className="max-w-4xl w-full space-y-6">
          {/* Lundi */}
          <Card className="w-full">
            <CardHeader className="flex flex-col items-start px-6 pt-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lundi
              </h2>
            </CardHeader>
            <CardBody className="px-6 pb-6 space-y-4">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    18h - 19h30
                  </h3>
                  <p className="text-lg font-medium">Minimes</p>
                  <p className="text-default-600">
                    11-13 ans (né(e)s 2013-2015)
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    19h30 - 21h
                  </h3>
                  <p className="text-lg font-medium">
                    Juniors et Séniors - Niveau équipe 1 (ouvert à tous)
                  </p>
                  <p className="text-default-600">Né(e)s 2012 et avant</p>
                </div>

                <div className="bg-secondary/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    21h - 22h
                  </h3>
                  <p className="text-lg font-medium">
                    Juniors et Séniors - Ateliers spécifiques
                  </p>
                  <p className="text-default-600">Sur la base du volontariat</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Jeudi */}
          <Card className="w-full">
            <CardHeader className="flex flex-col items-start px-6 pt-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Jeudi
              </h2>
            </CardHeader>
            <CardBody className="px-6 pb-6 space-y-4">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    18h - 19h30
                  </h3>
                  <p className="text-lg font-medium">Benjamin(e)s</p>
                  <p className="text-default-600">
                    8-10 ans (né(e)s 2016-2018)
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    19h30 - 21h
                  </h3>
                  <p className="text-lg font-medium">
                    Juniors et Séniors - Niveau équipe 2
                  </p>
                  <p className="text-default-600">Né(e)s 2012 et avant</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Lieu */}
        <Card className="max-w-4xl w-full">
          <CardHeader className="flex flex-col items-start px-6 pt-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lieu d&apos;entraînement
            </h2>
          </CardHeader>
          <CardBody className="px-6 pb-6 space-y-4">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                Gymnase du Lycée Professionel Henri Brulle
              </h3>
              <p className="text-lg text-default-700">
                Entrée par la rue de la bordette, en face du numéro 14 à
                Libourne.
              </p>
            </div>

            <Divider />

            <div className="mt-4">
              <img
                alt="Entrée du gymnase Henri Brulle"
                className="w-full rounded-lg shadow-lg"
                src="/gymnase.webp"
              />
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default EntrainementsPage;
