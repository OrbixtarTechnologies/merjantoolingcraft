import { createFileRoute } from "@tanstack/react-router";
import equipmentHall from "@/assets/equipment-hall.jpg";
import {
  Breadcrumbs,
  CTABand,
  DataTable,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  StatBand,
  breadcrumbSchema,
  seo,
} from "@/components/page-blocks";

const TITLE = "Equipment & Machine List — CNC, EDM & Grinding | Merjan Tooling Craft";
const DESC =
  "Full machine list at Merjan Tooling Craft: 3, 4 and 5-axis CNC machining centres, CNC lathes, wire EDM, surface grinders, die casting cells and CMM inspection.";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    ...seo(TITLE, DESC, "/equipment"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Equipment", path: "/equipment" },
      ]),
    ],
  }),
  component: EquipmentPage,
});

const MILLING = [
  ["Vertical machining centre (3-axis)", "6", "1,200 × 600 × 600 mm", "12,000 rpm, 24-tool ATC"],
  ["Vertical machining centre (4-axis)", "3", "800 × 500 × 500 mm", "Trunnion 4th axis, 12,000 rpm"],
  ["5-axis machining centre", "2", "Ø500 × 400 mm", "Simultaneous 5-axis, 15,000 rpm"],
  ["High-speed graphite / mould mill", "1", "600 × 400 × 350 mm", "24,000 rpm, mould finishing"],
  ["CNC bed mill", "2", "1,500 × 700 mm", "Large plate and fixture work"],
];

const TURNING = [
  ["CNC turning centre", "5", "Ø400 × 750 mm", "12-station turret, tailstock"],
  ["CNC turn-mill (live tooling)", "2", "Ø300 × 600 mm", "C-axis, driven tools"],
  ["Sliding head lathe", "2", "Ø32 mm bar", "High-volume small precision parts"],
  ["Conventional lathe", "4", "Ø600 × 2,000 mm", "Repair and large diameter work"],
];

const EDM_GRIND = [
  ["Wire EDM", "3", "400 × 300 × 250 mm", "±0.005 mm, 4-axis taper"],
  ["Sinker EDM", "2", "350 × 250 × 200 mm", "Fine-finish mould detail"],
  ["Surface grinder", "4", "600 × 300 mm", "±0.002 mm, Ra 0.2 µm"],
  ["Cylindrical grinder", "2", "Ø250 × 600 mm", "OD/ID precision grinding"],
  ["Jig boring machine", "1", "700 × 400 mm", "Positional accuracy 0.003 mm"],
];

const CASTING_SUPPORT = [
  ["High-pressure die casting cell", "4", "160 – 800 tonne", "Aluminium ADC12 / A380, Zamak"],
  ["Injection moulding machine", "3", "80 – 250 tonne", "Engineering thermoplastics"],
  ["Trim press", "2", "40 tonne", "Casting degating and trimming"],
  ["Heat treatment furnace", "2", "900 × 600 × 600 mm", "Hardening and tempering"],
  ["Shot blast cabinet", "2", "—", "Casting and weldment cleaning"],
];

const INSPECTION = [
  ["Coordinate measuring machine (CMM)", "2", "800 × 700 × 600 mm", "Accuracy 2.5 + L/300 µm"],
  ["Optical / vision measuring system", "1", "300 × 200 mm", "Non-contact profile inspection"],
  ["3D scanner (structured light)", "2", "0.02 mm accuracy", "Reverse engineering and validation"],
  ["Profile projector", "2", "Ø300 mm screen", "Thread and profile verification"],
  ["Hardness tester", "2", "Rockwell / Brinell", "Material and heat-treat verification"],
  ["Surface roughness tester", "2", "Ra 0.01 – 10 µm", "Finish validation"],
];

function EquipmentPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Equipment", path: "/equipment" },
        ]}
      />
      <PageHero
        eyebrow="Equipment"
        title="The machines behind every Merjan part"
        lead="A vertically integrated shop floor: milling, turning, EDM, grinding, casting, moulding and metrology under one roof, so a part never leaves our control between operations."
        image={equipmentHall}
        imageAlt="Merjan Tooling Craft machine hall with CNC machining centres"
      />

      <StatBand
        items={[
          { to: 40, suffix: "+", label: "CNC & precision machines" },
          { to: 24, suffix: "/7", label: "Lights-out capable cells" },
          { to: 5, label: "Simultaneous axes" },
          { to: 800, suffix: "T", label: "Max die casting tonnage" },
          { to: 2, suffix: " µm", label: "CMM accuracy class" },
          { to: 100, suffix: "%", label: "In-house metrology" },
        ]}
      />

      <Section eyebrow="Overview" title="Capacity built for both prototypes and production">
        <Prose>
          <p>
            Our equipment list is deliberately broad rather than deep in one process. That means a
            single component can be milled, turned, wire cut, ground, heat treated and inspected
            without leaving the building — removing the queue time, handling risk and finger-pointing
            that come with subcontracted operations.
          </p>
          <p>
            Machines are grouped into prototype cells, running short-notice one-off and low-volume
            work, and production cells running scheduled repeat orders with dedicated fixturing.
            Every machine is on a documented preventive maintenance schedule, and every measuring
            instrument is calibrated against traceable standards.
          </p>
        </Prose>
      </Section>

      <Section muted eyebrow="Milling" title="CNC machining centres">
        <DataTable head={["Machine", "Qty", "Work envelope", "Notes"]} rows={MILLING} />
      </Section>

      <Section eyebrow="Turning" title="CNC lathes and turning centres">
        <DataTable head={["Machine", "Qty", "Capacity", "Notes"]} rows={TURNING} />
      </Section>

      <Section muted eyebrow="EDM & grinding" title="Precision finishing equipment">
        <DataTable head={["Machine", "Qty", "Capacity", "Notes"]} rows={EDM_GRIND} />
      </Section>

      <Section eyebrow="Casting & moulding" title="Production and support equipment">
        <DataTable head={["Machine", "Qty", "Capacity", "Notes"]} rows={CASTING_SUPPORT} />
      </Section>

      <Section muted eyebrow="Metrology" title="Inspection and measurement">
        <DataTable head={["Instrument", "Qty", "Range / accuracy", "Purpose"]} rows={INSPECTION} />
      </Section>

      <Section eyebrow="Software" title="CAD, CAM and inspection software">
        <Prose>
          <p>
            Programming runs on SolidWorks, Autodesk Fusion and Mastercam, with PowerMill for
            complex 5-axis and mould surfaces. Inspection reporting is produced from CMM software
            with first-article layouts mapped directly against balloon-numbered drawings, and 3D scan
            data is processed into parametric CAD for reverse engineering projects.
          </p>
          <p>
            We accept STEP, IGES, X_T, STL, DWG, DXF and native SolidWorks files, plus PDF drawings
            and physical samples where no digital model exists.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        title="Explore further"
        items={[
          { to: "/capabilities", label: "Capabilities" },
          { to: "/factory", label: "Inside the factory" },
          { to: "/quality", label: "Quality & inspection" },
          { to: "/services", label: "All services" },
        ]}
      />

      <CTABand
        title="Have a part that needs this equipment?"
        body="Send the model and we will tell you exactly which machines and processes your component will run through, and what that means for lead time."
      />
    </>
  );
}
