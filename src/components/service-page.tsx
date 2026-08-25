import { Link } from "@tanstack/react-router";
import {
  Breadcrumbs,
  Bullets,
  CTABand,
  CardGrid,
  DataTable,
  FAQList,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  SpecTable,
} from "@/components/page-blocks";

export interface ServiceContent {
  slug: string;
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  overview: string[];
  quickSpecs: [string, string][];
  capabilities: string[];
  advantages: { title: string; body: string }[];
  materials: string[];
  tolerances: string[][];
  machines: string[][];
  applications: string[];
  industries: { to: string; label: string }[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
  related: { to: string; label: string }[];
}

export function ServicePageTemplate({ s }: { s: ServiceContent }) {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path: s.path },
        ]}
      />
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        lead={s.lead}
        image={s.image}
        imageAlt={s.imageAlt}
      />

      <Section eyebrow="Overview" title={`${s.name} at Merjan Tooling Craft`}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Prose>
            {s.overview.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </Prose>
          <div className="rounded border border-border bg-card p-6 shadow-soft">
            <p className="label-eyebrow">At a glance</p>
            <dl className="mt-4 space-y-3 text-sm">
              {s.quickSpecs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-display font-bold">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/quote" className="btn-primary mt-6 w-full">
              Request a quote
            </Link>
          </div>
        </div>
      </Section>

      <Section muted eyebrow="Capabilities" title="What we can produce">
        <Bullets items={s.capabilities} />
      </Section>

      <Section eyebrow="Advantages" title="Why engineers specify this process">
        <CardGrid items={s.advantages.map((a) => ({ title: a.title, body: a.body }))} />
      </Section>

      <Section muted eyebrow="Materials" title="Supported materials">
        <Bullets items={s.materials} />
      </Section>

      <Section eyebrow="Tolerances" title="Tolerance and finish capability">
        <DataTable head={["Feature", "Standard", "Precision"]} rows={s.tolerances} />
      </Section>

      <Section muted eyebrow="Equipment" title="Machine specifications">
        <DataTable head={["Machine", "Capacity / travel", "Accuracy"]} rows={s.machines} />
        <div className="mt-8">
          <SpecTable rows={s.quickSpecs} />
        </div>
      </Section>

      <Section eyebrow="Applications" title="Typical applications">
        <Bullets items={s.applications} />
      </Section>

      <Section muted eyebrow="Gallery" title="Representative work">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.gallery.map((g) => (
            <img
              key={g.src + g.alt}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={1024}
              height={768}
              className="h-56 w-full rounded border border-border object-cover shadow-soft"
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title="Industries served by this process">
        <div className="flex flex-wrap gap-3">
          {s.industries.map((i) => (
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

      <Section muted eyebrow="FAQ" title="Frequently asked questions">
        <FAQList items={s.faqs} />
      </Section>

      <RelatedLinks title="Related services" items={s.related} />

      <CTABand />
    </>
  );
}
