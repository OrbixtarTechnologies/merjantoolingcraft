import { Link } from "@tanstack/react-router";
import {
  Breadcrumbs,
  Bullets,
  CTABand,
  DataTable,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
} from "@/components/page-blocks";

export interface MaterialContent {
  slug: string;
  name: string;
  family: "Metal" | "Plastic";
  headline: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  summary: string[];
  grades: string[];
  properties: string[][];
  applications: string[];
  advantages: string[];
  machiningTips: string[];
  finishes: string[];
}

export function MaterialPageTemplate({ m }: { m: MaterialContent }) {
  const path = `/materials/${m.slug}`;
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Materials", path: "/materials" },
          { name: m.name, path },
        ]}
      />
      <PageHero
        eyebrow={`Materials / ${m.family}`}
        title={m.headline}
        lead={m.lead}
        image={m.image}
        imageAlt={m.imageAlt}
      />

      <Section eyebrow="Overview" title={`${m.name} at a glance`}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Prose>
            {m.summary.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
          <div className="rounded border border-border bg-card p-6 shadow-soft">
            <p className="label-eyebrow">Grades we machine</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {m.grades.map((g) => (
                <li key={g} className="border-b border-border pb-2 last:border-b-0">
                  {g}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-6 w-full">
              Quote in {m.name}
            </Link>
          </div>
        </div>
      </Section>

      <Section muted eyebrow="Properties" title="Typical mechanical and physical properties">
        <DataTable head={["Property", "Typical value", "Note"]} rows={m.properties} />
      </Section>

      <Section eyebrow="Applications" title={`Where ${m.name} is specified`}>
        <Bullets items={m.applications} />
      </Section>

      <Section muted eyebrow="Advantages" title="Why engineers choose it">
        <Bullets items={m.advantages} />
      </Section>

      <Section eyebrow="Machining" title="Machining and processing notes">
        <Bullets items={m.machiningTips} />
      </Section>

      <Section muted eyebrow="Finishing" title="Available surface finishes">
        <Bullets items={m.finishes} />
      </Section>

      <Section eyebrow="Gallery" title="Representative parts">
        <img
          src={m.image}
          alt={`${m.name} components manufactured by Merjan Tooling Craft`}
          loading="lazy"
          width={1600}
          height={1067}
          className="w-full rounded border border-border object-cover shadow-soft"
        />
      </Section>

      <RelatedLinks
        title="Related services"
        items={[
          { to: "/services/cnc-machining", label: "CNC Machining" },
          { to: "/services/precision-components", label: "Precision Components" },
          { to: "/services/rapid-prototyping", label: "Rapid Prototyping" },
          { to: "/materials", label: "All materials" },
        ]}
      />

      <CTABand title={`Need ${m.name} components?`} />
    </>
  );
}
