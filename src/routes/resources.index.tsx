import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/resources-design.jpg";
import partsGrid from "@/assets/quality-inspection.jpg";
import svcDiecasting from "@/assets/prototype-to-production.jpg";
import { CTABand, CardGrid, PageHero, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/resources/")({
  head: () =>
    seo(
      "Design & Manufacturing Resources | Merjan Tooling Craft",
      "Design tips, a design-for-machining toolkit and product life cycle guidance from the engineers at Merjan Tooling Craft.",
      "/resources",
    ),
  component: ResourcesIndex,
});

function ResourcesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Design and manufacturing knowledge"
        lead="Practical guidance from the people cutting the parts — written to save cost before the drawing is released."
        image={partsGrid}
        imageAlt="Machined components laid out for inspection"
      />

      <Section title="Start here">
        <CardGrid
          items={[
            {
              title: "Design tips",
              tag: "Quick reference",
              body: "Wall thickness, radii, tolerances and threads — the details that most often add cost.",
              to: "/resources/design-tips",
              img: heroCnc,
            },
            {
              title: "Design for machining toolkit",
              tag: "Checklist",
              body: "A step-by-step review to run over your model before you send it for quotation.",
              to: "/resources/design-for-machining-toolkit",
              img: partsGrid,
            },
            {
              title: "Product life cycle",
              tag: "Strategy",
              body: "Choosing between machining and casting as a product moves from prototype to volume.",
              to: "/resources/product-life-cycle",
              img: svcDiecasting,
            },
          ]}
        />
      </Section>

      <CTABand title="Want a design review on your part?" />
    </>
  );
}
