import { createFileRoute } from "@tanstack/react-router";
import svcDiecasting from "@/assets/svc-diecast-quality.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/die-casting/quality")({
  head: () =>
    seo(
      "Die Casting Quality & Inspection | Merjan Tooling Craft",
      "How Merjan Tooling Craft controls die casting quality: tool validation, first article inspection, dimensional reporting and in-process monitoring.",
      "/services/die-casting/quality",
    ),
  component: CastingQuality,
});

function CastingQuality() {
  return (
    <>
      <PageHero
        eyebrow="Die Casting / Quality"
        title="Quality built into the tool, not inspected in afterwards"
        lead="Consistent castings start with a validated die and a documented process — then get verified part by part."
        image={svcDiecasting}
        imageAlt="Inspection of a die cast aluminium component"
      />

      <Section title="Control points">
        <SpecTable
          rows={[
            ["Tool validation", "Sample & correct before release"],
            ["First article", "Full dimensional report"],
            ["In process", "Shot monitoring & visual checks"],
            ["Records", "Retained per production batch"],
          ]}
        />
      </Section>

      <Section muted title="What we check">
        <Bullets
          items={[
            "Dimensional conformance against your drawing datums",
            "Porosity and cold shut inspection on critical sections",
            "Flash and trim quality around the parting line",
            "Surface finish and coating adhesion",
            "Thread and machined feature verification",
            "Alloy certification traceability from the supplier",
          ]}
        />
      </Section>

      <Section title="Reporting">
        <Prose>
          <p>
            Every production release includes a dimensional report against the features you have
            identified as critical. Where a part feeds a regulated assembly, we can extend that to a
            full first article inspection format and retain records for the life of the tool.
          </p>
          <p>
            If a dimension drifts, we correct the tool rather than sort the parts — that is the only
            fix that holds across a long production run.
          </p>
        </Prose>
      </Section>

      <CTABand title="Need documented casting quality?" />
    </>
  );
}
