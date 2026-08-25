import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/resources-design.jpg";
import { CTABand, PageHero, Prose, Section, Steps, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/resources/design-for-machining-toolkit")({
  head: () =>
    seo(
      "Design for Machining Toolkit | Merjan Tooling Craft",
      "A pre-quotation checklist from Merjan Tooling Craft: review geometry, material, tolerances, finishing and documentation before releasing a machined part.",
      "/resources/design-for-machining-toolkit",
    ),
  component: Toolkit,
});

const CHECKLIST: [string, string[]][] = [
  [
    "1. Geometry",
    [
      "All internal corners have a radius suited to a real cutter",
      "No pockets deeper than 4× the tool diameter",
      "Undercuts removed or justified",
      "Thin walls checked against material minimums",
    ],
  ],
  [
    "2. Material",
    [
      "Alloy or polymer stated, including temper",
      "Stock size considered against finished dimensions",
      "Corrosion and temperature requirements captured",
      "Substitutes acceptable to you are listed",
    ],
  ],
  [
    "3. Tolerances",
    [
      "General tolerance block present on the drawing",
      "Critical features individually toleranced",
      "Datums defined and consistent",
      "Fits specified by function, not habit",
    ],
  ],
  [
    "4. Features",
    [
      "Threads use standard forms and sensible depths",
      "Hole positions dimensioned from clear datums",
      "Engraving and markings defined with font and depth",
      "Deburr and edge break requirements stated",
    ],
  ],
  [
    "5. Finishing",
    [
      "Surface finish specified where it matters",
      "Coating type and masking requirements listed",
      "Coating thickness allowed for on tight fits",
      "Cosmetic faces identified",
    ],
  ],
  [
    "6. Documentation",
    [
      "Native CAD plus a neutral STEP file supplied",
      "Drawing PDF matches the model revision",
      "Quantity and forecast stated",
      "Inspection expectations agreed up front",
    ],
  ],
];

function Toolkit() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Toolkit"
        title="Design for machining toolkit"
        lead="Run this checklist over your model before quotation. Most cost surprises are caught in ten minutes here."
        image={partsGrid}
        imageAlt="Precision machined parts prepared for inspection"
      />

      <Section title="Before you release the part">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKLIST.map(([title, items]) => (
            <article key={title} className="border-t-2 border-primary bg-card p-6">
              <h3 className="text-lg">{title}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section muted eyebrow="What happens next" title="Our review process">
        <Steps
          items={[
            { n: "01", t: "Model check", d: "Geometry opened, healed if needed, and checked for manufacturability." },
            { n: "02", t: "Route selection", d: "Milling, turning or casting chosen against quantity and tolerance." },
            { n: "03", t: "Feedback", d: "We send specific changes with the cost impact of each one." },
            { n: "04", t: "Quotation", d: "Firm price and lead time against the agreed revision." },
          ]}
        />
      </Section>

      <Section title="Why this matters">
        <Prose>
          <p>
            A radius change or a relaxed tolerance can halve a machining cycle. We would rather have
            that conversation before the order than explain the price after it.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
