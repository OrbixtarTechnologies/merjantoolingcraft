import { createFileRoute } from "@tanstack/react-router";
import svcDiecasting from "@/assets/ind-industrial-equipment.jpg";
import { IndustryPage } from "@/components/industry-page";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/industrial-equipment")({
  head: () =>
    seo(
      "Industrial Equipment & Machinery Parts — Merjan Tooling Craft",
      "Machined spares, tooling and replacement components for industrial machinery — including obsolete parts rebuilt from 3D scan data and MRO support.",
      "/industries/industrial-equipment",
    ),
  component: () => <IndustryPage c={CONTENT} />,
});

const CONTENT = {
  eyebrow: "Industries / Industrial Equipment",
  title: "Industrial equipment & machinery",
  lead: "Replacement parts, production tooling and MRO components that keep plant running — including obsolete spares rebuilt from the worn original.",
  image: svcDiecasting,
  imageAlt: "Machined replacement components for industrial machinery",
  intro: [
    "Downtime costs more than the part. We prioritise machinery spares, work from samples when no drawing exists, and keep you informed on realistic recovery times rather than optimistic ones.",
    "Where the original component failed early, we review the material and geometry with you and propose an improvement rather than reproducing a known weakness.",
  ],
  specs: [
    ["Typical tolerance", "±0.02 mm"],
    ["From sample", "Scan → CAD → part"],
    ["Quantities", "1 – 5,000"],
    ["Support", "Repeat spares held on file"],
  ] as [string, string][],
  parts: [
    "Gears, shafts, couplings and bushings",
    "Gearbox and pump housings",
    "Rollers, guides and conveyor hardware",
    "Jigs, fixtures and checking gauges",
    "Press tooling, dies and mould inserts",
    "Obsolete spares reverse engineered from samples",
  ],
  materials: [
    ["Alloy steel 4140 / EN19", "Strength and wear resistance in drive parts", "Hardened & ground"],
    ["Cast iron", "Damping in housings and bases", "As machined"],
    ["Aluminium 6061", "Light guarding, brackets and fixtures", "Anodize"],
    ["Bronze", "Bushings and wear pads", "As machined"],
    ["Delrin / nylon / UHMW", "Quiet, low-friction guides and rollers", "As machined"],
  ],
  faqs: [
    { q: "I have no drawing, only the broken part. Can you help?", a: "Yes — that is routine work for us. We scan the part, rebuild the CAD model and confirm the critical dimensions with you before cutting metal." },
    { q: "Can you improve on the original design?", a: "Where a part has failed repeatedly we will suggest a material or geometry change and let you decide." },
    { q: "Do you keep files for repeat orders?", a: "Yes. Programs, fixtures and inspection data are retained so repeat spares are faster the second time." },
  ],
};
