import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/quality-inspection.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/quality")({
  head: () =>
    seo(
      "Quality, Inspection & Standards | Merjan Tooling Craft",
      "Merjan Tooling Craft's approach to quality: dimensional verification, first article inspection, material traceability and documented reporting on every component.",
      "/quality",
    ),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Verified before it leaves us"
        lead="Precision is a claim until it is measured. Every component we ship is checked against the features that matter to you."
        image={partsGrid}
        imageAlt="Dimensional inspection of machined components with calipers"
      />

      <Section title="Quality at a glance">
        <SpecTable
          rows={[
            ["Inspection", "Dimensional verification"],
            ["First article", "Full report on request"],
            ["Traceability", "Material certification retained"],
            ["Records", "Held per production batch"],
          ]}
        />
      </Section>

      <Section muted title="What we control">
        <Bullets
          items={[
            "Incoming material identity and certification",
            "Fixture and set-up verification before a run starts",
            "In-process checks at defined intervals",
            "Final dimensional inspection against nominated features",
            "Tool wear tracking so quality does not drift mid-batch",
            "Documented corrective action when something moves",
          ]}
        />
      </Section>

      <Section title="Working to your standard">
        <Prose>
          <p>
            Some customers need a simple conformance note; others need a full first article
            inspection with a numbered report against every dimension. We agree the level of
            evidence at quotation stage so the cost is visible and the expectation is shared.
          </p>
          <p>
            Where your own quality system requires supplier documentation, send us the format and we
            will complete it rather than substitute our own.
          </p>
        </Prose>
      </Section>

      <CTABand title="Need documented inspection?" />
    </>
  );
}
