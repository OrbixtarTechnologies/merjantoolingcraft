import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/parts-grid.jpg";
import indAerospace from "@/assets/ind-aerospace.jpg";
import indAutomotive from "@/assets/ind-automotive.jpg";
import indDefence from "@/assets/ind-defence.jpg";
import indElectronics from "@/assets/ind-electronics.jpg";
import indEnergy from "@/assets/ind-energy.jpg";
import indEquipment from "@/assets/ind-industrial-equipment.jpg";
import indMedical from "@/assets/ind-medical.jpg";
import indOilGas from "@/assets/ind-oil-gas.jpg";
import indRobotics from "@/assets/ind-robotics.jpg";
import svcLedLights from "@/assets/svc-led-lights.jpg";
import { CTABand, CardGrid, PageHero, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/")({
  head: () =>
    seo(
      "Industries We Serve — Merjan Tooling Craft",
      "Merjan Tooling Craft manufactures precision machined and die cast components for automotive, aerospace, medical, electronics and industrial equipment customers.",
      "/industries",
    ),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Precision parts for demanding sectors"
        lead="Different industries stress different things — tolerance, traceability, cost per part or speed. We adapt the process to the priority."
        image={partsGrid}
        imageAlt="Range of precision machined and cast components"
      />

      <Section title="Sectors we work with">
        <CardGrid
          items={[
            {
              title: "Automotive",
              tag: "Volume & tooling",
              body: "Engine and chassis components, fixtures, die cast housings and motorsport one-offs.",
              to: "/industries/automotive",
              img: indAutomotive,
            },
            {
              title: "Aerospace",
              tag: "Traceability",
              body: "Tight-tolerance machined parts, ground support hardware and inspection documentation.",
              to: "/industries/aerospace",
              img: indAerospace,
            },
            {
              title: "Medical",
              tag: "Surface & finish",
              body: "Stainless instrument components, device housings and cleanable machined finishes.",
              to: "/industries/medical",
              img: indMedical,
            },
            {
              title: "Consumer Electronics",
              tag: "Enclosures",
              body: "Cast and machined enclosures, heat sinks, brackets and cosmetic finishing.",
              to: "/industries/consumer-electronics",
              img: indElectronics,
            },
            {
              title: "Industrial Equipment",
              tag: "Spares & MRO",
              body: "Replacement parts, obsolete spares reverse engineered, and maintenance tooling.",
              to: "/industries/industrial-equipment",
              img: indEquipment,
            },
            {
              title: "Oil & Gas",
              tag: "Pressure & traceability",
              body: "Valve, pump and wellhead components in stainless, duplex and alloy steel.",
              to: "/industries/oil-and-gas",
              img: indOilGas,
            },
            {
              title: "Energy & Power",
              tag: "Thermal & outdoor",
              body: "Switchgear enclosures, heat sinks, busbar hardware and generator ancillaries.",
              to: "/industries/energy",
              img: indEnergy,
            },
            {
              title: "Robotics & Automation",
              tag: "Light & precise",
              body: "End effectors, arm structures, actuator housings and automation fixtures.",
              to: "/industries/robotics",
              img: indRobotics,
            },
            {
              title: "Electronics",
              tag: "Housings & heat sinks",
              body: "Die cast and machined enclosures, shielding, connectors and thermal parts.",
              to: "/industries/electronics",
              img: indElectronics,
            },
            {
              title: "Defence",
              tag: "Controlled & documented",
              body: "Ruggedised hardware and mounts produced under NDA with full traceability.",
              to: "/industries/defence",
              img: indDefence,
            },
            {
              title: "Lighting & OEM",
              tag: "Full assembly",
              body: "LED fixtures with their housings, heat sinks and mounting hardware from one supplier.",
              to: "/services/led-lights",
              img: svcLedLights,
            },
          ]}
        />
      </Section>

      <CTABand />
    </>
  );
}
