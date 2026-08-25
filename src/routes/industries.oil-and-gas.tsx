import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/ind-oil-gas.jpg";
import { IndustryPage } from "@/components/industry-page";
import { seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/oil-and-gas")({
  head: () =>
    seo(
      "Oil & Gas Machined Components — Merjan Tooling Craft",
      "Precision machined valve, pump and downhole components in stainless, duplex and alloy steel for oil and gas operators — pressure-rated tolerances and full material traceability.",
      "/industries/oil-and-gas",
    ),
  component: () => <IndustryPage c={CONTENT} />,
});

const CONTENT = {
  eyebrow: "Industries / Oil & Gas",
  title: "Oil & gas components",
  lead: "Corrosion-resistant machined parts for valves, pumps, wellhead equipment and process plant — built for pressure, temperature and traceability.",
  image: heroCnc,
  imageAlt: "Machined stainless steel component for oil and gas equipment",
  intro: [
    "Oil and gas work is unforgiving: a leaking seal face or an out-of-round bore takes a whole skid out of service. We machine sealing surfaces, flanges and bores to the concentricity and finish the sealing system was designed around, then verify them before anything ships.",
    "Material traceability matters as much as geometry. We record heat numbers, retain material certificates and issue inspection documentation with every consignment so your own QA package stays complete.",
  ],
  specs: [
    ["Typical tolerance", "±0.01 mm"],
    ["Surface finish", "Ra 0.4 – 3.2 µm"],
    ["Materials", "SS316, duplex, alloy steel"],
    ["Documentation", "Mill certs + FAI"],
  ] as [string, string][],
  parts: [
    "Valve bodies, bonnets and seat rings",
    "Pump housings, impellers and wear rings",
    "Wellhead adapters and flanged connectors",
    "Downhole tool bodies and mandrels",
    "Sealing glands, retainers and bushings",
    "Obsolete spares rebuilt from 3D scan data",
  ],
  materials: [
    ["Stainless 316 / 316L", "Corrosion resistance in sour and marine service", "Bead blast or passivated"],
    ["Duplex 2205", "High strength with chloride pitting resistance", "As machined"],
    ["Alloy steel 4140", "Strength for pressure-containing bodies", "Black oxide or plated"],
    ["Inconel / nickel alloys", "High temperature and corrosive media", "As machined"],
    ["Bronze / brass", "Bearing and wear surfaces", "As machined"],
  ],
  faqs: [
    { q: "Can you supply material certificates?", a: "Yes — EN 10204 style mill certificates are retained and supplied with the parts, along with our own dimensional inspection report." },
    { q: "Do you machine sealing faces to a specified Ra?", a: "Yes. Call out the required roughness on the drawing and we will finish and verify to it." },
    { q: "Can you reproduce an obsolete spare?", a: "Send us the worn part. We 3D scan it, rebuild the CAD, agree the corrections with you and machine the replacement." },
  ],
};
