import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import partsGrid from "@/assets/parts-grid.jpg";
import imgMilling from "@/assets/svc-milling.jpg";
import imgTurning from "@/assets/svc-turning.jpg";
import imgEdm from "@/assets/svc-wire-edm.jpg";
import imgGrind from "@/assets/svc-surface-grinding.jpg";
import imgToolDie from "@/assets/svc-tool-and-die.jpg";
import imgMold from "@/assets/svc-injection-mold.jpg";
import imgMolding from "@/assets/svc-injection-molding.jpg";
import imgDiecast from "@/assets/svc-diecast-process.jpg";
import imgScan from "@/assets/svc-reverse-engineering.jpg";
import imgCad from "@/assets/svc-cad-cam.jpg";
import imgQuality from "@/assets/quality-inspection.jpg";
import imgEquipment from "@/assets/equipment-hall.jpg";
import imgFactory from "@/assets/factory-aerial.jpg";
import imgShopfloor from "@/assets/capabilities-shopfloor.jpg";
import imgMetals from "@/assets/materials-metals.jpg";
import imgPlastics from "@/assets/materials-plastics.jpg";
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

const TITLE = "Gallery — Precision Manufacturing Photos | Merjan Tooling Craft";
const DESC =
  "Photo gallery of Merjan Tooling Craft: CNC machining, wire EDM, tool and die making, die casting, injection moulding, inspection and finished components.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    ...seo(TITLE, DESC, "/gallery"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ]),
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: imgMilling, cat: "Machining", caption: "5-axis milling of an aluminium housing" },
  { src: imgTurning, cat: "Machining", caption: "CNC turning centre producing precision shafts" },
  { src: imgGrind, cat: "Machining", caption: "Surface grinding a hardened die plate" },
  { src: imgEdm, cat: "Tooling", caption: "Wire EDM cutting a hardened tool steel profile" },
  { src: imgToolDie, cat: "Tooling", caption: "Progressive die assembly in the tool room" },
  { src: imgMold, cat: "Tooling", caption: "Injection mould cavity under final polish" },
  { src: imgDiecast, cat: "Production", caption: "High-pressure die casting cell in operation" },
  { src: imgMolding, cat: "Production", caption: "Injection moulding machine with part removal" },
  { src: imgShopfloor, cat: "Facility", caption: "Production shop floor during a day shift" },
  { src: imgEquipment, cat: "Facility", caption: "Machining hall with CNC centres" },
  { src: imgFactory, cat: "Facility", caption: "Merjan Tooling Craft facility overview" },
  { src: imgQuality, cat: "Quality", caption: "CMM inspection in the metrology lab" },
  { src: imgScan, cat: "Quality", caption: "3D scanning a component for reverse engineering" },
  { src: imgCad, cat: "Engineering", caption: "CAD/CAM programming and DFM review" },
  { src: imgMetals, cat: "Materials", caption: "Metal stock ready for machining" },
  { src: imgPlastics, cat: "Materials", caption: "Engineering plastics stock and machined parts" },
  { src: partsGrid, cat: "Components", caption: "Finished precision components ready for despatch" },
];

const CATS = ["All", ...Array.from(new Set(ITEMS.map((i) => i.cat)))];

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const shown = ITEMS.filter((i) => cat === "All" || i.cat === cat);

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <PageHero
        eyebrow="Gallery"
        title="Precision, photographed"
        lead="Machines, tooling, processes and finished components from the Merjan Tooling Craft shop floor."
        image={partsGrid}
        imageAlt="Grid of finished precision manufactured components"
      />

      <Section eyebrow="Browse" title="Filter by category">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`rounded border px-3 py-1.5 text-sm transition-colors ${
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((it, i) => (
            <Reveal key={it.caption} delay={(i % 3) * 0.05}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-lift"
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="block p-4">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-primary">
                    {it.cat}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{it.caption}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {active !== null && shown[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[active].caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-5"
          onClick={() => setActive(null)}
        >
          <figure className="max-h-full max-w-4xl overflow-hidden rounded bg-card">
            <img src={shown[active].src} alt={shown[active].caption} className="max-h-[75vh] w-full object-contain" />
            <figcaption className="flex items-center justify-between gap-4 p-4 text-sm">
              {shown[active].caption}
              <button type="button" className="btn-ghost" onClick={() => setActive(null)}>
                Close
              </button>
            </figcaption>
          </figure>
        </div>
      )}

      <RelatedLinks
        title="See more"
        items={[
          { to: "/projects", label: "Projects portfolio" },
          { to: "/factory", label: "Factory tour" },
          { to: "/equipment", label: "Equipment" },
          { to: "/case-studies", label: "Case studies" },
        ]}
      />

      <CTABand />
    </>
  );
}
