import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Timer,
  ShieldCheck,
  Ruler,
  Upload,
  Star,
  BadgeCheck,
  Globe2,
} from "lucide-react";
import heroCnc from "@/assets/hero-cnc.jpg";
import partsGrid from "@/assets/svc-production.jpg";
import svcMolding from "@/assets/svc-turning.jpg";
import svcScanning from "@/assets/svc-reverse-engineering.jpg";
import svcDiecasting from "@/assets/svc-diecast-process.jpg";
import svcLed from "@/assets/svc-led-lights.jpg";
import { CTABand, FAQList, Section, TrustBar, faqSchema } from "@/components/page-blocks";
import { HeroFade, WordsReveal, Reveal } from "@/components/motion-kit";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/site-contact";

const TITLE =
  "Precision CNC Machining, Tooling & Die Casting | Merjan Tooling Craft";
const DESC =
  "Merjan Tooling Craft is a precision CNC machining, tooling, reverse engineering and high-pressure die casting partner for aerospace, automotive, medical and industrial components. From prototype to production.";

const FAQS = [
  {
    q: "What file types can I send for a quote?",
    a: "STEP, IGES, STL, DWG, DXF, SolidWorks parts and PDF drawings. If you only have a physical sample, we can 3D scan it and rebuild the CAD model.",
  },
  {
    q: "What tolerances can you hold?",
    a: "Standard machining is held to ±0.02 mm, with critical features achievable to ±0.005 mm depending on material, geometry and inspection method.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "No. We machine single prototypes and one-off spares as readily as recurring production batches of several thousand parts.",
  },
  {
    q: "How long does a typical order take?",
    a: "Machined prototypes typically ship in 5–10 working days. Production batches and die cast tooling are scheduled after engineering review and confirmed in writing before you approve.",
  },
  {
    q: "Do you export internationally?",
    a: "Yes. We ship worldwide with export documentation, material certificates and dimensional inspection reports supplied with each consignment.",
  },
  {
    q: "What inspection documentation do you provide?",
    a: "First Article Inspection reports, dimensional inspection records, material certificates and, where required, surface finish and hardness results.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Merjan Tooling Craft",
          alternateName: "MTC",
          url: "https://www.merjantoolingcraft.com",
          description: DESC,
          telephone: "+92 42 37185537-9",
          email: "inquiry@merjantoolingcraft.com",
        }),
      },
      faqSchema(FAQS),
    ],
  }),
  component: Index,
});

const TRUST = [
  { value: "ISO-aligned", label: "Quality management procedures" },
  { value: "20+ yrs", label: "Tooling & machining experience" },
  { value: "1000+", label: "Projects delivered" },
  { value: "±0.005 mm", label: "Achievable critical tolerance" },
  { value: "Worldwide", label: "Export & documentation" },
  { value: "5–10 days", label: "Typical prototype lead time" },
];

const SERVICES = [
  {
    name: "CNC Milling",
    lead: "3-axis and simultaneous 5-axis milling of aluminium, steel, titanium, brass, copper and engineering plastics.",
    spec: "3, 4 & 5-axis",
    img: heroCnc,
    to: "/services/cnc-machining/cnc-milling",
  },
  {
    name: "CNC Turning",
    lead: "Live-tooling turning for shafts, bushings, fittings and rotational parts with tight concentricity control.",
    spec: "Live tooling",
    img: svcMolding,
    to: "/services/cnc-machining/cnc-turning",
  },
  {
    name: "Reverse Engineering & 3D Scanning",
    lead: "Scan legacy and obsolete parts, rebuild parametric CAD and re-manufacture to the original fit and function.",
    spec: "Scan to CAD",
    img: svcScanning,
    to: "/services/reverse-engineering",
  },
  {
    name: "High-Pressure Die Casting",
    lead: "Die design, tool manufacture and casting of ADC12, A380 and Zamak components with machining and finishing.",
    spec: "Tool & cast",
    img: svcDiecasting,
    to: "/services/die-casting",
  },
  {
    name: "Tooling, Jigs & Fixtures",
    lead: "Production tooling, moulds, dies, checking gauges and workholding built to keep your line running.",
    spec: "Custom tooling",
    img: partsGrid,
    to: "/capabilities",
  },
  {
    name: "LED Lighting",
    lead: "Industrial LED fixtures built on our own cast aluminium housings, heat sinks and mounting hardware.",
    spec: "OEM supply",
    img: svcLed,
    to: "/services/led-lights",
  },
];

const INDUSTRIES = [
  { label: "Aerospace", to: "/industries/aerospace" },
  { label: "Automotive", to: "/industries/automotive" },
  { label: "Medical", to: "/industries/medical" },
  { label: "Oil & Gas", to: "/industries/oil-and-gas" },
  { label: "Energy & Power", to: "/industries/energy" },
  { label: "Industrial Equipment", to: "/industries/industrial-equipment" },
  { label: "Robotics & Automation", to: "/industries/robotics" },
  { label: "Electronics", to: "/industries/electronics" },
  { label: "Defence", to: "/industries/defence" },
];

const CAPABILITIES = [
  "CNC Milling",
  "CNC Turning",
  "EDM & Wire Cut",
  "Surface & Cylindrical Grinding",
  "High-Pressure Die Casting",
  "Sand Blasting",
  "Anodizing",
  "Powder Coating",
  "Heat Treatment",
  "Welding & Fabrication",
  "Assembly",
  "CMM Inspection",
];

const STEPS = [
  { n: "01", t: "Upload CAD", d: "STEP, IGES, STL, DWG or PDF — or send us the physical sample." },
  { n: "02", t: "Engineering review", d: "Material, tooling strategy, tolerance and finish confirmed." },
  { n: "03", t: "Quotation", d: "Priced against quantity, lead time and inspection requirements." },
  { n: "04", t: "Approval", d: "Drawing sign-off and, where needed, first article approval." },
  { n: "05", t: "Manufacturing", d: "Machined, cast and finished under one roof in our own facility." },
  { n: "06", t: "Inspection", d: "Dimensional verification and documentation before release." },
  { n: "07", t: "Shipping", d: "Protective packing and export paperwork, delivered worldwide." },
];

const TESTIMONIALS = [
  {
    quote:
      "They rebuilt CAD from a 30-year-old obsolete casting and delivered replacement parts that dropped straight into the machine.",
    who: "Maintenance Manager, textile plant",
  },
  {
    quote:
      "Consistent tolerances batch after batch, and inspection reports we can hand straight to our own customer.",
    who: "Quality Engineer, automotive tier supplier",
  },
  {
    quote:
      "One supplier for the die, the casting and the finish machining — it removed weeks from our programme.",
    who: "Product Manager, lighting OEM",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroCnc}
          alt="5-axis CNC machining centre cutting a precision metal component at Merjan Tooling Craft"
          width={1600}
          height={1000}
          fetchPriority="high"
          className="ken-burns absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div
          aria-hidden="true"
          className="drift-orb pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-primary/20 blur-3xl"
        />
        <div aria-hidden="true" className="hatch pointer-events-none absolute inset-x-0 bottom-0 h-12 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36">
          <HeroFade>
            <p className="label-eyebrow">
              Merjan Tooling Craft · Precision CNC machining, tooling & manufacturing partner
            </p>
          </HeroFade>
          <span className="rule-accent mt-5" aria-hidden="true" style={{ animationDelay: "0.15s" }} />
          <WordsReveal
            as="h1"
            delay={0.12}
            text="Precision CNC machining & manufacturing solutions"
            className="mt-5 max-w-4xl text-4xl leading-[1.05] md:text-6xl"
          />
          <HeroFade delay={0.34}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From prototype to production — high precision CNC milling, turning, tooling, reverse
              engineering, die casting and custom manufacturing for aerospace, automotive, medical and
              industrial components.
            </p>
          </HeroFade>
          <HeroFade delay={0.46}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/quote" className="btn-primary sheen group">
                Request a quote{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/quote" className="btn-ghost">
                <Upload className="size-4" /> Upload CAD file
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <WhatsAppIcon className="size-4" /> WhatsApp an engineer
              </a>
            </div>
          </HeroFade>
          <div className="scroll-hint mt-14 hidden items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground md:flex">
            <ChevronDown className="size-4 text-primary" aria-hidden="true" /> Scroll to explore
          </div>
        </div>
      </section>


      <TrustBar items={TRUST} />

      <Section eyebrow="Our expertise" title="Manufacturing services">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.07} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden border border-border bg-card hover-lift">
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.name} at Merjan Tooling Craft`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-44 w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{s.spec}</p>
                  <h3 className="mt-2 text-xl">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.lead}</p>
                  <Link
                    to={s.to}
                    className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-foreground"
                  >
                    Service details{" "}
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted eyebrow="Industries" title="Engineered for demanding sectors">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="group flex items-center justify-between bg-card px-5 py-5 transition-colors hover:bg-steel"
            >
              <span className="font-display font-bold">{i.label}</span>
              <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>


      <Section eyebrow="Capabilities" title="Everything under one roof">
        <div className="flex flex-wrap gap-2">
          {CAPABILITIES.map((c) => (
            <span key={c} className="border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
        <Link to="/capabilities" className="btn-ghost mt-8">
          Full capability list <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section muted eyebrow="How we work" title="From CAD file to delivered component">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t-2 border-primary pt-5">
              <p className="font-mono text-sm text-primary">{s.n}</p>
              <h3 className="mt-2 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why choose MTC" title="Precision, documentation and delivery you can plan around">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ul className="space-y-6">
            {[
              { i: Ruler, t: "Verified accuracy", d: "Dimensional inspection on every batch, with CMM and FAI reporting available on request." },
              { i: Timer, t: "Lead times we hold", d: "Realistic schedules agreed up front and progress communicated through the build." },
              { i: ShieldCheck, t: "Documented quality", d: "Material certificates, inspection records and traceability supplied with your parts." },
              { i: BadgeCheck, t: "One accountable supplier", d: "Tooling, machining, casting, finishing and assembly handled in-house." },
              { i: Globe2, t: "Export ready", d: "Protective packing and export documentation for worldwide shipment." },
            ].map(({ i: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <img
            src={partsGrid}
            alt="Precision machined and die cast components produced by Merjan Tooling Craft"
            loading="lazy"
            width={1400}
            height={900}
            className="border border-border object-cover"
          />
        </div>
      </Section>

      <Section muted eyebrow="Client feedback" title="What our customers say">
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.who} className="border border-border bg-background p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground">
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common engineering questions">
        <FAQList items={FAQS} />
      </Section>

      <CTABand />
    </>
  );
}
