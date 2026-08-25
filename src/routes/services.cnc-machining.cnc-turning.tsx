import { createFileRoute } from "@tanstack/react-router";
import svcMolding from "@/assets/svc-turning.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/cnc-machining/cnc-turning")({
  head: () =>
    seo(
      "CNC Turning Services — Live Tooling & Bar Feed | Merjan Tooling Craft",
      "CNC turning from Merjan Tooling Craft for shafts, bushings, threaded fittings and precision inserts in brass, stainless steel and alloy steel.",
      "/services/cnc-machining/cnc-turning",
    ),
  component: Turning,
});

function Turning() {
  return (
    <>
      <PageHero
        eyebrow="CNC Machining / Turning"
        title="CNC turning"
        lead="Specialised turning ensuring reliable performance and customised engineering for complex rotational components."
        image={svcMolding}
        imageAlt="CNC lathe turning a metal shaft"
      />

      <Section title="Turning specifications">
        <SpecTable
          rows={[
            ["Capability", "Live tooling & bar feed"],
            ["Concentricity", "Tight-tolerance control"],
            ["Materials", "Brass, stainless, alloy steel"],
            ["Quantities", "1 – 10,000"],
          ]}
        />
      </Section>

      <Section muted title="What we turn">
        <Prose>
          <p>
            Turning rotates the workpiece against a fixed cutting tool, producing cylindrical
            geometry efficiently and with excellent concentricity. Live tooling adds cross-drilling,
            slotting and flats, so many parts leave the lathe complete.
          </p>
          <p>
            Typical work includes shafts, spindles, bushings, adapters, threaded fittings, valve
            bodies and precision inserts for die cast tooling.
          </p>
        </Prose>
      </Section>

      <Section title="Design guidance for turned parts">
        <Bullets
          items={[
            "Keep length-to-diameter ratio below 8:1 to limit deflection",
            "Add undercuts where a thread or shoulder must run out cleanly",
            "Standard thread forms cost less than custom pitches",
            "Specify concentricity only where assembly requires it",
            "Allow a small chamfer on every entry edge",
            "Group tight tolerances on features cut in one set-up",
          ]}
        />
      </Section>

      <CTABand title="Need turned components?" />
    </>
  );
}
