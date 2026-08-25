import { createFileRoute, Link } from "@tanstack/react-router";
import partsGrid from "@/assets/capabilities-shopfloor.jpg";

const TITLE = "About Merjan Tooling Craft — Precision & Reliability";
const DESC =
  "One of Pakistan's top precision engineering companies — Merjan Tooling Craft serves national and international clients with CNC machining, tooling and die casting solutions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  ["Precision first", "Every programme starts with the tolerance that matters most to the part."],
  ["Adaptable engineering", "Each client faces unique challenges; we innovate around them rather than force a standard process."],
  ["Unparalleled service", "Direct access to the people actually making your components."],
  ["Craftsmanship", "Modern machines, traditional toolmaking discipline."],
];

const INDUSTRIES = [
  ["Automotive & motorsport", "Engine components, fixtures and die cast housings."],
  ["Industrial machinery", "Wear parts, precision shafts and replacement spares."],
  ["Lighting", "Die cast LED housings, heat sinks and mounting hardware."],
  ["Legacy & obsolete parts", "3D scanned, remodelled and remanufactured to fit."],
];

const LEADERS = [
  {
    name: "Tanveer Ahmed",
    role: "Chief Executive Officer",
    initials: "TA",
    message: [
      "Merjan Tooling Craft was founded on a simple conviction: that Pakistan can manufacture to the same standard as anywhere in the world. Two decades later, that conviction is measured in tolerances, inspection reports and the trust of clients on four continents.",
      "We are proud to be counted among the country's leading precision engineering houses — serving our own nation's industry while building lasting industrial relationships across the globe. Every component that leaves our floor carries that responsibility with it.",
    ],
  },
  {
    name: "Muhammad Asim Tanveer",
    role: "Managing Director",
    initials: "MA",
    message: [
      "Precision is not an outcome, it is a discipline repeated every shift. Our investment in 5-axis machining, wire EDM, die casting and in-house inspection exists so that our engineers never have to compromise between speed and accuracy.",
      "Whether you need a single obsolete part reverse engineered or a recurring production programme, you deal directly with the people who make it. That accountability is what our international clients tell us they value most.",
    ],
  },
  {
    name: "Hamza Tanveer",
    role: "Managing Director",
    initials: "HT",
    message: [
      "Our growth has come from partnerships, not transactions. We work alongside customers from concept and DFM review through tooling, production and delivery — and we hold ourselves to the schedules we agree.",
      "As we expand our export footprint, our commitment stays the same: honest engineering advice, documented quality and components that fit first time, wherever in the world they are installed.",
    ],
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="label-eyebrow">About MTC</p>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">
            A trusted ally in your pursuit of excellence.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Merjan Tooling Craft is one of Pakistan's leading precision engineering and tooling
            companies — serving the nation's industry and international clients alike, and building
            industrial relationships across the globe. When you choose MTC you partner with a company
            that prioritises precision and reliability in every project, delivering CNC machining
            solutions tailored to your specific needs.
          </p>
        </div>
      </section>


      <section className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(([t, d]) => (
          <div key={t} className="bg-background p-6">
            <h2 className="font-display text-lg font-bold text-primary">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <img
          src={partsGrid}
          alt="Machined and cast components produced by Merjan Tooling Craft"
          loading="lazy"
          width={1400}
          height={900}
          className="border border-border object-cover"
        />
        <div>
          <h2 className="text-3xl">Industries we serve</h2>
          <dl className="mt-8 space-y-6">
            {INDUSTRIES.map(([t, d]) => (
              <div key={t} className="border-l-2 border-primary pl-4">
                <dt className="font-display text-lg font-bold">{t}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
          <Link to="/quote" className="btn-primary mt-8">
            Start a project with MTC
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="label-eyebrow">Leadership</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Messages from our leadership</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {LEADERS.map((l) => (
              <figure
                key={l.name}
                className="flex flex-col border border-border bg-background p-8"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                  {l.initials}
                </span>
                <blockquote className="mt-6 flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {l.message.map((p, i) => (
                    <p key={i}>{i === 0 ? `“${p}` : p}{i === l.message.length - 1 ? "”" : ""}</p>
                  ))}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-base font-bold">{l.name}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                    {l.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
