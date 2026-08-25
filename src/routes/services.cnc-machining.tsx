import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/svc-milling.jpg";
import svcMolding from "@/assets/svc-turning.jpg";
import {
  Bullets,
  CTABand,
  CardGrid,
  PageHero,
  Section,
  SpecTable,
  Steps,
} from "@/components/page-blocks";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/cnc-machining")({
  head: () =>
    seo(
      "CNC Machining Services — Milling & Turning | Merjan Tooling Craft",
      "Precision CNC machining from Merjan Tooling Craft: 3-axis and 5-axis milling, live-tool turning, tolerances to ±0.02 mm in aluminium, steel, brass and engineering plastics.",
      "/services/cnc-machining",
    ),
  component: CncMachining,
});

function CncMachining() {
  return (
    <>
      <PageHero
        eyebrow="CNC Machining"
        title="Precision CNC machining for prototypes and production"
        lead="Subtractive manufacturing from solid billet — accurate, repeatable and available from a single part to thousands."
        image={heroCnc}
        imageAlt="5-axis CNC machining centre cutting an aluminium component"
      />

      <Section title="Machining at a glance">
        <SpecTable
          rows={[
            ["Processes", "Milling & turning"],
            ["Tolerance", "±0.02 mm achievable"],
            ["Max envelope", "800 × 500 × 400 mm"],
            ["Quantities", "1 – 10,000"],
          ]}
        />
      </Section>

      <Section muted eyebrow="Choose a process" title="Milling and turning">
        <CardGrid
          cols={2}
          items={[
            {
              title: "CNC Milling",
              tag: "3-axis & 5-axis",
              body: "Prismatic parts, housings, plates, manifolds and mould inserts cut on 3-axis and simultaneous 5-axis centres.",
              to: "/services/cnc-machining/cnc-milling",
              img: heroCnc,
            },
            {
              title: "CNC Turning",
              tag: "Live tooling",
              body: "Shafts, bushings, threaded fittings and precision inserts turned with live tooling and bar feed.",
              to: "/services/cnc-machining/cnc-turning",
              img: svcMolding,
            },
          ]}
        />
      </Section>

      <Section eyebrow="How it works" title="From file to finished part">
        <Steps
          items={[
            { n: "01", t: "Upload your CAD", d: "STEP, IGES or native files — or a physical sample for scanning." },
            { n: "02", t: "Design review", d: "We flag features that add cost and suggest tooling-friendly alternatives." },
            { n: "03", t: "Programming & cutting", d: "Toolpaths written in-house, fixtures made in-house, parts cut in-house." },
            { n: "04", t: "Inspect & ship", d: "Dimensional verification against your drawing before dispatch." },
          ]}
        />
      </Section>

      <Section muted eyebrow="Why machining" title="When CNC is the right choice">
        <Bullets
          items={[
            "Functional prototypes needed in production material",
            "Low volumes where tooling cost cannot be justified",
            "Tight tolerances and fine surface finishes",
            "Metal parts requiring full mechanical properties",
            "Bridge production while a casting tool is being built",
            "Legacy or obsolete spares reproduced from a sample",
          ]}
        />
      </Section>

      <CTABand />
    </>
  );
}
