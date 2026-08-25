import { createFileRoute } from "@tanstack/react-router";
import factoryAerial from "@/assets/factory-aerial.jpg";
import shopfloor from "@/assets/capabilities-shopfloor.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import equipmentHall from "@/assets/equipment-hall.jpg";
import diecast from "@/assets/svc-diecast-process.jpg";
import toolroom from "@/assets/svc-tool-and-die.jpg";
import {
  Breadcrumbs,
  CTABand,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  SpecTable,
  Steps,
  breadcrumbSchema,
  seo,
} from "@/components/page-blocks";
import { Reveal } from "@/components/motion-kit";

const TITLE = "Our Factory — Facility Tour | Merjan Tooling Craft";
const DESC =
  "Take a tour of the Merjan Tooling Craft manufacturing facility in Lahore: tool room, CNC machining hall, die casting cells, finishing and climate-controlled metrology lab.";

export const Route = createFileRoute("/factory")({
  head: () => ({
    ...seo(TITLE, DESC, "/factory"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Factory", path: "/factory" },
      ]),
    ],
  }),
  component: FactoryPage,
});

const AREAS = [
  {
    img: toolroom,
    title: "Tool room",
    body: "Where dies, moulds, jigs and fixtures are built. Skilled toolmakers work alongside wire EDM, sinker EDM and surface grinding to hold the tolerances a production tool needs to survive.",
  },
  {
    img: equipmentHall,
    title: "CNC machining hall",
    body: "Milling and turning cells running 3, 4 and 5-axis work. Prototype cells handle short-notice one-offs while production cells run scheduled repeat orders on dedicated fixtures.",
  },
  {
    img: diecast,
    title: "Die casting bay",
    body: "160 to 800 tonne high-pressure die casting cells with melting, holding, trimming and shot blasting adjacent, so castings move straight into finish machining.",
  },
  {
    img: qualityInspection,
    title: "Metrology lab",
    body: "Climate-controlled inspection room housing CMMs, optical measurement, 3D scanners and hardness testing, with calibration records traceable to national standards.",
  },
  {
    img: shopfloor,
    title: "Finishing & assembly",
    body: "Deburring, polishing, plating coordination, painting and sub-assembly, followed by protective packaging designed for international freight.",
  },
  {
    img: factoryAerial,
    title: "Logistics & despatch",
    body: "Goods-in inspection, controlled raw material storage with certificate traceability, and an outbound bay handling air and sea shipments worldwide.",
  },
];

function FactoryPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Factory", path: "/factory" },
        ]}
      />
      <PageHero
        eyebrow="Facility"
        title="Inside the Merjan Tooling Craft factory"
        lead="One integrated facility covering tooling, machining, casting, finishing and inspection — designed so a component and its data never leave our control."
        image={factoryAerial}
        imageAlt="Aerial view of the Merjan Tooling Craft manufacturing facility"
      />

      <Section eyebrow="Facility" title="Built around flow, not departments">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Prose>
            <p>
              The plant is laid out so material moves in one direction: goods-in and verification,
              raw material store, tool room, machining, casting, finishing, inspection, despatch.
              Every handover is a few metres rather than a courier run, which is the single biggest
              reason our lead times hold when a programme is under pressure.
            </p>
            <p>
              Production planning is visible on the floor. Each job carries a router with drawing
              revision, material certificate reference, operation sequence and inspection points, so
              anyone on shift can see where a part is and what happens to it next.
            </p>
            <p>
              We welcome customer visits and audits, and can run remote video walkthroughs of your
              job in progress for international clients who cannot travel.
            </p>
          </Prose>
          <SpecTable
            rows={[
              ["Location", "Lahore, Pakistan"],
              ["Shifts", "Two shifts, six days"],
              ["Team", "60+ engineers & operators"],
              ["Experience", "20+ years"],
              ["Exports", "4 continents"],
              ["Visitors", "Audits welcome"],
            ]}
          />
        </div>
      </Section>

      <Section muted eyebrow="Tour" title="Six areas, one continuous process">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.07}>
              <figure className="flex h-full flex-col overflow-hidden surface-card">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Flow" title="How a job moves through the plant">
        <Steps
          items={[
            { n: "01", t: "Goods in", d: "Material verified against certificates and logged with full traceability." },
            { n: "02", t: "Tooling", d: "Fixtures, dies and moulds prepared in the tool room before production starts." },
            { n: "03", t: "Manufacture", d: "Machining, casting or moulding with in-process checks at defined points." },
            { n: "04", t: "Finish & inspect", d: "Deburring, coating, final CMM inspection and documented despatch." },
          ]}
        />
      </Section>

      <Section muted eyebrow="Responsibility" title="Safety, people and environment">
        <Prose>
          <p>
            Machine guarding, PPE discipline and documented safe operating procedures apply across
            the floor, and every new operator works under supervision until signed off on a machine.
            Coolant, swarf and waste oil are segregated and routed to licensed recyclers, and
            aluminium scrap is returned to the melt stream rather than landfilled.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        title="Related"
        items={[
          { to: "/equipment", label: "Equipment list" },
          { to: "/quality", label: "Quality systems" },
          { to: "/careers", label: "Careers" },
          { to: "/about", label: "About us" },
        ]}
      />

      <CTABand
        title="Want to see your part being made?"
        body="Send your enquiry and we can arrange a plant visit or a live video walkthrough of your job on the floor."
      />
    </>
  );
}
