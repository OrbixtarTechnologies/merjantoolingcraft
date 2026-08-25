import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import portfolio from "@/assets/projects-portfolio.jpg";
import imgMilling from "@/assets/svc-milling.jpg";
import imgTurning from "@/assets/svc-turning.jpg";
import imgEdm from "@/assets/svc-wire-edm.jpg";
import imgToolDie from "@/assets/svc-tool-and-die.jpg";
import imgMold from "@/assets/svc-injection-mold.jpg";
import imgMolding from "@/assets/svc-injection-molding.jpg";
import imgDiecast from "@/assets/svc-diecast-process.jpg";
import imgScan from "@/assets/svc-reverse-engineering.jpg";
import imgGrind from "@/assets/svc-surface-grinding.jpg";
import {
  Breadcrumbs,
  CTABand,
  PageHero,
  RelatedLinks,
  Section,
  StatBand,
  breadcrumbSchema,
  seo,
} from "@/components/page-blocks";
import { Reveal } from "@/components/motion-kit";

const TITLE = "Projects Portfolio — Machined & Tooled Components | Merjan Tooling Craft";
const DESC =
  "Browse Merjan Tooling Craft project work by process and industry: CNC machined components, wire EDM tooling, die castings, injection moulds and reverse engineered parts.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    ...seo(TITLE, DESC, "/projects"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ]),
    ],
  }),
  component: ProjectsPage,
});

interface Project {
  title: string;
  process: string;
  industry: string;
  material: string;
  tolerance: string;
  qty: string;
  body: string;
  img: string;
}

const PROJECTS: Project[] = [
  {
    title: "5-axis transmission housing",
    process: "CNC Milling",
    industry: "Automotive",
    material: "Aluminium 6061-T6",
    tolerance: "±0.02 mm",
    qty: "450 / year",
    body: "Complex housing machined complete in two set-ups on a 5-axis centre, replacing a four-operation route and cutting lead time by nine days.",
    img: imgMilling,
  },
  {
    title: "Hydraulic valve spool set",
    process: "CNC Turning",
    industry: "Industrial Equipment",
    material: "Stainless 316L",
    tolerance: "±0.008 mm",
    qty: "2,000 / year",
    body: "Turned and ground spools with matched-bore clearance control, inspected 100% on optical measurement before assembly.",
    img: imgTurning,
  },
  {
    title: "Progressive stamping die",
    process: "Tool & Die",
    industry: "Electronics",
    material: "D2 tool steel",
    tolerance: "±0.005 mm",
    qty: "1 tool",
    body: "Eight-station progressive die for a terminal contact, wire cut after hardening and validated over a 50,000-hit trial run.",
    img: imgToolDie,
  },
  {
    title: "Turbine shroud segment",
    process: "Wire EDM",
    industry: "Energy",
    material: "Inconel 718",
    tolerance: "±0.01 mm",
    qty: "60 / batch",
    body: "Profiles cut by wire EDM where milling could not reach, holding form on a hardened superalloy without heat-affected distortion.",
    img: imgEdm,
  },
  {
    title: "LED luminaire housing die",
    process: "Die Casting",
    industry: "Consumer Electronics",
    material: "ADC12 aluminium",
    tolerance: "±0.1 mm",
    qty: "25,000 / year",
    body: "Die designed, built and run in-house, with post-cast machining of mounting faces and optic seats on a dedicated fixture.",
    img: imgDiecast,
  },
  {
    title: "Two-cavity connector mould",
    process: "Injection Mould",
    industry: "Electronics",
    material: "P20 / hardened inserts",
    tolerance: "±0.01 mm",
    qty: "1 tool",
    body: "Hot-runner two-cavity mould for a glass-filled nylon connector body, delivered with a validated T1 sample report.",
    img: imgMold,
  },
  {
    title: "Medical device enclosure",
    process: "Plastic Injection Molding",
    industry: "Medical",
    material: "Polycarbonate",
    tolerance: "±0.05 mm",
    qty: "12,000 / year",
    body: "Cosmetic enclosure moulded to a Class A finish with documented process parameters and full lot traceability.",
    img: imgMolding,
  },
  {
    title: "Obsolete pump impeller",
    process: "Reverse Engineering",
    industry: "Oil & Gas",
    material: "Bronze C63000",
    tolerance: "±0.05 mm",
    qty: "8 pieces",
    body: "Worn impeller 3D scanned, rebuilt as parametric CAD with corrected profiles, and machined to return a 30-year-old pump to service.",
    img: imgScan,
  },
  {
    title: "Precision gauge blocks",
    process: "Surface Grinding",
    industry: "Aerospace",
    material: "Hardened tool steel",
    tolerance: "±0.002 mm",
    qty: "120 sets",
    body: "Ground and lapped check gauges with Ra 0.2 µm faces, supplied with individual dimensional inspection certificates.",
    img: imgGrind,
  },
];

const PROCESSES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.process)))];
const INDUSTRIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.industry)))];

function ProjectsPage() {
  const [process, setProcess] = useState("All");
  const [industry, setIndustry] = useState("All");

  const shown = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (process === "All" || p.process === process) &&
          (industry === "All" || p.industry === industry),
      ),
    [process, industry],
  );

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <PageHero
        eyebrow="Projects"
        title="Work we have delivered"
        lead="A cross-section of components, tools and assemblies produced at Merjan Tooling Craft — filter by process or industry to find work like yours."
        image={portfolio}
        imageAlt="Portfolio of precision machined and cast components"
      />

      <StatBand
        items={[
          { to: 3500, suffix: "+", label: "Parts delivered" },
          { to: 20, suffix: "+", label: "Years in business" },
          { to: 12, label: "Industries served" },
          { to: 98, suffix: "%", label: "On-time delivery" },
          { to: 14, label: "Core processes" },
          { to: 4, label: "Continents shipped" },
        ]}
      />

      <Section eyebrow="Portfolio" title="Filter the portfolio">
        <div className="space-y-5">
          <Filter label="Process" options={PROCESSES} value={process} onChange={setProcess} />
          <Filter label="Industry" options={INDUSTRIES} value={industry} onChange={setIndustry} />
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Showing {shown.length} of {PROJECTS.length} projects
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col overflow-hidden surface-card">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                    {p.process} · {p.industry}
                  </p>
                  <h3 className="mt-2 text-lg">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-xs">
                    <Spec k="Material" v={p.material} />
                    <Spec k="Tolerance" v={p.tolerance} />
                    <Spec k="Volume" v={p.qty} />
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-8 text-sm text-muted-foreground">
            No projects match that combination — reset a filter to see more work.
          </p>
        )}
      </Section>

      <RelatedLinks
        title="Go deeper"
        items={[
          { to: "/case-studies", label: "Detailed case studies" },
          { to: "/gallery", label: "Photo gallery" },
          { to: "/capabilities", label: "Capabilities" },
          { to: "/quote", label: "Request a quote" },
        ]}
      />

      <CTABand
        title="Your part could be next"
        body="Tell us the process, material and volume and we will show you comparable work before you commit."
      />
    </>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground">{k}</dt>
      <dd className="mt-1 font-display text-xs font-bold">{v}</dd>
    </div>
  );
}

function Filter({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="label-eyebrow mr-2">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`rounded border px-3 py-1.5 text-sm transition-colors ${
            value === o
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
