import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/resources-design.jpg";
import { CTABand, PageHero, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/resources/design-tips")({
  head: () =>
    seo(
      "Design Tips for Machined & Cast Parts | Merjan Tooling Craft",
      "Practical design tips for CNC machining and die casting: wall thickness, radii, draft, tolerances, threads and finishing decisions that control part cost.",
      "/resources/design-tips",
    ),
  component: DesignTips,
});

const TIPS: { title: string; points: string[] }[] = [
  {
    title: "Wall thickness",
    points: [
      "Machined metal walls: 0.8 mm minimum, 1.5 mm comfortable",
      "Machined plastic walls: 1.5 mm minimum to resist cutting forces",
      "Die cast aluminium: 2–4 mm, kept as uniform as possible",
      "Die cast zinc: from about 1 mm for detailed parts",
    ],
  },
  {
    title: "Corners and radii",
    points: [
      "Every internal corner in a milled pocket carries a radius",
      "Use the largest radius the design allows — bigger tools cut faster",
      "Add fillets to castings; sharp corners crack dies",
      "External sharp edges are fine, but chamfer entry faces",
    ],
  },
  {
    title: "Tolerances",
    points: [
      "Default to a general tolerance and call out only critical features",
      "±0.02 mm is achievable but costs more than ±0.1 mm",
      "Group tight features so they can be cut in one set-up",
      "State datums explicitly rather than implying them",
    ],
  },
  {
    title: "Holes and threads",
    points: [
      "Use standard drill and thread sizes wherever possible",
      "Keep hole depth under 4× diameter to avoid special tooling",
      "Thread only as deep as the fastener requires",
      "Consider inserts in soft alloys for repeated assembly",
    ],
  },
  {
    title: "Draft and parting lines",
    points: [
      "Apply 1° draft minimum on cast vertical faces",
      "Increase draft on textured or deep surfaces",
      "Place the parting line where witness marks are acceptable",
      "Avoid undercuts unless a slide is genuinely justified",
    ],
  },
  {
    title: "Finishing",
    points: [
      "As-machined is the cheapest acceptable finish for most parts",
      "Bead blast hides tool marks and evens out appearance",
      "Anodising adds thickness — allow for it on fits",
      "Mask threads and bearing bores before coating",
    ],
  },
];

function DesignTips() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Design tips"
        title="Design tips that cut cost, not corners"
        lead="Most of a part's price is fixed by the time the model is finished. These are the decisions that matter."
        image={heroCnc}
        imageAlt="Engineer reviewing a CAD model of a machined component"
      />

      <Section title="Six areas to review">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((t) => (
            <article key={t.title} className="border border-border bg-card p-6">
              <h3 className="text-xl">{t.title}</h3>
              <ul className="mt-4 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <CTABand title="Send us the model and we will review it." />
    </>
  );
}
