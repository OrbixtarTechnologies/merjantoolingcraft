import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/case-studies.jpg";
import { CTABand, FAQList, PageHero, Section, faqSchema, seo } from "@/components/page-blocks";

const FAQS = [
  { q: "What file types can I send?", a: "STEP, IGES, STL, DWG, DXF, native SolidWorks files and dimensioned PDF drawings. If you only have a physical part, we can 3D scan it and rebuild the CAD model." },
  { q: "Is there a minimum order quantity?", a: "No. We machine single prototypes and one-off spares as well as recurring production batches." },
  { q: "What is the maximum part size you can machine?", a: "Milling up to approximately 1,000 × 550 × 550 mm and turning up to Ø 400 mm. Larger assemblies can often be split and joined — send the model and we will advise." },
  { q: "What tolerances can you hold?", a: "±0.02 mm is our standard machining tolerance; critical features can be held to ±0.005 mm depending on material, geometry and inspection method." },
  { q: "What surface finishes do you offer?", a: "As-machined, bead blast, sand blast, anodizing (clear, coloured and hard), powder coating, plating, painting, polishing and chromate." },
  { q: "How long does an order take?", a: "Machined prototypes typically ship in 5–10 working days. Production batches and die cast tooling are scheduled after engineering review and confirmed before you approve." },
  { q: "Do you ship internationally?", a: "Yes. We export worldwide with protective packing, export documentation, material certificates and inspection reports." },
  { q: "Which materials do you machine?", a: "Aluminium, stainless and alloy steels, titanium, copper, brass, bronze, cast iron and engineering plastics including Delrin, nylon, PEEK, ABS and polycarbonate." },
  { q: "What inspection do you carry out?", a: "In-process checks on every job plus final dimensional inspection. CMM reports, First Article Inspection and surface roughness records are available on request." },
  { q: "Can you reproduce a part with no drawing?", a: "Yes — send the sample. We 3D scan it, rebuild parametric CAD, agree corrections with you and then manufacture." },
  { q: "Do you build tooling as well as parts?", a: "Yes. We design and manufacture die casting dies, moulds, press tools, jigs, fixtures and checking gauges." },
  { q: "How do I get a quote?", a: "Submit the quote form with your CAD file, material, quantity and required date, or send it directly to inquiry@merjantoolingcraft.com. An engineer reviews every enquiry." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...seo(
      "Frequently Asked Questions — Merjan Tooling Craft",
      "Answers on file types, tolerances, materials, lead times, minimum order quantities, inspection documentation and international shipping from Merjan Tooling Craft.",
      "/faq",
    ),
    scripts: [faqSchema(FAQS)],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        lead="The questions engineers and buyers ask us most — answered without sales language."
        image={heroCnc}
        imageAlt="CNC machining centre in operation"
      />
      <Section title="Manufacturing & ordering">
        <FAQList items={FAQS} />
      </Section>
      <CTABand />
    </>
  );
}
