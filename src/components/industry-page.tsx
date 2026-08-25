import {
  Bullets,
  CTABand,
  DataTable,
  FAQList,
  PageHero,
  Prose,
  Section,
  SpecTable,
} from "@/components/page-blocks";

export interface IndustryContent {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  intro: string[];
  specs: [string, string][];
  parts: string[];
  materials: string[][];
  faqs: { q: string; a: string }[];
}

export function IndustryPage({ c }: { c: IndustryContent }) {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        image={c.image}
        imageAlt={c.imageAlt}
      />

      <Section title="Why manufacturers in this sector work with us">
        <Prose>
          {c.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
        <div className="mt-8">
          <SpecTable rows={c.specs} />
        </div>
      </Section>

      <Section muted title="Typical components we produce">
        <Bullets items={c.parts} />
      </Section>

      <Section title="Materials and finishes commonly specified">
        <DataTable head={["Material", "Why it is used", "Typical finish"]} rows={c.materials} />
      </Section>

      <Section muted title="Frequently asked questions">
        <FAQList items={c.faqs} />
      </Section>

      <CTABand />
    </>
  );
}
