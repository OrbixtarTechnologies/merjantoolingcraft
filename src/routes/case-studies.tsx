import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/prototype-to-production.jpg";
import heroCnc from "@/assets/case-studies.jpg";
import svcDiecasting from "@/assets/materials-diecasting.jpg";
import svcScanning from "@/assets/svc-reverse-engineering.jpg";
import { CTABand, DataTable, PageHero, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    seo(
      "Case Studies — Precision Machining Projects | Merjan Tooling Craft",
      "Representative Merjan Tooling Craft projects: transmission housing machining, obsolete spare reverse engineering, die cast LED heat sinks and hardened press tooling.",
      "/case-studies",
    ),
  component: CaseStudies,
});

const CASES = [
  {
    title: "Automotive transmission housing",
    img: heroCnc,
    problem:
      "A tier supplier needed a low-volume transmission housing with bore alignment held across three faces, but their existing vendor could not repeat the concentricity between batches.",
    solution:
      "We machined the housing in two 5-axis set-ups instead of four 3-axis operations, holding all critical bores from a single datum scheme and proving the fixture with a first article before batch release.",
    rows: [
      ["Process", "5-axis CNC milling"],
      ["Material", "Aluminium 6061-T6"],
      ["Tolerance", "±0.01 mm on bores"],
      ["Lead time", "12 working days"],
      ["Result", "Zero rejects across repeat batches"],
    ],
  },
  {
    title: "Obsolete textile machine spare",
    img: svcScanning,
    problem:
      "A processing plant lost a 30-year-old cast bracket with no drawings available and no supplier still producing the machine.",
    solution:
      "The worn original was 3D scanned, the geometry rebuilt as parametric CAD, worn surfaces restored to nominal and the replacement machined from solid to avoid tooling cost on a single part.",
    rows: [
      ["Process", "3D scanning + CNC milling"],
      ["Material", "Alloy steel 4140"],
      ["Tolerance", "±0.02 mm"],
      ["Lead time", "9 working days"],
      ["Result", "Drop-in fit, machine back in service"],
    ],
  },
  {
    title: "Die cast LED heat sink",
    img: svcDiecasting,
    problem:
      "A lighting OEM needed a fixture body that dissipated heat adequately at a cost that extruded and machined options could not reach at their annual volume.",
    solution:
      "We designed the die with the fin geometry and draft required for casting, cast in ADC12, then finish machined the LED mounting face and threaded bosses in-house before powder coating.",
    rows: [
      ["Process", "High-pressure die casting + CNC"],
      ["Material", "ADC12 aluminium"],
      ["Tolerance", "±0.05 mm cast, ±0.02 mm machined"],
      ["Lead time", "Tool 5 weeks, parts 10 days"],
      ["Result", "Unit cost reduced against machined baseline"],
    ],
  },
  {
    title: "Hardened press tooling set",
    img: partsGrid,
    problem:
      "A sheet metal fabricator was losing edge quality as punches wore prematurely on a high-cycle progressive tool.",
    solution:
      "Punches and dies were wire cut from hardened tool steel, ground to final size and clearance re-specified for the material thickness, with spares produced in the same batch.",
    rows: [
      ["Process", "Wire cut EDM + grinding"],
      ["Material", "Hardened tool steel"],
      ["Tolerance", "±0.005 mm on profile"],
      ["Lead time", "14 working days"],
      ["Result", "Longer cycle life between regrinds"],
    ],
  },
];

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Projects and how we solved them"
        lead="Representative work from our machining, casting and reverse engineering floors — the problem, the route we chose and the measured outcome."
        image={partsGrid}
        imageAlt="Precision machined and cast components"
      />

      {CASES.map((c, idx) => (
        <Section key={c.title} muted={idx % 2 === 1} title={c.title}>
          <div className="grid gap-8 lg:grid-cols-2">
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-64 w-full border border-border object-cover lg:h-full"
            />
            <div className="space-y-4">
              <div>
                <p className="label-eyebrow">Problem</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.problem}</p>
              </div>
              <div>
                <p className="label-eyebrow">Solution</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.solution}</p>
              </div>
              <DataTable head={["Detail", "Specification"]} rows={c.rows} />
            </div>
          </div>
        </Section>
      ))}

      <CTABand title="Have a similar challenge?" body="Send the part, the problem and the volume — we will tell you the most economical route to make it." />
    </>
  );
}
