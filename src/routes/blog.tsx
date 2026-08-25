import { createFileRoute, Link } from "@tanstack/react-router";
import resourcesDesign from "@/assets/resources-design.jpg";
import imgMilling from "@/assets/svc-milling.jpg";
import imgDiecast from "@/assets/svc-diecast-process.jpg";
import imgScan from "@/assets/svc-reverse-engineering.jpg";
import imgEdm from "@/assets/svc-wire-edm.jpg";
import imgQuality from "@/assets/quality-inspection.jpg";
import imgMetals from "@/assets/materials-metals.jpg";
import {
  Breadcrumbs,
  CTABand,
  PageHero,
  RelatedLinks,
  Section,
  breadcrumbSchema,
  seo,
} from "@/components/page-blocks";
import { Reveal } from "@/components/motion-kit";

const TITLE = "Manufacturing Blog — DFM, Tolerances & Tooling Insights | Merjan Tooling Craft";
const DESC =
  "Engineering articles from Merjan Tooling Craft on design for manufacturing, tolerance selection, material choice, tooling economics and reverse engineering.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    ...seo(TITLE, DESC, "/blog"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    title: "How tolerance call-outs drive machining cost",
    topic: "Design",
    read: "6 min read",
    img: imgMilling,
    body: "Tightening a tolerance from ±0.1 mm to ±0.01 mm can double the cost of a feature. Here is where the money actually goes, and how to spend it only where function demands it.",
  },
  {
    title: "Die casting or machining? Choosing by volume",
    topic: "Process",
    read: "7 min read",
    img: imgDiecast,
    body: "Tooling amortisation, cycle time and finish machining all shift the crossover point. A practical framework for deciding when a casting tool pays for itself.",
  },
  {
    title: "Reverse engineering legacy parts without drawings",
    topic: "Engineering",
    read: "5 min read",
    img: imgScan,
    body: "From worn sample to production-ready CAD: what 3D scanning can and cannot tell you, and why engineering judgement still decides the final geometry.",
  },
  {
    title: "When wire EDM beats milling",
    topic: "Process",
    read: "5 min read",
    img: imgEdm,
    body: "Hardened material, sharp internal corners and no cutting force. The four situations where EDM is not just an alternative but the only viable route.",
  },
  {
    title: "Reading a first-article inspection report",
    topic: "Quality",
    read: "6 min read",
    img: imgQuality,
    body: "What balloon numbering, measured values and process capability figures actually tell you about whether a supplier can hold your drawing in production.",
  },
  {
    title: "Aluminium alloy selection for machined parts",
    topic: "Materials",
    read: "8 min read",
    img: imgMetals,
    body: "6061 versus 7075 versus 2024: strength, corrosion behaviour, machinability and cost compared against the applications each grade genuinely suits.",
  },
];

const TOPICS = Array.from(new Set(POSTS.map((p) => p.topic)));

function BlogPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="Engineering notes from the shop floor"
        lead="Practical writing on design for manufacture, process selection and quality — written by the engineers who quote and machine the parts, not by a marketing team."
        image={resourcesDesign}
        imageAlt="Engineering design documentation and technical drawings"
      />

      <Section eyebrow="Topics" title="Browse by topic">
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col overflow-hidden surface-card">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.6rem] uppercase tracking-widest text-primary">
                    {p.topic} · {p.read}
                  </p>
                  <h2 className="mt-2 text-lg">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted eyebrow="More reading" title="Detailed guides available now">
        <div className="flex flex-wrap gap-3">
          <Link to="/resources/design-tips" className="btn-primary">
            Design tips
          </Link>
          <Link to="/resources/design-for-machining-toolkit" className="btn-ghost">
            Machining toolkit
          </Link>
          <Link to="/downloads" className="btn-ghost">
            Downloadable guides
          </Link>
        </div>
      </Section>

      <RelatedLinks
        title="Related"
        items={[
          { to: "/resources", label: "Resource centre" },
          { to: "/faq", label: "FAQ" },
          { to: "/case-studies", label: "Case studies" },
          { to: "/quote", label: "Request a quote" },
        ]}
      />

      <CTABand
        title="Have a question we should write about?"
        body="Send it over — the questions engineers ask during quoting become the articles we publish next."
      />
    </>
  );
}
