import { createFileRoute } from "@tanstack/react-router";
import svcScanning from "@/assets/ind-robotics.jpg";
import { IndustryPage } from "@/components/industry-page";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/robotics")({
  head: () =>
    seo(
      "Robotics & Automation Machined Parts — Merjan Tooling Craft",
      "Lightweight, precise machined components for robotics and automation — end effectors, arm structures, gearbox housings, mounting plates and custom tooling.",
      "/industries/robotics",
    ),
  component: () => <IndustryPage c={CONTENT} />,
});

const CONTENT = {
  eyebrow: "Industries / Robotics & Automation",
  title: "Robotics & automation",
  lead: "Light, stiff, accurately located components for robot arms, end effectors and automated cells — prototyped fast and repeated reliably.",
  image: svcScanning,
  imageAlt: "Precision machined aluminium components for robotics",
  intro: [
    "Robotics designs iterate quickly. We machine prototype parts from your CAD without tooling, then hold the same programs and fixtures ready for when the design freezes and volumes start.",
    "Mass and stiffness drive performance in moving assemblies, so we work with you on pocketing, wall thickness and material choice rather than simply cutting what is drawn.",
  ],
  specs: [
    ["Typical tolerance", "±0.01 mm"],
    ["Capability", "5-axis milling"],
    ["Materials", "6061, 7075, steel, POM"],
    ["Prototype lead time", "5 – 10 days"],
  ] as [string, string][],
  parts: [
    "End effector bodies, jaws and grippers",
    "Robot arm links and structural plates",
    "Gearbox and actuator housings",
    "Precision mounting plates and adapters",
    "Sensor brackets and cable management hardware",
    "Fixtures and workholding for automated cells",
  ],
  materials: [
    ["Aluminium 6061", "General structure with good machinability", "Anodize"],
    ["Aluminium 7075", "High strength-to-weight moving parts", "Hard anodize"],
    ["Stainless 303 / 304", "Shafts, pins and wear-resistant details", "Bead blast"],
    ["Delrin (POM)", "Quiet, low-friction guides and bearings", "As machined"],
    ["PEEK", "High load, chemical or temperature exposure", "As machined"],
  ],
  faqs: [
    { q: "Can you machine one-off prototype parts?", a: "Yes — single parts are welcome and typically ship within 5–10 working days." },
    { q: "Do you hold tight flatness and parallelism?", a: "Yes, where called out on the drawing. Tell us which faces are datums and we will fixture accordingly." },
    { q: "Can you scale the same part into production?", a: "The prototype program becomes the production program, so repeat batches keep the same dimensions and finish." },
  ],
};
