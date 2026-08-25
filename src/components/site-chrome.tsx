import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import { CONTACT, SOCIALS, WHATSAPP_URL } from "@/lib/site-contact";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import logoMark from "@/assets/mtc-mark.png";
import logoFull from "@/assets/mtc-logo-full.png";

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
} as const;


const SERVICES = [
  { to: "/services", label: "All services" },
  { to: "/services/cnc-machining", label: "CNC Machining" },
  { to: "/services/cnc-machining/cnc-milling", label: "CNC Milling" },
  { to: "/services/cnc-machining/cnc-turning", label: "CNC Turning" },
  { to: "/services/die-casting", label: "High-Pressure Die Casting" },
  { to: "/services/die-casting/quality", label: "Die Casting Quality" },
  { to: "/services/reverse-engineering", label: "Reverse Engineering & 3D Scanning" },
  { to: "/services/led-lights", label: "LED Lights" },
  { to: "/services/production", label: "On-Demand Production" },
] as const;

const INDUSTRIES = [
  { to: "/industries", label: "All industries" },
  { to: "/industries/automotive", label: "Automotive" },
  { to: "/industries/aerospace", label: "Aerospace" },
  { to: "/industries/medical", label: "Medical" },
  { to: "/industries/consumer-electronics", label: "Consumer Electronics" },
  { to: "/industries/electronics", label: "Electronics" },
  { to: "/industries/oil-and-gas", label: "Oil & Gas" },
  { to: "/industries/energy", label: "Energy & Power" },
  { to: "/industries/industrial-equipment", label: "Industrial Equipment" },
  { to: "/industries/robotics", label: "Robotics & Automation" },
  { to: "/industries/defence", label: "Defence" },
] as const;

const RESOURCES = [
  { to: "/materials", label: "Materials" },
  { to: "/materials/die-casting", label: "Die Casting Alloys" },
  { to: "/resources", label: "Resource centre" },
  { to: "/resources/design-tips", label: "Design Tips" },
  { to: "/resources/design-for-machining-toolkit", label: "Design for Machining Toolkit" },
  { to: "/resources/product-life-cycle", label: "Product Life Cycle" },
  { to: "/faq", label: "FAQ" },
] as const;

const COMPANY = [
  { to: "/about", label: "About MTC" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/quality", label: "Quality" },
  { to: "/certifications", label: "Certifications" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/prototyping-to-production", label: "Prototyping to Production" },
  { to: "/contact", label: "Contact" },
] as const;

const MENUS = [
  { label: "Services", items: SERVICES },
  { label: "Industries", items: INDUSTRIES },
  { label: "Resources", items: RESOURCES },
  { label: "Company", items: COMPANY },
] as const;

function DesktopMenu({
  label,
  items,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-5 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
        <ChevronDown className="size-3.5" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border border-border bg-card opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block border-b border-border px-4 py-3 text-sm text-muted-foreground transition-colors last:border-b-0 hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Merjan Tooling Craft logo"
            className="h-9 w-auto"
            width={1086}
            height={872}
          />
          <span className="font-display text-sm font-extrabold uppercase leading-tight tracking-tight sm:text-base">
            Merjan <span className="text-primary">Tooling Craft</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {MENUS.map((m) => (
            <DesktopMenu key={m.label} label={m.label} items={m.items} />
          ))}
          <Link to="/quote" className="btn-primary">
            Request a Quote
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-border bg-card px-5 py-4 lg:hidden">
          {MENUS.map((m) => (
            <div key={m.label} className="border-b border-border py-3 last:border-b-0">
              <p className="label-eyebrow">{m.label}</p>
              <div className="mt-2">
                {m.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full justify-center"
          >
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const cols = [
    { title: "Services", items: SERVICES.slice(1) },
    { title: "Industries", items: INDUSTRIES.slice(1) },
    { title: "Resources", items: RESOURCES },
    { title: "Company", items: COMPANY },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-md bg-surface-light p-3">
            <img
              src={logoFull}
              alt="Merjan Tooling Craft — Total Engineering Solutions"
              className="h-20 w-auto"
              width={991}
              height={790}
              loading="lazy"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Precision engineering solutions — customized CNC machining delivered with innovation and
            craftsmanship.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="size-4 text-primary" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="flex items-center gap-2 break-all text-muted-foreground hover:text-foreground">
                <Mail className="size-4 shrink-0 text-primary" /> {CONTACT.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>


        {cols.map((c) => (
          <div key={c.title}>
            <p className="label-eyebrow">{c.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {c.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-5 py-5 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Merjan Tooling Craft. All rights reserved.
      </div>
    </footer>
  );
}
