import { useState } from "react";
import { Alert } from "@heroui/alert";
import { Link } from "@heroui/link";

const DISMISS_KEY = "acdc:reprise-2026:dismissed";

export const RepriseBanner = () => {
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window === "undefined" ||
      window.localStorage.getItem(DISMISS_KEY) !== "true",
  );

  if (!isVisible) return null;

  const handleClose = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, "true");
    } catch {
      // Stockage indisponible (navigation privée, quota…) : on masque quand même
    }
    setIsVisible(false);
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 pt-4">
      <Alert
        isClosable
        color="primary"
        description="La reprise des entraînements aura lieu la semaine du 7 septembre 2026."
        endContent={
          <Link
            className="font-medium whitespace-nowrap"
            color="primary"
            href="/entrainements"
            size="sm"
          >
            Voir les entraînements
          </Link>
        }
        title="Reprise des entraînements"
        variant="faded"
        onClose={handleClose}
      />
    </div>
  );
};
