import { createFileRoute } from "@tanstack/react-router";
import partsGrid from "@/assets/svc-production.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, Steps, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/services/production")({
  head: () =>
    seo(
      "On-Demand Production & Low-Volume Manufacturing | MTC",
      "Merjan Tooling Craft supports repeat production: locked-down processes, scheduled batches, inspection records and stock-holding for machined and die cast parts.",
      "/services/production",
    ),
  component: Production,
});

function Production() {
  return (
    <>
      <PageHero
        eyebrow="Production"
        title="On-demand and low-volume production"
        lead="Once a part is proven, the job changes from making it to making it the same way every time."
        image={partsGrid}
        imageAlt="Batch of machined production components"
      />

      <Section title="Production support">
        <SpecTable
          rows={[
            ["Batches", "Scheduled or call-off"],
            ["Volumes", "10 – 100,000+"],
            ["Records", "Inspection per batch"],
            ["Stock", "Buffer holding available"],
          ]}
        />
      </Section>

      <Section muted eyebrow="How production works" title="Repeatability, not improvisation">
        <Steps
          items={[
            { n: "01", t: "Process lock", d: "Fixtures, tooling and programs are fixed and documented." },
            { n: "02", t: "Pilot batch", d: "A first run proves cycle time, yield and dimensional stability." },
            { n: "03", t: "Scheduled runs", d: "Call-off quantities produced against your forecast." },
            { n: "04", t: "Ongoing review", d: "Tool wear tracked and inserts replaced before quality drifts." },
          ]}
        />
      </Section>

      <Section title="What production customers get">
        <Bullets
          items={[
            "A named engineer who knows the part history",
            "Fixed fixtures so set-up variation is removed",
            "Inspection data retained per batch",
            "Buffer stock to protect against demand spikes",
            "Cost reduction reviews as volume grows",
            "A single supplier for machined and cast components",
          ]}
        />
      </Section>

      <Section muted title="Bridge to volume">
        <Prose>
          <p>
            Many customers start with machined parts while a die casting tool is being designed and
            cut. We can run both routes in parallel so launch is not held up by tooling lead time,
            then transition to casting once the tool is validated.
          </p>
        </Prose>
      </Section>

      <CTABand title="Moving a part into production?" />
    </>
  );
}
