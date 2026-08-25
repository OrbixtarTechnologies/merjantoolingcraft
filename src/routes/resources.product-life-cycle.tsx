import { createFileRoute } from "@tanstack/react-router";
import svcDiecasting from "@/assets/prototype-to-production.jpg";
import { CTABand, PageHero, Prose, Section, Steps, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/resources/product-life-cycle")({
  head: () =>
    seo(
      "Product Life Cycle — Prototype to Production | MTC",
      "How Merjan Tooling Craft supports a part through its life: prototype machining, bridge production, die cast tooling, volume supply and end-of-life spares.",
      "/resources/product-life-cycle",
    ),
  component: LifeCycle,
});

const STAGES: [string, string, string][] = [
  ["Prototype", "1 – 25 parts", "Machined from solid in the production alloy so testing reflects reality. No tooling cost, days not weeks."],
  ["Validation", "25 – 250 parts", "Machined bridge parts while the design freezes. Fixtures built and process documented."],
  ["Tooling", "Die design & cut", "Die designed around the frozen model, cut in-house, sampled and corrected before release."],
  ["Production", "250 – 100,000+", "Scheduled casting and machining with inspection records against each batch."],
  ["Sustaining", "Ongoing", "Tool maintenance, cost reduction reviews and buffer stock for demand spikes."],
  ["End of life", "Spares", "Reverse engineering and short machined runs long after the tool has been retired."],
];

function LifeCycle() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Life cycle"
        title="From first prototype to last spare"
        lead="The right process changes as a part matures. Keeping machining and casting in one place makes those transitions cheap."
        image={svcDiecasting}
        imageAlt="Die cast and machined parts from the same component family"
      />

      <Section title="Six stages">
        <div className="grid gap-px border border-border bg-border">
          {STAGES.map(([stage, vol, body]) => (
            <div key={stage} className="bg-card p-5 sm:flex sm:gap-8">
              <div className="sm:w-56 sm:shrink-0">
                <h3 className="text-lg">{stage}</h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                  {vol}
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground sm:mt-0">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted eyebrow="Crossover" title="When to stop machining and cut a tool">
        <Steps
          items={[
            { n: "01", t: "Volume", d: "Annual quantity high enough to amortise the die within a year." },
            { n: "02", t: "Stability", d: "Geometry frozen — late changes are expensive in hardened steel." },
            { n: "03", t: "Geometry", d: "The part suits casting: uniform walls, draft, no deep undercuts." },
            { n: "04", t: "Lead time", d: "You can absorb tooling lead time, or bridge it with machining." },
          ]}
        />
      </Section>

      <Section title="Talk it through">
        <Prose>
          <p>
            We will tell you honestly when a tool is not worth cutting yet. A supplier that makes
            both machined and cast parts has no reason to push you toward the wrong one.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
