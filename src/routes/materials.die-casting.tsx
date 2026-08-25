import { createFileRoute } from "@tanstack/react-router";
import svcDiecasting from "@/assets/materials-diecasting.jpg";
import { CTABand, PageHero, Prose, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/materials/die-casting")({
  head: () =>
    seo(
      "Die Casting Materials — Aluminium & Zinc Alloys | MTC",
      "Aluminium and zinc die casting alloys offered by Merjan Tooling Craft, with typical applications, wall thickness guidance and available finishes.",
      "/materials/die-casting",
    ),
  component: CastingMaterials,
});

const ALLOYS: [string, string, string][] = [
  ["ADC12 / A380 aluminium", "General purpose", "The default die casting alloy — good castability, strength and cost for housings and covers."],
  ["A360 aluminium", "Corrosion resistance", "Better ductility and corrosion performance for outdoor and marine-facing parts."],
  ["A413 aluminium", "Pressure tight", "Excellent castability for thin walls and pressure-tight enclosures."],
  ["Zamak 3 zinc", "Fine detail", "Thin walls, crisp detail and an excellent base for plating and painting."],
  ["Zamak 5 zinc", "Higher strength", "Zamak 3 with added copper for greater strength and hardness."],
  ["ZA-8 zinc", "Bearing loads", "Higher aluminium content for improved strength and wear performance."],
];

function CastingMaterials() {
  return (
    <>
      <PageHero
        eyebrow="Materials / Die Casting"
        title="Die casting alloys"
        lead="Alloy choice sets wall thickness, finish quality and tool life — we pick it with the part geometry, not after it."
        image={svcDiecasting}
        imageAlt="Molten aluminium being cast in a die casting cell"
      />

      <Section title="Alloys we cast">
        <div className="grid gap-px border border-border bg-border">
          {ALLOYS.map(([name, tag, body]) => (
            <div key={name} className="bg-card p-5 sm:flex sm:gap-8">
              <div className="sm:w-64 sm:shrink-0">
                <h3 className="text-lg">{name}</h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                  {tag}
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground sm:mt-0">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted title="Wall thickness and finishing">
        <Prose>
          <p>
            Aluminium castings typically run 2–4 mm walls; zinc can go thinner, down to around
            1 mm, which is why it suits detailed decorative parts. Uniform thickness matters more
            than absolute thickness — abrupt changes cause porosity and sink.
          </p>
          <p>
            Castings can be trimmed, machined on critical faces, tumbled, shot blasted, powder
            coated, anodised (aluminium) or plated (zinc).
          </p>
        </Prose>
      </Section>

      <CTABand title="Not sure which alloy fits?" />
    </>
  );
}
