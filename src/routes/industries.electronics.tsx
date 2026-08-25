import { createFileRoute } from "@tanstack/react-router";
import svcLed from "@/assets/ind-electronics.jpg";
import { IndustryPage } from "@/components/industry-page";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/electronics")({
  head: () =>
    seo(
      "Electronics Enclosures & Heat Sinks — Merjan Tooling Craft",
      "Die cast and machined enclosures, heat sinks, shielding and connector hardware for electronics manufacturers — with cosmetic finishing and assembly.",
      "/industries/electronics",
    ),
  component: () => <IndustryPage c={CONTENT} />,
});

const CONTENT = {
  eyebrow: "Industries / Electronics",
  title: "Electronics & electrical hardware",
  lead: "Thermally efficient, well-sealed housings for electronic assemblies — cast, machined, finished and assembled by one supplier.",
  image: svcLed,
  imageAlt: "Cast aluminium electronics enclosure and heat sink",
  intro: [
    "Electronics hardware is judged on heat, sealing and appearance. Our die casting produces the fin geometry and wall sections a heat sink needs; our machining then delivers the flat sealing faces, threaded bosses and connector cut-outs.",
    "Because we also manufacture LED fixtures, we understand the whole chain from thermal path to gasket groove to final cosmetic finish.",
  ],
  specs: [
    ["Typical tolerance", "±0.02 mm"],
    ["Processes", "Die casting + CNC"],
    ["Finishes", "Anodize, powder coat, chromate"],
    ["Assembly", "Inserts, gaskets, hardware"],
  ] as [string, string][],
  parts: [
    "Die cast enclosures and back boxes",
    "Extruded and cast heat sinks",
    "EMI shielding frames and covers",
    "Connector housings and cable glands",
    "Mounting brackets and DIN rail hardware",
    "LED fixture bodies and lens retainers",
  ],
  materials: [
    ["ADC12 / A380 aluminium", "Castable, thermally conductive housings", "Powder coat or chromate"],
    ["Aluminium 6061", "Machined lids, plates and heat spreaders", "Anodize"],
    ["Zamak 3 / 5", "Fine detail, thin-wall cast parts", "Plated or painted"],
    ["Copper", "High conductivity thermal spreaders", "Bright machined"],
    ["Polycarbonate", "Lenses, windows and insulating parts", "Polished"],
  ],
  faqs: [
    { q: "Can you supply IP-rated sealed enclosures?", a: "We machine gasket grooves and sealing faces to your specification; sealing performance is validated jointly with your gasket and fastener selection." },
    { q: "Do you fit threaded inserts and hardware?", a: "Yes — inserts, studs, gaskets and light sub-assembly are handled before shipment." },
    { q: "Do you offer cosmetic finishes?", a: "Anodizing, powder coating, chromate and painting are available with agreed colour and gloss references." },
  ],
};
