import { Link } from "@heroui/link";
import { Card, CardBody, CardHeader } from "@heroui/card";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const ContactPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            Contactez les{" "}
            <span className={title({ color: "violet", size: "lg" })}>
              Thunders
            </span>
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Nous sommes à votre écoute pour toute question
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full px-6">
          {/* Téléphone */}
          <Card className="w-full">
            <CardHeader className="flex flex-col items-start px-6 pt-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Téléphone
              </h2>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <div className="space-y-2">
                <Link
                  className="text-2xl font-semibold text-primary"
                  href="tel:+33628342680"
                >
                  06 28 34 26 80
                </Link>
                <p className="text-default-600">Olivier (président)</p>
              </div>
            </CardBody>
          </Card>

          {/* Email */}
          <Card className="w-full">
            <CardHeader className="flex flex-col items-start px-6 pt-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Email
              </h2>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <Link
                className="text-2xl font-semibold text-primary break-all"
                href="mailto:contact@calidodgeball.fr"
              >
                contact@calidodgeball.fr
              </Link>
            </CardBody>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="max-w-4xl w-full">
          <CardBody className="px-6 py-6">
            <p className="text-center text-lg text-default-700">
              N&apos;hésitez pas à nous contacter pour toute question sur le
              club, les inscriptions, les entraînements ou les événements à
              venir. Nous vous répondrons dans les plus brefs délais !
            </p>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default ContactPage;
