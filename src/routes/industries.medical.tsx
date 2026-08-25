import { createFileRoute } from "@tanstack/react-router";
import svcScanning from "@/assets/ind-medical.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/medical")({
  head: () =>
    seo(
      "Medical Device Machining & Components | Merjan Tooling Craft",
      "Stainless steel instrument components, device housings and cleanable machined finishes for medical manufacturers, produced by Merjan Tooling Craft.",
      "/industries/medical",
    ),
  component: Medical,
});

function Medical() {
  return (
    <>
      <PageHero
        eyebrow="Industries / Medical"
        title="Medical devices & instrumentation"
        lead="Corrosion-resistant materials, cleanable surfaces and repeatable dimensions on parts that end up close to a patient."
        image={svcScanning}
        imageAlt="Precision stainless steel medical component being measured"
      />

      <Section title="Capability focus">
        <SpecTable
          rows={[
            ["Materials", "303 / 304 / 17-4 PH stainless"],
            ["Finishes", "Bead blast, polish, passivate"],
            ["Tolerance", "±0.02 mm achievable"],
            ["Volumes", "Prototype to scheduled batch"],
          ]}
        />
      </Section>

      <Section muted title="Components we make">
        <Bullets
          items={[
            "Surgical instrument bodies and handles",
            "Device enclosures and machined housings",
            "Fixtures for assembly and test",
            "Precision shafts, pins and bushings",
            "Lab and diagnostic equipment hardware",
            "Replacement parts for existing devices",
          ]}
        />
      </Section>

      <Section title="Finish and cleanability">
        <Prose>
          <p>
            Medical components are often defined as much by their surface as their geometry. We
            control tool paths and finishing to avoid crevices that trap contamination, and can
            supply bead blast, polished or passivated surfaces depending on the cleaning regime the
            device will face.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
