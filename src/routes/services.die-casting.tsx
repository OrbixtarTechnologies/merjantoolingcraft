import { createFileRoute, Link } from "@tanstack/react-router";
import svcDiecasting from "@/assets/svc-diecast-process.jpg";
import {
  Bullets,
  CTABand,
  PageHero,
  Prose,
  Section,
  SpecTable,
  Steps,
  seo,
} from "@/components/page-blocks";

export const Route = createFileRoute("/services/die-casting")({
  head: () =>
    seo(
      "High-Pressure Die Casting Services | Merjan Tooling Craft",
      "Aluminium and zinc high-pressure die casting from Merjan Tooling Craft, including die design, in-house tool manufacture, trimming, machining and finishing.",
      "/services/die-casting",
    ),
  component: DieCasting,
});

function DieCasting() {
  return (
    <>
      <PageHero
        eyebrow="High-Pressure Die Casting"
        title="Die casting, with the tool built in-house"
        lead="We take responsibility for the die as well as the part, so production quality stays consistent run after run."
        image={svcDiecasting}
        imageAlt="High-pressure die casting cell producing aluminium components"
      />

      <Section title="Casting at a glance">
        <SpecTable
          rows={[
            ["Alloys", "Aluminium & zinc"],
            ["Tooling", "Designed and cut in-house"],
            ["Finishing", "Trim, machine, coat"],
            ["Quantities", "Low to high volume"],
          ]}
        />
      </Section>

      <Section muted title="Why high-pressure die casting">
        <Prose>
          <p>
            Molten alloy is injected into a hardened steel die at high pressure, filling thin walls
            and fine detail in seconds. The result is a dimensionally stable metal part with good
            surface quality, produced at a cycle time that makes volume work economical.
          </p>
          <p>
            Because we design and cut the die ourselves, changes during development do not mean
            waiting on a third-party toolmaker — and the same team that machines the tool also
            machines the finished casting.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Process" title="From die design to finished casting">
        <Steps
          items={[
            { n: "01", t: "Part & die design", d: "Draft, wall thickness, gating and ejection reviewed against your model." },
            { n: "02", t: "Tool manufacture", d: "Die blocks and inserts cut, hardened and fitted in our own tool room." },
            { n: "03", t: "Sampling", d: "First shots produced, measured and corrected before release." },
            { n: "04", t: "Production & finishing", d: "Casting, trimming, machining, coating and inspection." },
          ]}
        />
      </Section>

      <Section muted title="Design guidance for castings">
        <Bullets
          items={[
            "Maintain uniform wall thickness — typically 2 to 4 mm in aluminium",
            "Apply at least 1° draft on all vertical faces, more on textured surfaces",
            "Add generous fillets; sharp internal corners crack dies",
            "Use ribs rather than thick sections to add stiffness",
            "Plan the parting line early — it drives tool cost",
            "Leave machining stock on critical mating surfaces",
          ]}
        />
        <Link to="/services/die-casting/quality" className="btn-ghost mt-8">
          See our casting quality process
        </Link>
      </Section>

      <CTABand title="Planning a cast component?" />
    </>
  );
}
