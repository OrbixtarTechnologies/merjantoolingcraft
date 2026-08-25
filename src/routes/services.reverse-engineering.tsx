import { createFileRoute } from "@tanstack/react-router";
import svcScanning from "@/assets/svc-reverse-engineering.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, Steps, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/reverse-engineering")({
  head: () =>
    seo(
      "Reverse Engineering & 3D Scanning Services | Merjan Tooling Craft",
      "Merjan Tooling Craft converts physical parts into accurate 3D CAD models using advanced 3D scanning — ideal for obsolete spares, worn tooling and design improvement.",
      "/services/reverse-engineering",
    ),
  component: ReverseEngineering,
});

function ReverseEngineering() {
  return (
    <>
      <PageHero
        eyebrow="Reverse Engineering & 3D Scanning"
        title="Turn an existing part into a manufacturable model"
        lead="Advanced 3D scanning for precise measurement of existing components, converted into accurate CAD you can machine, cast and archive."
        image={svcScanning}
        imageAlt="3D scanner capturing the geometry of a metal component"
      />

      <Section title="Scanning at a glance">
        <SpecTable
          rows={[
            ["Inputs", "Physical part or legacy drawing"],
            ["Output", "STEP / IGES / native CAD"],
            ["Use cases", "Obsolete & legacy spares"],
            ["Extras", "Dimensional inspection reports"],
          ]}
        />
      </Section>

      <Section muted eyebrow="Process" title="Scan to CAD to component">
        <Steps
          items={[
            { n: "01", t: "Capture", d: "The part is scanned to a dense point cloud and meshed." },
            { n: "02", t: "Model", d: "Clean parametric CAD is rebuilt from the mesh, not just wrapped around it." },
            { n: "03", t: "Verify", d: "The model is compared back to the scan with a deviation report." },
            { n: "04", t: "Manufacture", d: "The verified model drives machining or die design directly." },
          ]}
        />
      </Section>

      <Section title="When reverse engineering pays">
        <Bullets
          items={[
            "The original supplier or drawing no longer exists",
            "A worn part must be reproduced to its as-designed condition",
            "Legacy tooling needs a digital record before it fails",
            "A component needs improving rather than copying",
            "An assembly must be measured for fit and clearance",
            "Inspection evidence is required for an existing part",
          ]}
        />
      </Section>

      <Section muted title="More than a copy">
        <Prose>
          <p>
            Scanning tells you what a part is today, including wear and distortion. Our engineers
            interpret that data — restoring intended geometry, cleaning up datums and correcting
            features that were causing the failure in the first place.
          </p>
        </Prose>
      </Section>

      <CTABand title="Have a part with no drawing?" body="Send us the component and we will return a verified CAD model and a route to manufacture." />
    </>
  );
}
