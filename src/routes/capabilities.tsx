import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/capabilities-shopfloor.jpg";
import {
  Bullets,
  CTABand,
  DataTable,
  PageHero,
  Prose,
  Section,
  SpecTable,
  seo,
} from "@/components/page-blocks";

export const Route = createFileRoute("/capabilities")({
  head: () =>
    seo(
      "Manufacturing Capabilities & Machine List — Merjan Tooling Craft",
      "Full in-house capability list: CNC milling and turning, EDM and wire cut, grinding, die casting, anodizing, powder coating, heat treatment, welding, assembly and CMM inspection.",
      "/capabilities",
    ),
  component: Capabilities,
});

function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Manufacturing capabilities"
        lead="Machining, casting, finishing, assembly and inspection under one roof — so a part never waits on a third party mid-route."
        image={partsGrid}
        imageAlt="Range of precision manufacturing capabilities at Merjan Tooling Craft"
      />

      <Section title="Capability at a glance">
        <SpecTable
          rows={[
            ["Max part size (milling)", "1,000 × 550 × 550 mm"],
            ["Max turned diameter", "Ø 400 mm"],
            ["Standard tolerance", "±0.02 mm"],
            ["Critical tolerance", "±0.005 mm"],
          ]}
        />
      </Section>

      <Section muted title="Processes we run in-house">
        <DataTable
          head={["Process", "What it delivers", "Typical use"]}
          rows={[
            ["CNC Milling", "3, 4 and 5-axis prismatic machining", "Housings, plates, manifolds, inserts"],
            ["CNC Turning", "Turning with live tooling and sub-spindle work", "Shafts, bushings, fittings"],
            ["EDM (Sinker)", "Sharp internal corners and hardened detail", "Die and mould cavities"],
            ["Wire Cut EDM", "Fine, burr-free profiles in hardened steel", "Punches, dies, gauges"],
            ["Surface & Cylindrical Grinding", "Flatness, parallelism and fine finishes", "Hardened plates, shafts"],
            ["High-Pressure Die Casting", "Repeatable aluminium and zinc castings", "Housings, heat sinks, covers"],
            ["Heat Treatment", "Hardening, tempering and stress relief", "Tooling and drive components"],
            ["Welding & Fabrication", "TIG/MIG joining and sheet fabrication", "Frames, guards, weldments"],
            ["Sand Blasting", "Uniform matte texture and cleanup", "Pre-finish preparation"],
            ["Anodizing", "Hard and decorative aluminium finishes", "Enclosures, structural parts"],
            ["Powder Coating", "Durable coloured outdoor finish", "Enclosures, brackets"],
            ["Assembly & Packaging", "Inserts, hardware, kitting, export packing", "Finished sub-assemblies"],
          ]}
        />
      </Section>

      <Section title="Inspection & metrology">
        <Bullets
          items={[
            "CMM dimensional inspection with printed reports",
            "First Article Inspection (FAI) on new and revised parts",
            "Height gauges, micrometers and bore gauges for in-process checks",
            "Surface roughness measurement to specified Ra",
            "Hardness verification on heat-treated components",
            "Thread and profile gauging",
            "3D scan comparison against nominal CAD",
            "Material certificate retention and traceability",
          ]}
        />
      </Section>

      <Section muted title="File formats we accept">
        <Prose>
          <p>
            Send STEP, IGES, STL, DWG, DXF, native SolidWorks files or a dimensioned PDF drawing. If
            you only have a physical component, we will 3D scan it and rebuild the CAD model before
            manufacture.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
