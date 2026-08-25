import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/ind-defence.jpg";
import { IndustryPage } from "@/components/industry-page";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/defence")({
  head: () =>
    seo(
      "Defence & Security Machined Components — Merjan Tooling Craft",
      "Controlled, documented precision machining for defence and security equipment — ruggedised housings, mounts, optical hardware and tooling with full traceability.",
      "/industries/defence",
    ),
  component: () => <IndustryPage c={CONTENT} />,
});

const CONTENT = {
  eyebrow: "Industries / Defence",
  title: "Defence & security equipment",
  lead: "Ruggedised machined hardware produced under controlled documentation, confidentiality and traceability requirements.",
  image: partsGrid,
  imageAlt: "Precision machined ruggedised hardware components",
  intro: [
    "Defence programmes demand disciplined documentation as much as accurate metal. We work to controlled drawing revisions, retain traceability from material batch to finished part, and treat every enquiry as confidential.",
    "Work in this sector is accepted subject to customer-supplied specifications and applicable regulatory approvals — talk to us about your programme requirements before release of drawings.",
  ],
  specs: [
    ["Typical tolerance", "±0.01 mm"],
    ["Traceability", "Batch to finished part"],
    ["Documentation", "FAI + inspection reports"],
    ["Confidentiality", "NDA on request"],
  ] as [string, string][],
  parts: [
    "Ruggedised electronic housings and covers",
    "Optical and sensor mounting hardware",
    "Machined brackets, adapters and rails",
    "Precision shafts, pins and bushings",
    "Ground support and test fixtures",
    "Production tooling and inspection gauges",
  ],
  materials: [
    ["Aluminium 6061 / 7075", "Light, strong structural hardware", "Hard anodize"],
    ["Stainless 316 / 17-4PH", "Corrosion resistance and high strength", "Passivated"],
    ["Alloy steel 4140", "Load-bearing mounts and pins", "Black oxide"],
    ["Titanium Grade 5", "Maximum strength-to-weight", "As machined"],
    ["Delrin / PEEK", "Insulating and low-friction details", "As machined"],
  ],
  faqs: [
    { q: "Will you sign a non-disclosure agreement?", a: "Yes. We routinely work under NDA and restrict drawing access to the engineers on the job." },
    { q: "Can you supply first article inspection reports?", a: "Yes — FAI, dimensional reports and material certificates are supplied where the programme requires them." },
    { q: "Do you accept controlled or export-restricted work?", a: "Only where the applicable approvals and end-user documentation are in place. Contact us to discuss the specifics of your programme." },
  ],
};
