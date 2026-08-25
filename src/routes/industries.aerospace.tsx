import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/ind-aerospace.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/aerospace")({
  head: () =>
    seo(
      "Aerospace Machining & Inspection | Merjan Tooling Craft",
      "Tight-tolerance CNC machined aerospace components, ground support hardware and documented dimensional inspection from Merjan Tooling Craft.",
      "/industries/aerospace",
    ),
  component: Aerospace,
});

function Aerospace() {
  return (
    <>
      <PageHero
        eyebrow="Industries / Aerospace"
        title="Aerospace & defence"
        lead="Tight tolerances, difficult materials and documentation that has to stand up to scrutiny."
        image={partsGrid}
        imageAlt="Precision machined aerospace components"
      />

      <Section title="Capability focus">
        <SpecTable
          rows={[
            ["Tolerance", "±0.02 mm achievable"],
            ["Materials", "Aluminium 7075, stainless, tool steel"],
            ["Inspection", "Documented dimensional reports"],
            ["Volumes", "One-off to scheduled batches"],
          ]}
        />
      </Section>

      <Section muted title="Components we make">
        <Bullets
          items={[
            "Structural brackets and mounting plates",
            "Ground support and test equipment hardware",
            "Machined housings and instrument bodies",
            "Tooling, jigs and assembly fixtures",
            "Legacy spares rebuilt from scanned originals",
            "Precision inserts and bushings",
          ]}
        />
      </Section>

      <Section title="Documentation">
        <Prose>
          <p>
            Aerospace work is judged on evidence as much as on the part. We supply dimensional
            reports against nominated critical features, retain material certification from the
            supplier, and keep records tied to the batch so a component can be traced years later.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
