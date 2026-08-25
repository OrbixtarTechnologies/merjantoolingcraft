import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Quote, Star } from "lucide-react";
import type { ReactNode } from "react";
import { CONTACT, WHATSAPP_URL } from "@/lib/site-contact";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Reveal, Counter, WordsReveal, HeroFade } from "@/components/motion-kit";

export const SITE_URL = "https://www.merjantoolingcraft.com";

export function seo(title: string, description: string, path: string, image?: string) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        item: `${SITE_URL}${t.path}`,
      })),
    }),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    }),
  };
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-secondary/60">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
        {trail.map((t, i) => (
          <li key={t.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span className="text-foreground">{t.name}</span>
            ) : (
              <Link to={t.path} className="transition-colors hover:text-primary">
                {t.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border panel-navy">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="ken-burns absolute inset-0 h-full w-full object-cover opacity-35"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        </>
      )}
      <div
        aria-hidden="true"
        className="drift-orb pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-full bg-primary/20 blur-3xl"
      />
      <div aria-hidden="true" className="hatch pointer-events-none absolute inset-x-0 bottom-0 h-10 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <HeroFade>
          <p className="label-eyebrow">{eyebrow}</p>
        </HeroFade>
        <span className="rule-accent mt-4" aria-hidden="true" style={{ animationDelay: "0.15s" }} />
        <WordsReveal
          as="h1"
          delay={0.12}
          text={title}
          className="mt-4 max-w-4xl text-4xl leading-[1.05] md:text-6xl"
        />
        <HeroFade delay={0.3}>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/75">{lead}</p>
        </HeroFade>
        <HeroFade delay={0.42}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary sheen group">
              Request a quote{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10"
            >
              <WhatsAppIcon className="size-4" /> Chat with an engineer
            </a>
          </div>
        </HeroFade>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  muted,
  id,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={muted ? "border-b border-border bg-secondary/50" : "border-b border-border"}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        {(eyebrow || title || intro) && (
          <Reveal>
            {eyebrow && <p className="label-eyebrow">{eyebrow}</p>}
            {title && (
              <>
                <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl">{title}</h2>
                <span className="rule-accent mt-4" aria-hidden="true" />
              </>
            )}
            {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
          </Reveal>
        )}
        <div className={eyebrow || title || intro ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-4 leading-relaxed text-muted-foreground">{children}</div>;
}

export function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {rows.map(([k, v]) => (
        <div key={k} className="bg-card p-5">
          <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            {k}
          </dt>
          <dd className="mt-1.5 font-display font-bold">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded border border-border bg-card shadow-soft">
      <table className="w-full min-w-[36rem] border-collapse text-sm">
        <thead>
          <tr className="bg-secondary/70">
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-border px-4 py-3 text-left font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.join("|")} className="border-b border-border last:border-b-0">
              {r.map((c, i) => (
                <td
                  key={i}
                  className={
                    i === 0 ? "px-4 py-3 font-display font-bold" : "px-4 py-3 text-muted-foreground"
                  }
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TrustBar({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-3 lg:grid-cols-6">
        {items.map((s) => (
          <div key={s.label} className="border-b border-r border-border px-4 py-7 last:border-r-0 lg:border-b-0">
            <p className="font-display text-2xl font-extrabold text-primary md:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Animated statistics band. */
export function StatBand({
  items,
}: {
  items: { to: number; suffix?: string; decimals?: number; label: string }[];
}) {
  return (
    <section className="border-b border-border panel-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-16 md:grid-cols-3 lg:grid-cols-6">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-primary md:text-4xl">
              <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-2 text-xs text-navy-foreground/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LogoStrip({ items }: { items: string[] }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-center font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by engineering teams across 4 continents
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((n) => (
            <li
              key={n}
              className="font-display text-sm font-extrabold uppercase tracking-widest text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials({
  items,
}: {
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08}>
          <figure className="flex h-full flex-col surface-card p-7">
            <Quote className="size-6 text-primary" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{t.quote}”
            </blockquote>
            <div className="mt-5 flex items-center gap-1 text-primary" aria-label="5 out of 5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <figcaption className="mt-3 border-t border-border pt-3">
              <span className="block font-display text-sm font-bold">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="max-w-3xl divide-y divide-border overflow-hidden rounded border border-border bg-card">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">
            {f.q}
            <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CardGrid({
  items,
  cols = 3,
}: {
  cols?: 2 | 3 | 4;
  items: { title: string; body: string; to?: string; img?: string; tag?: string }[];
}) {
  const grid =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 ${grid}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % 3) * 0.07}>
          <article className="group flex h-full flex-col overflow-hidden surface-card">
            {it.img && (
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            )}
            <div className="flex flex-1 flex-col p-6">
              {it.tag && (
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                  {it.tag}
                </p>
              )}
              <h3 className="mt-2 text-xl">{it.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              {it.to && (
                <Link
                  to={it.to}
                  className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-foreground"
                >
                  <span>{it.title} details</span>{" "}
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: { n: string; t: string; d: string }[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.06}>
          <div className="border-t-2 border-primary pt-5">
            <p className="font-mono text-sm text-primary">{s.n}</p>
            <h3 className="mt-2 text-lg">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function RelatedLinks({
  title = "Related",
  items,
}: {
  title?: string;
  items: { to: string; label: string }[];
}) {
  return (
    <Section muted title={title}>
      <div className="flex flex-wrap gap-3">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="rounded border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            {i.label}
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function CTABand({
  title = "Ready to start your project?",
  body = "Send your CAD file, drawing or sample part — an engineer reviews every enquiry and replies with material, tolerance and lead-time options.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="panel-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-navy-foreground/70">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/quote" className="btn-primary">
            Upload CAD & get a quote <ArrowRight className="size-4" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="btn-ghost border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10"
          >
            <Phone className="size-4" /> Call an engineer
          </a>
        </div>
      </div>
    </section>
  );
}
