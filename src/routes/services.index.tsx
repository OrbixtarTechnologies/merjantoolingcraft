import { createFileRoute, Link } from "@tanstack/react-router";
import heroCnc from "@/assets/svc-milling.jpg";
import svcMolding from "@/assets/svc-production.jpg";
import svcScanning from "@/assets/svc-reverse-engineering.jpg";
import svcDiecasting from "@/assets/svc-diecast-process.jpg";
import svcLed from "@/assets/svc-led-lights.jpg";
import { CTABand, CardGrid, PageHero, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo(
      "Manufacturing Services — CNC Machining & Die Casting | MTC",
      "Merjan Tooling Craft services: CNC machining (milling and turning), high-pressure die casting, reverse engineering with 3D scanning, LED lighting and on-demand production.",
      "/services",
    ),
  component: ServicesIndex,
});

const SERVICES = [
  {
    title: "CNC Machining",
    tag: "Milling & turning",
    body: "3-axis and 5-axis milling plus precision turning for prototypes and production components in metal and plastic.",
    to: "/services/cnc-machining",
    img: heroCnc,
  },
  {
    title: "High-Pressure Die Casting",
    tag: "Tool & cast",
    body: "Die design, tool manufacture and aluminium or zinc casting, with trimming, machining and finishing in-house.",
    to: "/services/die-casting",
    img: svcDiecasting,
  },
  {
    title: "Reverse Engineering & 3D Scanning",
    tag: "Scan to CAD",
    body: "Accurate measurement of existing parts converted into production-ready 3D CAD models and drawings.",
    to: "/services/reverse-engineering",
    img: svcScanning,
  },
  {
    title: "LED Lights",
    tag: "Design & supply",
    body: "Industrial LED fittings built on our own die cast housings, heat sinks and machined brackets.",
    to: "/services/led-lights",
    img: svcLed,
  },
  {
    title: "On-Demand Production",
    tag: "Volume parts",
    body: "Repeat batches with locked-down process controls, inspection records and scheduled delivery.",
    to: "/services/production",
    img: svcMolding,
  },
  {
    title: "Quality & Inspection",
    tag: "Verification",
    body: "Dimensional verification, first article inspection and documented reporting on every programme.",
    to: "/quality",
    img: heroCnc,
  },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Manufacturing services under one roof"
        lead="A component can be scanned, designed, machined, cast, finished and inspected without ever changing supplier."
        image={heroCnc}
        imageAlt="CNC machining centre cutting a metal component"
      />

      <Section eyebrow="Our expertise" title="Choose a service">
        <CardGrid items={SERVICES} />
      </Section>

      <Section muted title="Not sure which process suits your part?">
        <p className="max-w-2xl text-muted-foreground">
          Send the drawing, model or sample and we will recommend the most economical route — and
          tell you honestly where the crossover between machining and casting sits.
        </p>
        <Link to="/quote" className="btn-primary mt-6">
          Talk to our team
        </Link>
      </Section>

      <CTABand />
    </>
  );
}
