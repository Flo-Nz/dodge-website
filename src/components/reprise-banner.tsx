import { useState } from "react";
import { Alert } from "@heroui/alert";
import { Link } from "@heroui/link";

// La bannière est masquée uniquement pour la session en cours (en mémoire) :
// elle réapparaît automatiquement après un rechargement de la page.
let dismissed = false;

export const RepriseBanner = () => {
  const [isVisible, setIsVisible] = useState(!dismissed);

  if (!isVisible) return null;

  const handleClose = () => {
    dismissed = true;
    setIsVisible(false);
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 pt-4">
      <Alert
        isClosable
        color="primary"
        description="La reprise des entraînements aura lieu la semaine du 7 septembre 2026."
        endContent={
          <div className="hidden sm:block">
            <Link
              className="font-medium whitespace-nowrap"
              color="primary"
              href="/entrainements"
              size="sm"
            >
              Voir les entraînements
            </Link>
          </div>
        }
        title="Reprise des entraînements"
        variant="faded"
        onClose={handleClose}
      />
    </div>
  );
};
