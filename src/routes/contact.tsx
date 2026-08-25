import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { PageHero, Section, seo } from "@/components/page-blocks";
import { CONTACT, SOCIALS, WHATSAPP_URL } from "@/lib/site-contact";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact Merjan Tooling Craft — Talk to an Engineer",
      "Get in touch with Merjan Tooling Craft about CNC machining, die casting, reverse engineering or LED lighting projects. Talk directly to the people making your parts.",
      "/contact",
    ),
  component: ContactPage,
});

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
} as const;

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
  { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: MapPin, label: "Workshop", value: "Merjan Tooling Craft — precision machining & die casting facility" },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];


function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the people making your parts"
        lead="No call centre and no sales layer — questions about tolerance, tooling or lead time go straight to an engineer."
      />

      <Section title="Contact details">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {DETAILS.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4 bg-card p-6">
              <Icon className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="mt-1 block font-display font-bold hover:text-primary">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-display font-bold">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Message us directly">
        <div className="flex flex-wrap gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon className="size-4" /> WhatsApp us
          </a>
          <a href={CONTACT.phoneHref} className="btn-ghost">
            <Phone className="size-4" /> Call {CONTACT.phoneDisplay}
          </a>
        </div>

        <p className="label-eyebrow mt-10">Follow us</p>
        <div className="mt-3 flex flex-wrap gap-px border border-border bg-border">
          {SOCIALS.map((s) => {
            const Icon = SOCIAL_ICONS[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card px-5 py-4 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="size-5 text-primary" /> {s.label}
              </a>
            );
          })}
        </div>
      </Section>

      <Section muted title="Have a part to quote?">
        <p className="max-w-2xl text-muted-foreground">
          The fastest route to a price is the request form — send the drawing, CAD model or a photo
          of the sample and we will come back with a route to manufacture.
        </p>
        <Link to="/quote" className="btn-primary mt-6">
          Submit your request
        </Link>
      </Section>

    </>
  );
}
