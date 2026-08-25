import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/prototype-to-production.jpg";
import { CTABand, PageHero, Prose, Section, SpecTable, Steps, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/prototyping-to-production")({
  head: () =>
    seo(
      "Prototyping to Production — One Supplier | Merjan Tooling Craft",
      "Merjan Tooling Craft takes parts from first machined prototype through bridge production to die cast volume manufacturing, without changing supplier.",
      "/prototyping-to-production",
    ),
  component: PrototypingToProduction,
});

function PrototypingToProduction() {
  return (
    <>
      <PageHero
        eyebrow="Prototyping to production"
        title="One partner across the whole product life"
        lead="Prototype it machined, bridge it while the design settles, cast it when volume justifies the tool — same team throughout."
        image={heroCnc}
        imageAlt="Machined prototype alongside a production die cast part"
      />

      <Section title="What that looks like">
        <SpecTable
          rows={[
            ["Prototype", "Machined, days not weeks"],
            ["Bridge", "Machined batches pre-tooling"],
            ["Tooling", "Die cut in-house"],
            ["Volume", "Cast, machined, finished"],
          ]}
        />
      </Section>

      <Section muted eyebrow="The route" title="Four stages, no supplier change">
        <Steps
          items={[
            { n: "01", t: "Prove the design", d: "Machined parts in the real alloy so testing means something." },
            { n: "02", t: "Bridge the gap", d: "Small batches keep your launch moving while tooling is cut." },
            { n: "03", t: "Cut the tool", d: "Die designed, machined, hardened and sampled in-house." },
            { n: "04", t: "Run production", d: "Scheduled batches with inspection records and buffer stock." },
          ]}
        />
      </Section>

      <Section title="Why it saves time">
        <Prose>
          <p>
            The usual cost of scaling is re-qualification: a new supplier, new fixtures, new
            inspection baselines, new arguments about whose dimension is right. Keeping the whole
            route in one workshop removes that entirely — the engineer who machined your prototype
            is the one specifying the die.
          </p>
        </Prose>
      </Section>

      <CTABand title="Scaling a part this year?" />
    </>
  );
}
