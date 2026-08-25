import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/ind-automotive.jpg";
import { Bullets, CTABand, PageHero, Prose, Section, SpecTable, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/industries/automotive")({
  head: () =>
    seo(
      "Automotive Manufacturing — Machined & Die Cast Parts | MTC",
      "Merjan Tooling Craft supplies the automotive and motorsport sector with CNC machined components, die cast housings, fixtures and reverse engineered spares.",
      "/industries/automotive",
    ),
  component: Automotive,
});

function Automotive() {
  return (
    <>
      <PageHero
        eyebrow="Industries / Automotive"
        title="Automotive & motorsport"
        lead="From a single prototype bracket to repeat die cast housings, with the tooling capability to move a part from development into volume."
        image={heroCnc}
        imageAlt="Machined automotive component on a CNC machine"
      />

      <Section title="Typical work">
        <SpecTable
          rows={[
            ["Prototypes", "Machined in production alloy"],
            ["Volume", "Aluminium & zinc die casting"],
            ["Tooling", "Jigs, fixtures and check gauges"],
            ["Spares", "Reverse engineered legacy parts"],
          ]}
        />
      </Section>

      <Section muted title="Components we make">
        <Bullets
          items={[
            "Engine and transmission brackets",
            "Die cast housings and covers",
            "Suspension and chassis hardware",
            "Motorsport one-off machined parts",
            "Assembly jigs, fixtures and gauges",
            "Obsolete classic-vehicle spares",
          ]}
        />
      </Section>

      <Section title="Why automotive customers use MTC">
        <Prose>
          <p>
            Automotive programmes rarely stay still: geometry changes late, volumes shift, and a
            part that was machined for validation needs a casting route six months later. Having the
            tool room, the machine shop and the casting cell in one place means those transitions
            happen without re-qualifying a new supplier each time.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
