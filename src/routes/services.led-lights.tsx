import { createFileRoute } from "@tanstack/react-router";
import svcLed from "@/assets/svc-led-lights.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/led-lights")({
  head: () =>
    seo(
      "Industrial LED Lights & Custom Fixtures | Merjan Tooling Craft",
      "Merjan Tooling Craft designs and supplies LED floodlights, linear fittings and panels built on our own die cast aluminium housings and machined brackets.",
      "/services/led-lights",
    ),
  component: LedLights,
});

function LedLights() {
  return (
    <>
      <PageHero
        eyebrow="LED Lights"
        title="LED lighting, engineered around the hardware"
        lead="One supplier for the fitting and the metalwork behind it — housings, heat sinks and brackets made in the same workshop."
        image={svcLed}
        imageAlt="Industrial LED floodlight and linear luminaire"
      />

      <Section title="Lighting at a glance">
        <SpecTable
          rows={[
            ["Products", "Floodlights, linear, panels"],
            ["Housings", "Die cast aluminium"],
            ["Thermal", "Integrated heat sink design"],
            ["Support", "Custom fixture development"],
          ]}
        />
      </Section>

      <Section muted title="Why buy lighting from a toolmaker">
        <Prose>
          <p>
            LED performance and life are limited by heat, and heat is a mechanical problem. Because
            we cast and machine the housing ourselves, the heat sink is designed with the fitting
            rather than bought in and adapted to it.
          </p>
          <p>
            That also means custom variants — different mounting, different lengths, different IP
            arrangements — are a tooling change we can make, not a request we have to pass on.
          </p>
        </Prose>
      </Section>

      <Section title="Applications">
        <Bullets
          items={[
            "Factory and warehouse high-bay lighting",
            "Site and perimeter floodlighting",
            "Machine and workstation task lighting",
            "Linear fittings for corridors and production lines",
            "Custom OEM fixtures for equipment builders",
            "Replacement housings for existing luminaire ranges",
          ]}
        />
      </Section>

      <CTABand title="Need a custom LED fixture?" body="Tell us the output, mounting and environment and we will develop the fitting around it." />
    </>
  );
}
