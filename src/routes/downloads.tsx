import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import resourcesDesign from "@/assets/resources-design.jpg";
import {
  Breadcrumbs,
  CTABand,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  breadcrumbSchema,
  seo,
} from "@/components/page-blocks";
import { Reveal } from "@/components/motion-kit";
import { CONTACT } from "@/lib/site-contact";

const TITLE = "Downloads — Capability Deck, DFM Guides & Templates | Merjan Tooling Craft";
const DESC =
  "Download Merjan Tooling Craft engineering resources: capability statement, DFM guides for machining and die casting, tolerance charts and RFQ templates.";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    ...seo(TITLE, DESC, "/downloads"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Downloads", path: "/downloads" },
      ]),
    ],
  }),
  component: DownloadsPage,
});

const ITEMS = [
  {
    title: "Company capability statement",
    body: "Two-page overview of processes, equipment, tolerances, industries and quality systems — the document to circulate internally when introducing us as a supplier.",
    kind: "PDF · 2 pages",
  },
  {
    title: "Design for CNC machining guide",
    body: "Wall thickness, internal radii, hole depth ratios, thread selection and tolerance guidance that reduce machining cost before you release the drawing.",
    kind: "PDF · 12 pages",
  },
  {
    title: "Design for die casting guide",
    body: "Draft angles, uniform wall strategy, rib and boss design, parting line placement and porosity avoidance for aluminium and zinc castings.",
    kind: "PDF · 10 pages",
  },
  {
    title: "Injection moulding DFM checklist",
    body: "Wall thickness, sink and warp control, gate and ejector placement, texture selection and tooling considerations for moulded parts.",
    kind: "PDF · 8 pages",
  },
  {
    title: "Standard tolerance chart",
    body: "Our achievable tolerances by process and feature size, alongside ISO 2768 medium and fine references for drawing call-outs.",
    kind: "PDF · 2 pages",
  },
  {
    title: "Materials comparison chart",
    body: "Side-by-side mechanical, thermal and cost comparison of the metals and engineering plastics we machine most frequently.",
    kind: "PDF · 4 pages",
  },
  {
    title: "RFQ template (spreadsheet)",
    body: "A structured request-for-quote sheet covering part number, revision, material, finish, tolerance, quantity breaks and delivery requirements.",
    kind: "XLSX",
  },
  {
    title: "Inspection report sample",
    body: "An example first-article inspection report showing the layout, balloon referencing and measurement evidence we supply with production parts.",
    kind: "PDF · 3 pages",
  },
];

function DownloadsPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Downloads", path: "/downloads" },
        ]}
      />
      <PageHero
        eyebrow="Downloads"
        title="Engineering resources and documents"
        lead="Practical documents our customers use during design, procurement and supplier qualification — request any of them and we will email the current revision."
        image={resourcesDesign}
        imageAlt="Engineering drawings and design documentation"
      />

      <Section eyebrow="Library" title="Available documents">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col surface-card p-6">
                <FileText className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground">
                  {it.kind}
                </p>
                <h3 className="mt-1 text-lg">{it.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {it.body}
                </p>
                <a
                  href={`${CONTACT.emailHref}?subject=${encodeURIComponent(`Document request: ${it.title}`)}`}
                  className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-foreground"
                >
                  Request document <Download className="size-4 text-primary" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted eyebrow="How it works" title="Requesting a document">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Prose>
            <p>
              Rather than publishing static files that quickly fall out of date, we send the current
              revision directly. Click any document above and an email opens with the title
              pre-filled — add your company name and we will reply the same working day.
            </p>
            <p>
              If you need something not listed here — a supplier questionnaire completed, material
              certificates for a specific alloy, or a bespoke capability summary for a tender — ask
              and we will prepare it.
            </p>
          </Prose>
          <div className="surface-card p-6">
            <p className="label-eyebrow">Direct contact</p>
            <p className="mt-3 text-sm text-muted-foreground">Email</p>
            <a href={CONTACT.emailHref} className="font-display font-bold hover:text-primary">
              {CONTACT.email}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Phone</p>
            <a href={CONTACT.phoneHref} className="font-display font-bold hover:text-primary">
              {CONTACT.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-primary mt-6 w-full">
              Contact us
            </Link>
          </div>
        </div>
      </Section>

      <RelatedLinks
        title="Related"
        items={[
          { to: "/resources", label: "Resource centre" },
          { to: "/quality", label: "Quality & inspection" },
          { to: "/certifications", label: "Certifications" },
          { to: "/quote", label: "Request a quote" },
        ]}
      />

      <CTABand />
    </>
  );
}
