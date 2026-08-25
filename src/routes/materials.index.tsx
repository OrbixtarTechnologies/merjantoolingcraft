import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Materials & Finishes — Merjan Tooling Craft";
const DESC =
  "Metals, engineering plastics and casting alloys machined and cast by Merjan Tooling Craft, with the surface finishes available on every component.";

export const Route = createFileRoute("/materials/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/materials" },
    ],
    links: [{ rel: "canonical", href: "/materials" }],
  }),
  component: MaterialsPage,
});

const GROUPS = [
  {
    group: "Metals",
    note: "Milled or turned",
    items: [
      ["Aluminium 6061-T6", "General structural parts, fixtures, housings"],
      ["Aluminium 7075-T6", "High-strength brackets and load-bearing parts"],
      ["Stainless 303 / 304", "Corrosion resistance and hygienic applications"],
      ["Stainless 17-4 PH", "Hardened shafts and tooling components"],
      ["Brass C360", "Fittings, bushings, electrical contacts"],
      ["Tool steel P20 / H13", "Mould and die inserts"],
    ],
  },
  {
    group: "Casting alloys",
    note: "High-pressure die casting",
    items: [
      ["ADC12 / A380 aluminium", "General purpose die cast housings"],
      ["A360 aluminium", "Better corrosion resistance and ductility"],
      ["Zamak 3 zinc", "Fine detail, thin walls, plated finishes"],
      ["Zamak 5 zinc", "Higher strength zinc components"],
    ],
  },
  {
    group: "Engineering plastics",
    note: "Machined",
    items: [
      ["POM (Delrin)", "Precision sliding mechanisms"],
      ["Nylon 6/6", "Wear parts, gears and bushings"],
      ["Polycarbonate", "Impact resistant guards and lenses"],
      ["PEEK", "High temperature, chemical exposure"],
    ],
  },
];

const FINISHES = [
  "As machined",
  "Bead blast",
  "Anodising (Type II)",
  "Hard anodising",
  "Powder coat",
  "Passivation",
  "Zinc plating",
  "Polishing",
  "Laser marking",
];

function MaterialsPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="label-eyebrow">Material library</p>
          <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">Materials and finishes</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            If your component calls for a grade not listed here, tell us — we regularly source
            specialist materials for customer programmes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {GROUPS.map((g) => (
          <section key={g.group} className="mb-14">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
              <h2 className="text-2xl">{g.group}</h2>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {g.note}
              </p>
            </div>
            <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map(([name, use]) => (
                <div key={name} className="bg-card p-5">
                  <h3 className="text-base">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{use}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl">Surface finishes</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {FINISHES.map((f) => (
              <li
                key={f}
                className="border border-border bg-card px-3 py-2 font-mono text-xs uppercase tracking-widest text-steel-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
          <Link to="/quote" className="btn-primary mt-8">
            Ask for a material recommendation
          </Link>
        </section>
      </div>
    </>
  );
}
