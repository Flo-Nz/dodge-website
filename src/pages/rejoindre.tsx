import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

const RejoindreIndexPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        {/* Hero Section */}
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            Rejoindre les{" "}
            <span className={title({ color: "violet", size: "lg" })}>
              Thunders
            </span>
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Toutes les informations pour vous inscrire au club
          </div>
        </div>

        {/* Formulaire d'inscription */}
        <Card className="max-w-4xl w-full">
          <CardHeader className="flex flex-col items-start px-6 pt-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Formulaire d&apos;inscription
            </h2>
          </CardHeader>
          <CardBody className="px-6 pb-6">
            <p className="text-lg mb-4">
              Le formulaire d&apos;inscription est disponible en ligne sur notre
              plateforme sécurisée.
            </p>
            <Button
              isExternal
              as={Link}
              color="primary"
              href="https://association-cali-dodgeball-club.s2.yapla.com/fr/espace-membres"
              size="lg"
              variant="shadow"
            >
              Accéder au formulaire d&apos;inscription
            </Button>
          </CardBody>
        </Card>

        {/* Certificat médical */}
        <Card className="max-w-4xl w-full">
          <CardHeader className="flex flex-col items-start px-6 pt-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certificat médical
            </h2>
          </CardHeader>
          <CardBody className="px-6 pb-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Pour les mineurs
              </h3>
              <p className="mb-2">
                Le certificat médical n&apos;est plus obligatoire pour les
                mineurs. Si une seule réponse positive est mentionnée dans le
                questionnaire médical, il vous faudra dans ce cas un certificat.
              </p>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Pour les adultes
              </h3>
              <p className="mb-2">
                Votre certificat médical est valable 3 ans pour une même
                discipline. De même que pour les mineurs, si une seule réponse
                positive est mentionnée dans le questionnaire médical, il vous
                faudra dans ce cas un nouveau certificat.
              </p>
            </div>

            <Divider />

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-lg font-semibold text-primary">
                Documents à télécharger
              </h3>
              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  isExternal
                  as={Link}
                  color="secondary"
                  href="https://cdn.eu.yapla.com/company/CPYzPCunxMjTd4DVJpsekaq9Y/asset/files/doc_federales/QS_mineur.pdf"
                  variant="bordered"
                >
                  Questionnaire santé mineur
                </Button>
                <Button
                  isExternal
                  as={Link}
                  color="secondary"
                  href="https://calidodgeball.fr/wp-content/uploads/2025/09/Questionnaire-de-sante-majeur.pdf"
                  variant="bordered"
                >
                  Questionnaire santé majeur
                </Button>
                <Button
                  isExternal
                  as={Link}
                  color="secondary"
                  href="https://cdn.eu.yapla.com/company/CPYzPCunxMjTd4DVJpsekaq9Y/asset/files/doc_federales/CERTIFICAT%20MEDICAL.pdf"
                  variant="bordered"
                >
                  Certificat médical
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Tarifs */}
        <Card className="max-w-4xl w-full">
          <CardHeader className="flex flex-col items-start px-6 pt-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tarifs 2025-2026
            </h2>
          </CardHeader>
          <CardBody className="px-6 pb-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Adulte
                </h3>
                <p className="text-3xl font-bold">150€</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Mineur, étudiant, demandeur d&apos;emploi
                </h3>
                <p className="text-3xl font-bold">110€</p>
              </div>
            </div>

            <Divider />

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">
                Avantages et réductions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-default-700">
                <li>
                  Prix des licences dégressives lorsque plusieurs inscrits de la
                  même famille :
                  <ul className="list-none ml-6 mt-1 space-y-1">
                    <li>• -10€ sur la 2ème licence</li>
                    <li>• -20€ sur la 3ème licence</li>
                    <li>• -30€ sur la 4ème licence</li>
                  </ul>
                </li>
                <li>Une tenue complète comprise, renouvelée tous les 3 ans</li>
              </ul>
            </div>

            <Divider />

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">
                Modalités de paiement
              </h3>
              <p className="text-default-700">
                Si vous n&apos;avez pas payé par carte bancaire, remettez votre
                règlement en espèces, en coupons sport, en chèque(s) Up sport ou
                bien avec vos chèque(s) adossé(s) au nom du licencié, à
                l&apos;entraînement.
              </p>
              <p className="font-semibold text-default-800">
                Paiement en 4 fois possible par chèque et 3 fois par carte
                bancaire.
              </p>
            </div>
          </CardBody>
        </Card>

        {/* CTA */}
        <div className="mt-8">
          <Button
            isExternal
            as={Link}
            color="primary"
            href="https://association-cali-dodgeball-club.s2.yapla.com/fr/espace-membres"
            size="lg"
            variant="shadow"
          >
            S&apos;inscrire maintenant
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default RejoindreIndexPage;
