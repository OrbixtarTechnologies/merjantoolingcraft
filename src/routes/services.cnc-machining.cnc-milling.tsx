import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/svc-milling.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/cnc-machining/cnc-milling")({
  head: () =>
    seo(
      "CNC Milling Services — 3-Axis & 5-Axis | Merjan Tooling Craft",
      "CNC milling from Merjan Tooling Craft: 3-axis and simultaneous 5-axis machining of aluminium, steel, brass and plastics with tolerances to ±0.02 mm.",
      "/services/cnc-machining/cnc-milling",
    ),
  component: Milling,
});

function Milling() {
  return (
    <>
      <PageHero
        eyebrow="CNC Machining / Milling"
        title="CNC milling"
        lead="Expert milling for precision components, held to high-quality standards with meticulous attention to detail."
        image={heroCnc}
        imageAlt="Milling cutter machining a precision aluminium part"
      />

      <Section title="Milling specifications">
        <SpecTable
          rows={[
            ["Capability", "3-axis & 5-axis"],
            ["Tolerance", "±0.02 mm achievable"],
            ["Materials", "Aluminium, steel, brass, plastics"],
            ["Quantities", "1 – 5,000"],
          ]}
        />
      </Section>

      <Section muted title="What we mill">
        <Prose>
          <p>
            Milling removes material from a fixed block with rotating cutters. It suits prismatic
            geometry: housings, plates, manifolds, brackets, jigs, fixtures and mould or die
            inserts. Our 5-axis capability lets complex parts be finished in fewer set-ups, which
            protects accuracy between features and shortens lead time.
          </p>
          <p>
            Where a part combines milled and turned features, we plan the full route up front so
            datums stay consistent across machines.
          </p>
        </Prose>
      </Section>

      <Section title="Design guidance for milled parts">
        <Bullets
          items={[
            "Internal corners need a radius — use the largest your design allows",
            "Keep pocket depth under 4× the tool diameter where possible",
            "Minimum wall thickness: 0.8 mm in metal, 1.5 mm in plastic",
            "Avoid deep, narrow slots that require long, fragile tooling",
            "Call out only the tolerances that matter functionally",
            "Specify thread type and depth clearly on the drawing",
          ]}
        />
      </Section>

      <CTABand title="Ready to mill your part?" />
    </>
  );
}
