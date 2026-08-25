import { createFileRoute } from "@tanstack/react-router";
import svcLed from "@/assets/ind-electronics.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/consumer-electronics")({
  head: () =>
    seo(
      "Consumer Electronics Enclosures & Heat Sinks | MTC",
      "Die cast and machined enclosures, heat sinks, brackets and cosmetic finishes for consumer electronics products, made by Merjan Tooling Craft.",
      "/industries/consumer-electronics",
    ),
  component: Electronics,
});

function Electronics() {
  return (
    <>
      <PageHero
        eyebrow="Industries / Consumer Electronics"
        title="Consumer electronics & enclosures"
        lead="Thin-wall die cast housings, thermal management and cosmetic finishes for products that have to look as good as they perform."
        image={svcLed}
        imageAlt="Die cast aluminium electronics enclosure with heat sink fins"
      />

      <Section title="Capability focus">
        <SpecTable
          rows={[
            ["Housings", "Aluminium & zinc die casting"],
            ["Thermal", "Integrated heat sink design"],
            ["Finishes", "Anodise, powder coat, polish"],
            ["Volumes", "Pilot run to high volume"],
          ]}
        />
      </Section>

      <Section muted title="Components we make">
        <Bullets
          items={[
            "Die cast product enclosures and covers",
            "LED and driver heat sinks",
            "Machined bezels, frames and brackets",
            "Connector plates and internal chassis parts",
            "Cosmetic finished exterior components",
            "Pilot tooling for launch volumes",
          ]}
        />
      </Section>

      <Section title="From pilot to volume">
        <Prose>
          <p>
            Electronics launches move quickly. We machine the first enclosures so the electronics
            team can build and test, then cut a die cast tool from the same validated model when the
            design freezes — reusing all the machining fixtures for the secondary operations.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
