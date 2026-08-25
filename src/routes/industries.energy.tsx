import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/ind-energy.jpg";
import { IndustryPage } from "@/components/industry-page";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/energy")({
  head: () =>
    seo(
      "Energy & Power Generation Components — Merjan Tooling Craft",
      "Machined and cast components for power generation, transmission and renewable energy equipment — turbine hardware, enclosures, heat sinks and switchgear parts.",
      "/industries/energy",
    ),
  component: () => <IndustryPage c={CONTENT} />,
});

const CONTENT = {
  eyebrow: "Industries / Energy & Power",
  title: "Energy & power generation",
  lead: "Components for generation, transmission and renewable equipment — machined, cast and finished to survive heat, vibration and outdoor service.",
  image: partsGrid,
  imageAlt: "Machined components for power generation equipment",
  intro: [
    "Power equipment runs continuously, so parts are judged on how they behave after thousands of hours — not on how they measure on day one. We select materials and finishes with thermal cycling, vibration and outdoor exposure in mind.",
    "Our die casting and machining capability sit side by side, which suits energy hardware: cast the enclosure or heat sink, then finish the mating and sealing faces on the same site with consistent datums.",
  ],
  specs: [
    ["Typical tolerance", "±0.02 mm"],
    ["Processes", "Machining + die casting"],
    ["Finishes", "Anodize, powder coat"],
    ["Batch sizes", "1 – 5,000"],
  ] as [string, string][],
  parts: [
    "Turbine and generator ancillary brackets",
    "Switchgear and control enclosures",
    "Cast aluminium heat sinks for power electronics",
    "Busbar supports and insulator hardware",
    "Solar mounting and tracker components",
    "Gearbox housings and shaft components",
  ],
  materials: [
    ["Aluminium 6061 / ADC12", "Light, thermally conductive housings", "Anodize or powder coat"],
    ["Copper", "Current-carrying and thermal parts", "Bright machined"],
    ["Stainless 304 / 316", "Outdoor and corrosive exposure", "Bead blast"],
    ["Mild / alloy steel", "Structural brackets and frames", "Galvanized or coated"],
    ["Zamak", "Detailed cast fittings and covers", "Chromate or paint"],
  ],
  faqs: [
    { q: "Can you cast and machine the same part?", a: "Yes — we design and build the die, cast the part and complete all finish machining and finishing in-house." },
    { q: "Do you supply outdoor-rated finishes?", a: "We supply anodizing, powder coating and plating suited to outdoor and marine exposure." },
    { q: "Can you support long-term supply agreements?", a: "Yes. Once a tool and inspection plan is established, we schedule repeat batches against your forecast." },
  ],
};
