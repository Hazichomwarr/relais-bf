import { Button } from "@/components/ui/Button";
import { contactChannels } from "@/content/contact";

const WHATSAPP_MESSAGE =
  "Bonjour RELAIS, je souhaite discuter d'un besoin numérique avec votre équipe.";

export function ContactChannels() {
  const whatsapp = contactChannels.find((channel) => channel.label === "WhatsApp")!;
  const otherChannels = contactChannels.filter(
    (channel) => channel.label === "Téléphone" || channel.label === "Email"
  );
  const whatsappHref = `${whatsapp.href}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
      <div>
        <span className="text-sm font-medium uppercase tracking-wide text-relais-emerald">
          Le moyen le plus simple
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-relais-navy sm:text-4xl">
          Écrivez-nous sur WhatsApp
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Présentez-nous brièvement votre besoin. Nous pourrons ensuite
          échanger avec vous et déterminer la meilleure façon de vous
          accompagner.
        </p>
        <div className="mt-8">
          <Button
            href={whatsappHref}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Écrire sur WhatsApp
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {otherChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            aria-label={`${channel.label} : ${channel.value}`}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-relais-emerald/40"
          >
            <span aria-hidden="true" className="text-xs font-semibold uppercase tracking-wide text-muted">
              {channel.label}
            </span>
            <span aria-hidden="true" className="mt-2 block text-lg font-semibold text-relais-navy">
              {channel.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
