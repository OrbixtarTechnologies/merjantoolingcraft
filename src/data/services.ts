import type { ServiceContent } from "@/components/service-page";

import imgMilling from "@/assets/svc-milling.jpg";
import imgTurning from "@/assets/svc-turning.jpg";
import imgWireEdm from "@/assets/svc-wire-edm.jpg";
import imgGrinding from "@/assets/svc-surface-grinding.jpg";
import imgToolDie from "@/assets/svc-tool-and-die.jpg";
import imgMold from "@/assets/svc-injection-mold.jpg";
import imgMolding from "@/assets/svc-injection-molding.jpg";
import imgScan from "@/assets/svc-reverse-engineering.jpg";
import imgCad from "@/assets/svc-cad-cam.jpg";
import imgParts from "@/assets/parts-grid.jpg";
import imgProto from "@/assets/prototype-to-production.jpg";
import imgProduction from "@/assets/svc-production.jpg";
import imgShop from "@/assets/capabilities-shopfloor.jpg";
import imgQc from "@/assets/quality-inspection.jpg";

const ALL_INDUSTRIES = [
  { to: "/industries/automotive", label: "Automotive" },
  { to: "/industries/aerospace", label: "Aerospace" },
  { to: "/industries/medical", label: "Medical" },
  { to: "/industries/defence", label: "Defence" },
  { to: "/industries/industrial-equipment", label: "Industrial Equipment" },
  { to: "/industries/electronics", label: "Electronics" },
  { to: "/industries/energy", label: "Energy" },
  { to: "/industries/oil-and-gas", label: "Oil & Gas" },
];

const METALS = [
  "Aluminium 6061, 7075, 2024 and cast alloys",
  "Stainless steel 303, 304, 316L, 17-4 PH",
  "Tool steel D2, H13, O1, P20 and 1.2344",
  "Mild and alloy steel EN8, EN19, EN24, 4140",
  "Brass, bronze and electrolytic copper",
  "Titanium Grade 2 and Grade 5 (Ti-6Al-4V)",
];

const PLASTICS = [
  "Delrin / acetal (POM-C, POM-H)",
  "PEEK and glass-filled PEEK",
  "Nylon 6, 66 and MoS₂-filled grades",
  "Polycarbonate and ABS",
  "PTFE, UHMWPE and PVC",
  "Glass and carbon reinforced compounds",
];

const STD_TOLERANCES = [
  ["Linear dimensions", "±0.05 mm", "±0.010 mm"],
  ["Hole diameter", "H9", "H7 / H6 reamed or bored"],
  ["Flatness", "0.05 mm / 100 mm", "0.008 mm / 100 mm"],
  ["Surface finish", "Ra 1.6 µm", "Ra 0.4 µm or better"],
  ["Angularity", "±0.5°", "±0.05°"],
];

const GALLERY = [
  { src: imgParts, alt: "Precision machined components produced by Merjan Tooling Craft" },
  { src: imgShop, alt: "Merjan Tooling Craft machine shop floor" },
  { src: imgQc, alt: "Dimensional inspection in the Merjan Tooling Craft quality lab" },
];

type Draft = Partial<ServiceContent> &
  Pick<
    ServiceContent,
    | "slug"
    | "name"
    | "title"
    | "lead"
    | "metaTitle"
    | "metaDescription"
    | "image"
    | "imageAlt"
    | "overview"
    | "quickSpecs"
    | "capabilities"
    | "advantages"
    | "applications"
    | "faqs"
    | "related"
  >;

function make(d: Draft): ServiceContent {
  return {
    path: `/services/${d.slug}`,
    eyebrow: `Services / ${d.name}`,
    materials: METALS,
    tolerances: STD_TOLERANCES,
    machines: [
      ["3-axis vertical machining centre", "1,000 × 500 × 500 mm", "±0.010 mm positioning"],
      ["4-axis VMC with trunnion", "600 × 400 × 450 mm", "±0.008 mm positioning"],
      ["CNC turning centre with live tooling", "Ø350 × 700 mm", "±0.008 mm"],
      ["CNC wire EDM", "400 × 300 × 250 mm", "±0.005 mm"],
      ["Precision surface grinder", "600 × 300 mm table", "±0.002 mm"],
    ],
    industries: ALL_INDUSTRIES,
    gallery: GALLERY,
    ...d,
  } as ServiceContent;
}

export const EXTRA_SERVICES: ServiceContent[] = [
  make({
    slug: "wire-edm",
    name: "Wire EDM",
    title: "Wire EDM cutting for hardened, complex and burr-free geometry",
    lead: "Non-contact spark erosion through hardened tool steel, carbide and exotic alloys — tight corner radii, keyways, extrusion dies and profiles that milling cannot reach.",
    metaTitle: "Wire EDM Services — Precision Spark Erosion | Merjan Tooling Craft",
    metaDescription:
      "CNC wire EDM cutting to ±0.005 mm in hardened tool steel, carbide, titanium and stainless. Die plates, punches, keyways and complex profiles from Merjan Tooling Craft.",
    image: imgWireEdm,
    imageAlt: "CNC wire EDM machine cutting a hardened tool steel die plate",
    overview: [
      "Wire electrical discharge machining removes material with controlled electrical discharges between a travelling brass wire and a conductive workpiece. Because there is no cutting force, hardened and thin-walled sections can be cut without distortion, deflection or burr.",
      "Merjan Tooling Craft uses wire EDM as the finishing operation for die plates, punch profiles, splines and small internal radii after heat treatment — holding geometry that would move if it were milled soft and then hardened.",
      "Every programme is generated from the customer CAD model, with wire compensation and multiple skim passes chosen to hit the required surface finish and corner accuracy in a single set-up.",
    ],
    quickSpecs: [
      ["Positional accuracy", "±0.005 mm"],
      ["Max part height", "250 mm"],
      ["Min internal radius", "0.105 mm"],
      ["Surface finish", "Down to Ra 0.4 µm"],
    ],
    capabilities: [
      "Blanking, forming and progressive die plates",
      "Punches, buttons and stripper plates",
      "Internal and external splines and keyways",
      "Extrusion dies and profile tooling",
      "Thin-wall and fragile sections without distortion",
      "Stacked plate cutting for matched sets",
    ],
    advantages: [
      {
        title: "Cuts fully hardened material",
        body: "Parts can be heat treated first and finished afterwards, so hardening distortion is removed rather than designed around.",
      },
      {
        title: "Zero mechanical force",
        body: "Delicate ribs, thin webs and tall narrow profiles hold form because the wire never touches the workpiece.",
      },
      {
        title: "Sharp internal corners",
        body: "Corner radii down to the wire radius, far tighter than the smallest practical end mill for the same depth.",
      },
    ],
    applications: [
      "Press tool and die components",
      "Aerospace and defence profile parts",
      "Medical instrument features in 17-4 PH and 316L",
      "Carbide punches and forming inserts",
      "Prototype gear and spline forms",
      "Repair and re-cut of worn die details",
    ],
    faqs: [
      {
        q: "What materials can be wire EDM cut?",
        a: "Any electrically conductive material — tool steel, stainless, carbide, titanium, copper, brass, aluminium and Inconel. Hardness has no effect on cutting speed.",
      },
      {
        q: "What accuracy can you hold?",
        a: "±0.005 mm on positional features with skim passes, and Ra 0.4 µm surface finish when the application requires it.",
      },
      {
        q: "What is the maximum part size?",
        a: "400 × 300 mm in plan with up to 250 mm cutting height. Larger plates can be processed in indexed set-ups.",
      },
    ],
    related: [
      { to: "/services/tool-and-die", label: "Tool & Die Manufacturing" },
      { to: "/services/surface-grinding", label: "Surface Grinding" },
      { to: "/services/cnc-machining", label: "CNC Machining" },
    ],
  }),
  make({
    slug: "surface-grinding",
    name: "Surface Grinding",
    title: "Precision surface grinding for flatness, parallelism and mirror finishes",
    lead: "Final size and finish on hardened plates, die components and machine elements — flatness to 0.002 mm and Ra 0.2 µm ground surfaces.",
    metaTitle: "Precision Surface Grinding Services | Merjan Tooling Craft",
    metaDescription:
      "Surface grinding to 0.002 mm flatness and Ra 0.2 µm on hardened tool steel, stainless and cast iron. Die plates, gauges and machine components ground to size.",
    image: imgGrinding,
    imageAlt: "Precision surface grinder finishing a hardened steel block",
    overview: [
      "Surface grinding is the operation that turns a machined component into a metrology-grade one. After heat treatment, ground datum faces restore the flatness and parallelism that hardening removes, giving downstream operations a reference they can trust.",
      "Our grinding cell handles die plates, gauge blocks, sine plate work, spacers, slide ways and mould inserts, with wheel selection matched to the material and the finish specification.",
      "Parts are checked on granite surface plates with electronic comparators and recorded against the drawing before release.",
    ],
    quickSpecs: [
      ["Flatness", "0.002 mm achievable"],
      ["Parallelism", "0.003 mm"],
      ["Surface finish", "Ra 0.2 µm"],
      ["Max table", "600 × 300 mm"],
    ],
    capabilities: [
      "Flat and parallel grinding of hardened plates",
      "Step and slot grinding with form dressing",
      "Angular grinding on sine plates and vices",
      "Mould and die insert finishing",
      "Gauge, jig and fixture reference faces",
      "Regrinding and refurbishment of worn tooling",
    ],
    advantages: [
      {
        title: "Metrology-grade datums",
        body: "Ground faces give inspection and assembly a stable, repeatable reference that machined faces cannot match.",
      },
      {
        title: "Post-hardening correction",
        body: "Distortion introduced during heat treatment is ground out, so the finished component meets print, not the blank.",
      },
      {
        title: "Superior wear behaviour",
        body: "Fine ground finishes reduce friction and extend the service life of sliding and sealing surfaces.",
      },
    ],
    applications: [
      "Die shoes, plates and backing plates",
      "Sealing and mating faces on hydraulic blocks",
      "Machine slides and gib strips",
      "Inspection gauges and setting blocks",
      "Mould inserts and shut-off faces",
      "Hardened wear plates and spacers",
    ],
    faqs: [
      {
        q: "Can you grind hardened components?",
        a: "Yes — grinding is normally performed after heat treatment, up to 62 HRC and above depending on material and wheel selection.",
      },
      {
        q: "Do you supply inspection data?",
        a: "Flatness, parallelism and thickness are recorded on a dimensional report for every batch on request.",
      },
      {
        q: "Can you grind parts we machined elsewhere?",
        a: "Yes. We regularly finish, correct and regrind components and tooling produced by other suppliers.",
      },
    ],
    related: [
      { to: "/services/wire-edm", label: "Wire EDM" },
      { to: "/services/tool-and-die", label: "Tool & Die Manufacturing" },
      { to: "/quality", label: "Quality & Inspection" },
    ],
  }),
  make({
    slug: "tool-and-die",
    name: "Tool & Die Manufacturing",
    title: "Tool and die manufacturing built to run production, not just to pass trial",
    lead: "Progressive, blanking, forming and compound dies designed, machined, hardened, ground and tried out under one roof — with spares support for the life of the tool.",
    metaTitle: "Tool & Die Manufacturing Services | Merjan Tooling Craft",
    metaDescription:
      "Design and manufacture of progressive, blanking, forming and compound dies. Hardened tool steel construction, wire EDM detail, tryout and spares support.",
    image: imgToolDie,
    imageAlt: "Precision progressive stamping die assembly on a toolmaker bench",
    overview: [
      "A die is a production asset, not a one-off part. Merjan Tooling Craft engineers tooling around strip layout, material springback, press tonnage and maintenance access so the tool is still running to print after hundreds of thousands of strokes.",
      "Design starts in CAD with strip layout and force calculations, moves through CNC machining of plates and details, heat treatment, wire EDM profiling and grinding, then assembly and tryout on a press.",
      "Every tool is delivered with a detail drawing pack and a documented spares list, so replacement punches and inserts can be produced from stock geometry without re-engineering.",
    ],
    quickSpecs: [
      ["Die types", "Progressive, blanking, forming, compound"],
      ["Detail accuracy", "±0.005 mm (wire EDM)"],
      ["Plate hardness", "Up to 62 HRC"],
      ["Support", "Spares, repair and refurbishment"],
    ],
    capabilities: [
      "Strip layout and die design in CAD",
      "Progressive and multi-station tooling",
      "Blanking, piercing and trim dies",
      "Forming, bending and drawing tools",
      "Jigs, fixtures, check gauges and go/no-go gauges",
      "Die repair, refurbishment and spare details",
    ],
    advantages: [
      {
        title: "Design and build in one place",
        body: "Tool designers sit next to the machines that cut the details, so manufacturability issues are resolved before steel is ordered.",
      },
      {
        title: "Documented spares",
        body: "Punch and insert geometry stays on file — replacements ship without re-measuring a worn detail.",
      },
      {
        title: "Tryout before shipment",
        body: "Tools are proved on press with the customer material and sample parts inspected against print.",
      },
    ],
    applications: [
      "Sheet metal stamped brackets and clips",
      "Electrical contacts and lamination stacks",
      "Automotive trim and fastening components",
      "Appliance and enclosure panels",
      "Deep drawn cups and housings",
      "Assembly jigs and welding fixtures",
    ],
    faqs: [
      {
        q: "Do you design the die or work from our design?",
        a: "Both. We can develop the strip layout and full tool design from a part model, or manufacture to your existing tool drawings.",
      },
      {
        q: "What tool steels do you use?",
        a: "D2, H13, O1, P20 and 1.2344 are standard, with carbide inserts where wear rates demand them.",
      },
      {
        q: "Can you maintain tooling built by another supplier?",
        a: "Yes. We reverse engineer worn details, produce replacements and refurbish existing die sets.",
      },
    ],
    related: [
      { to: "/services/wire-edm", label: "Wire EDM" },
      { to: "/services/injection-mold-manufacturing", label: "Injection Mold Manufacturing" },
      { to: "/services/surface-grinding", label: "Surface Grinding" },
    ],
  }),
  make({
    slug: "injection-mold-manufacturing",
    name: "Injection Mold Manufacturing",
    title: "Injection mold manufacturing engineered for cycle time and cavity life",
    lead: "Single-cavity prototype tools through multi-cavity production molds — cooling analysis, hardened cavities, polished surfaces and validated first-off samples.",
    metaTitle: "Injection Mold Manufacturing & Mold Making | Merjan Tooling Craft",
    metaDescription:
      "Prototype and production plastic injection mold manufacturing: P20 and H13 tooling, multi-cavity layouts, conformal cooling, polishing and T1 sampling.",
    image: imgMold,
    imageAlt: "Polished plastic injection mold cavity and core halves",
    overview: [
      "Mold making is where part cost is decided. Gate position, cooling layout and steel selection determine cycle time, warpage and cavity life long before the first shot is made.",
      "Merjan Tooling Craft builds molds from P20, H13 and stainless tool steels, with hardened inserts in high-wear areas, standardised mold bases and hot or cold runner systems selected to suit the material and volume.",
      "Tools are sampled in house, dimensional results are reported against the part drawing, and process settings are handed over with the tool so production is repeatable wherever it runs.",
    ],
    quickSpecs: [
      ["Tool classes", "Prototype to 1,000,000+ shots"],
      ["Cavitation", "1 to 16 cavities"],
      ["Cavity steel", "P20, H13, 420 stainless"],
      ["Finish", "SPI A1 polish to textured"],
    ],
    capabilities: [
      "Single and multi-cavity production molds",
      "Family and insert-interchange tooling",
      "Hot runner and cold runner systems",
      "Side actions, lifters and unscrewing cores",
      "Conformal and baffled cooling layouts",
      "Mold repair, engineering change and re-texturing",
    ],
    advantages: [
      {
        title: "Design for moldability first",
        body: "Wall thickness, draft, gate and ejection are reviewed against your model before tool steel is cut.",
      },
      {
        title: "Cycle time engineered in",
        body: "Cooling circuits are laid out to remove heat evenly, protecting dimensional stability and cutting seconds per shot.",
      },
      {
        title: "Sampled before delivery",
        body: "T1 samples with a dimensional report prove the tool against the drawing, not against a promise.",
      },
    ],
    applications: [
      "Consumer product housings and enclosures",
      "Automotive interior and under-bonnet parts",
      "Medical device components and closures",
      "Electrical connectors and switch bodies",
      "Industrial handles, knobs and covers",
      "Packaging closures and technical parts",
    ],
    faqs: [
      {
        q: "How long does a production mold take?",
        a: "Typically 5–8 weeks depending on cavitation and complexity; simple prototype tooling can be delivered faster.",
      },
      {
        q: "Do you run production from the mold?",
        a: "Yes — molds can stay with us for ongoing molding, or be shipped to your own facility with the process sheet.",
      },
      {
        q: "Can you modify an existing mold?",
        a: "Yes. Engineering changes, new inserts, re-polishing and repair of damaged cavities are routine work.",
      },
    ],
    related: [
      { to: "/services/plastic-injection-molding", label: "Plastic Injection Molding" },
      { to: "/services/tool-and-die", label: "Tool & Die Manufacturing" },
      { to: "/services/cad-cam-design", label: "CAD/CAM Design" },
    ],
  }),
  make({
    slug: "plastic-injection-molding",
    name: "Plastic Injection Molding",
    title: "Plastic injection molding from bridge volumes to full production",
    lead: "Repeatable moulded parts in engineering thermoplastics, with documented process settings, in-process checks and full material traceability.",
    metaTitle: "Plastic Injection Molding Services | Merjan Tooling Craft",
    metaDescription:
      "Production plastic injection molding in ABS, PC, nylon, POM, PP and glass-filled grades. Bridge volumes to full production with documented process control.",
    image: imgMolding,
    imageAlt: "Plastic injection molding machine with robot part removal",
    materials: PLASTICS,
    overview: [
      "Molding is a process control discipline. Melt temperature, injection profile, hold pressure and cooling time are established during validation and then locked, so part ten thousand measures like part one.",
      "Merjan Tooling Craft molds engineering thermoplastics for automotive, electrical, consumer and industrial customers, with insert molding and over-molding where assemblies need to be simplified.",
      "Material certificates, moisture control and dry-cycle records accompany production batches for customers with traceability requirements.",
    ],
    quickSpecs: [
      ["Shot range", "20 g to 800 g"],
      ["Batch size", "500 to 1,000,000+"],
      ["Tolerances", "To DIN 16742 tolerance grades"],
      ["Secondary ops", "Insert, assembly, pad print"],
    ],
    capabilities: [
      "Engineering thermoplastic molding",
      "Insert molding and over-molding",
      "Glass and mineral filled compounds",
      "Colour matching and masterbatch dosing",
      "Ultrasonic welding and assembly",
      "Pad printing, labelling and packing",
    ],
    advantages: [
      {
        title: "Locked process windows",
        body: "Validated parameters are recorded per tool, so restarts and repeat orders reproduce the approved part.",
      },
      {
        title: "Tooling and molding together",
        body: "Because the mold is built in house, corrections happen in days rather than shipping tools between suppliers.",
      },
      {
        title: "Traceable materials",
        body: "Resin lot, drying record and batch quantity are logged against each production run.",
      },
    ],
    applications: [
      "Housings, covers and bezels",
      "Electrical connectors and terminal blocks",
      "Automotive clips, ducts and brackets",
      "Consumer product enclosures",
      "Medical disposables and closures",
      "Technical parts in filled nylons and POM",
    ],
    faqs: [
      {
        q: "What is the minimum order quantity?",
        a: "There is no hard minimum — bridge runs of a few hundred parts are common while a production tool is finalised.",
      },
      {
        q: "Which materials do you mold?",
        a: "ABS, PC, PC/ABS, PP, PE, POM, PA6, PA66, PBT, TPU and glass-filled variants of most engineering grades.",
      },
      {
        q: "Can you mold with our existing tool?",
        a: "Yes. We inspect and, if required, refurbish transferred tooling before running the first validation batch.",
      },
    ],
    related: [
      { to: "/services/injection-mold-manufacturing", label: "Injection Mold Manufacturing" },
      { to: "/materials", label: "Materials Library" },
      { to: "/services/production", label: "On-Demand Production" },
    ],
  }),
  make({
    slug: "3d-scanning",
    name: "3D Scanning",
    title: "3D scanning and dimensional inspection of physical parts",
    lead: "Structured-light and probe scanning that turns an existing component into an accurate mesh, a parametric CAD model or a colour-mapped deviation report.",
    metaTitle: "3D Scanning & Dimensional Inspection Services | Merjan Tooling Craft",
    metaDescription:
      "Structured-light 3D scanning to 0.02 mm for reverse engineering, first-article inspection and CAD-to-part deviation analysis on legacy and complex components.",
    image: imgScan,
    imageAlt: "3D scanner capturing the geometry of a complex metal component",
    overview: [
      "Scanning answers two questions: what shape is this part, and how far is it from the model it should match. Both are routine work in our metrology room.",
      "Point clouds are aligned, decimated and converted into watertight meshes, then either delivered as STL for reference or rebuilt as feature-based CAD suitable for manufacturing and engineering change.",
      "For inspection work, the scan is aligned to the nominal CAD and returned as a colour deviation map with a report of critical dimensions.",
    ],
    quickSpecs: [
      ["Scan accuracy", "Up to 0.02 mm"],
      ["Part envelope", "10 mm to 2,000 mm"],
      ["Outputs", "STL, STEP, IGES, PDF report"],
      ["Turnaround", "From 48 hours"],
    ],
    capabilities: [
      "Structured-light scanning of complex freeform surfaces",
      "Point-cloud alignment and mesh repair",
      "Parametric CAD reconstruction from scan data",
      "CAD-to-part colour deviation mapping",
      "First-article and in-process inspection support",
      "Digital archiving of legacy tooling and patterns",
    ],
    advantages: [
      {
        title: "Captures what drawings lost",
        body: "Worn, modified or undocumented parts are digitised exactly as they exist today, including field modifications.",
      },
      {
        title: "Objective inspection evidence",
        body: "Colour deviation maps show where a part disagrees with nominal, and by how much, across the whole surface.",
      },
      {
        title: "Direct route to manufacture",
        body: "Scan data flows straight into CAM programming, so replacement parts can be cut without redrawing from scratch.",
      },
    ],
    applications: [
      "Obsolete spare part reproduction",
      "Casting and forging first-article inspection",
      "Tool and die wear analysis",
      "Design iteration on hand-modified prototypes",
      "Fit and clearance studies on assemblies",
      "Digital archives of legacy patterns",
    ],
    faqs: [
      {
        q: "Do I get an editable CAD model?",
        a: "Yes, when you request reconstruction. We deliver feature-based STEP models rather than raw mesh where the part will be manufactured or modified.",
      },
      {
        q: "How accurate is the scan?",
        a: "Up to 0.02 mm depending on part size, surface finish and geometry. We state achieved accuracy in the report.",
      },
      {
        q: "Can you scan large or shiny parts?",
        a: "Yes — large components are scanned with reference targets, and reflective surfaces are treated with a removable matting spray.",
      },
    ],
    related: [
      { to: "/services/reverse-engineering", label: "Reverse Engineering" },
      { to: "/services/cad-cam-design", label: "CAD/CAM Design" },
      { to: "/quality", label: "Quality & Inspection" },
    ],
  }),
  make({
    slug: "cad-cam-design",
    name: "CAD/CAM Design",
    title: "CAD/CAM design and manufacturing engineering",
    lead: "Production-ready 3D models, drawings and toolpaths — DFM feedback that removes cost before the first chip is cut.",
    metaTitle: "CAD/CAM Design & Manufacturing Engineering | Merjan Tooling Craft",
    metaDescription:
      "CAD modelling, GD&T drawings, DFM review and CAM programming with toolpath simulation for CNC machining, die casting and mold tooling projects.",
    image: imgCad,
    imageAlt: "Engineer reviewing a 3D CAD model and CAM toolpath simulation",
    overview: [
      "Most manufacturing cost is committed at the design stage. Our engineering team reviews every incoming model for wall thickness, radii, tolerance stack, fixturing and tool access, then reports what can be relaxed without affecting function.",
      "CAM programming is done with full machine kinematics and collision simulation, so the first component off the machine is a good one and set-up time on the shop floor is minimised.",
      "We work from STEP, IGES, Parasolid, DWG, DXF and native files, and return controlled drawings with GD&T where inspection needs an unambiguous datum scheme.",
    ],
    quickSpecs: [
      ["CAD formats", "STEP, IGES, X_T, DWG, DXF"],
      ["Drawings", "ISO GD&T, 2D control drawings"],
      ["CAM", "3, 4 and 5-axis with simulation"],
      ["DFM review", "Included with every quote"],
    ],
    capabilities: [
      "3D part and assembly modelling",
      "Manufacturing drawings with GD&T",
      "Design for manufacture and assembly review",
      "Tolerance stack-up analysis",
      "3, 4 and 5-axis CAM programming",
      "Fixture and workholding design",
    ],
    advantages: [
      {
        title: "Cost engineered out early",
        body: "A DFM report lists which features drive cost and what the alternative is, before tooling is committed.",
      },
      {
        title: "Simulated before cutting",
        body: "Toolpaths are verified against machine kinematics, eliminating collisions and scrapped first articles.",
      },
      {
        title: "Drawings inspection can use",
        body: "Datum schemes and GD&T are written so the CMM programme and the drawing agree.",
      },
    ],
    applications: [
      "New product development support",
      "Machining programme development",
      "Legacy drawing modernisation",
      "Fixture and gauge design",
      "Tooling and mold design",
      "Engineering change implementation",
    ],
    faqs: [
      {
        q: "Can you work from a 2D drawing only?",
        a: "Yes. We model from drawings, sketches or a physical sample and return a 3D model for your approval before manufacture.",
      },
      {
        q: "Is my design data confidential?",
        a: "Yes. NDAs are signed on request and customer data is stored on access-controlled systems and never shared.",
      },
      {
        q: "Do you charge for DFM feedback?",
        a: "No. A DFM review accompanies every quotation as standard.",
      },
    ],
    related: [
      { to: "/services/product-development", label: "Product Development" },
      { to: "/services/3d-scanning", label: "3D Scanning" },
      { to: "/resources/design-tips", label: "Design Tips" },
    ],
  }),
  make({
    slug: "product-development",
    name: "Product Development",
    title: "Product development from concept sketch to qualified production part",
    lead: "Concept engineering, prototyping, tooling and validation managed as one programme, with a single engineering team accountable end to end.",
    metaTitle: "Product Development & Engineering Services | Merjan Tooling Craft",
    metaDescription:
      "End-to-end product development: concept engineering, DFM, prototyping, tooling, validation and production launch under one precision manufacturing roof.",
    image: imgProto,
    imageAlt: "Prototype and production components side by side on a workbench",
    overview: [
      "Development programmes fail at handovers. Merjan Tooling Craft removes them by keeping concept engineering, prototyping, tooling and production inside one facility and one project team.",
      "A typical programme moves from concept review and DFM, through machined functional prototypes, to soft tooling, validation builds and finally production tooling — with the same engineers on the file throughout.",
      "Each phase gate produces documentation: DFM report, prototype inspection results, tool design approval, first-article report and a process sheet for production.",
    ],
    quickSpecs: [
      ["Phases", "Concept → prototype → tooling → production"],
      ["Prototype lead time", "From 5 working days"],
      ["Documentation", "DFM, FAI, process sheet"],
      ["Team", "Dedicated project engineer"],
    ],
    capabilities: [
      "Concept engineering and feasibility studies",
      "Functional prototypes in production materials",
      "Soft tooling for validation volumes",
      "Design iteration with measured feedback",
      "Production tooling and process validation",
      "Launch support and capacity ramp",
    ],
    advantages: [
      {
        title: "One accountable team",
        body: "No supplier-to-supplier handovers between prototype, tool and production — the same engineers own the outcome.",
      },
      {
        title: "Prototypes in real material",
        body: "Functional testing happens on parts made from the alloy the production part will use, not a stand-in.",
      },
      {
        title: "Tooling ready when design freezes",
        body: "Tool design runs in parallel with validation so production is not waiting weeks after sign-off.",
      },
    ],
    applications: [
      "New industrial and consumer products",
      "Machinery subassembly development",
      "Localisation of imported components",
      "Cost-down redesign of existing parts",
      "Test rigs and pre-production fixtures",
      "Product families and variant tooling",
    ],
    faqs: [
      {
        q: "Do you sign NDAs?",
        a: "Yes, before any technical data is exchanged if you prefer. Confidentiality is standard on all development work.",
      },
      {
        q: "Who owns the tooling and IP?",
        a: "The customer owns their design IP and any tooling they have paid for. Tools can be shipped out at any time.",
      },
      {
        q: "Can you help with a design that isn't finished?",
        a: "Yes — many programmes start from a sketch, a functional requirement or a sample part we reverse engineer.",
      },
    ],
    related: [
      { to: "/services/rapid-prototyping", label: "Rapid Prototyping" },
      { to: "/services/cad-cam-design", label: "CAD/CAM Design" },
      { to: "/prototyping-to-production", label: "Prototyping to Production" },
    ],
  }),
  make({
    slug: "rapid-prototyping",
    name: "Rapid Prototyping",
    title: "Rapid prototyping in production materials, in days",
    lead: "CNC-machined functional prototypes and low-volume bridge parts that behave like the production component — because they are made the same way.",
    metaTitle: "Rapid Prototyping Services — Machined Prototypes | Merjan Tooling Craft",
    metaDescription:
      "Functional CNC machined prototypes in aluminium, steel, stainless and engineering plastics from 5 working days, with inspection data and DFM feedback.",
    image: imgProto,
    imageAlt: "Machined prototype components ready for functional testing",
    overview: [
      "Prototypes only de-risk a programme if they behave like the real part. Machined prototypes in production alloys give true strength, thermal behaviour, surface finish and fit — data that additive samples cannot provide.",
      "Merjan Tooling Craft runs prototype work through the same machines, inspection equipment and engineers as production, so learning transfers directly into the production process.",
      "Iterations are quoted quickly and cut from the revised model without re-tooling, keeping design loops measured in days.",
    ],
    quickSpecs: [
      ["Lead time", "From 5 working days"],
      ["Quantities", "1 to 500 parts"],
      ["Materials", "Production alloys and plastics"],
      ["Inspection", "Dimensional report included"],
    ],
    capabilities: [
      "Functional machined prototypes",
      "Bridge production before tooling is ready",
      "Iterative design revisions",
      "Cosmetic samples with production finishes",
      "Assemblies and fit-check builds",
      "Pilot batches for field trials",
    ],
    advantages: [
      {
        title: "Real material properties",
        body: "Test strength, wear, sealing and thermal behaviour on the alloy you intend to ship.",
      },
      {
        title: "Straight path to volume",
        body: "The same fixtures, programmes and inspection scheme scale into production without requalification.",
      },
      {
        title: "Fast, measured iterations",
        body: "Each revision arrives with dimensional data, so design decisions are made on evidence.",
      },
    ],
    applications: [
      "Design verification builds",
      "Trade show and investor samples",
      "Field trial units",
      "Pre-tooling bridge volumes",
      "Fit and interface checks",
      "Test rig components",
    ],
    faqs: [
      {
        q: "How fast can you deliver a prototype?",
        a: "Simple machined parts ship in about five working days; complex multi-set-up components typically take 7–12 days.",
      },
      {
        q: "Can prototypes be finished cosmetically?",
        a: "Yes — anodising, plating, powder coating, bead blasting and polishing are all available.",
      },
      {
        q: "Will the production part be identical?",
        a: "Dimensionally yes. Where volume moves the part to casting or molding, we highlight the design changes required.",
      },
    ],
    related: [
      { to: "/services/product-development", label: "Product Development" },
      { to: "/services/cnc-machining", label: "CNC Machining" },
      { to: "/prototyping-to-production", label: "Prototyping to Production" },
    ],
  }),
  make({
    slug: "precision-components",
    name: "Precision Components",
    title: "Precision components manufactured to drawing, batch after batch",
    lead: "Close-tolerance shafts, housings, bushings, manifolds and mechanism parts produced with documented inspection and repeatable process control.",
    metaTitle: "Precision Component Manufacturing | Merjan Tooling Craft",
    metaDescription:
      "Close-tolerance precision components in aluminium, stainless, tool steel and engineering plastics — machined, ground, finished and inspected to ±0.005 mm.",
    image: imgParts,
    imageAlt: "Array of precision machined components in aluminium, steel and brass",
    overview: [
      "Precision component work is repeat business, and repeat business depends on process capability rather than heroics. Fixtures, programmes, tooling and inspection routines are documented per part number and reused on every order.",
      "We manufacture rotational and prismatic components from bar, plate, casting and forging, combining turning, milling, grinding and EDM where a single process cannot deliver the specification.",
      "Batch records, material certificates and dimensional reports accompany deliveries where the application demands traceability.",
    ],
    quickSpecs: [
      ["Tolerances", "To ±0.005 mm"],
      ["Batch sizes", "1 to 50,000"],
      ["Surface finish", "To Ra 0.2 µm"],
      ["Traceability", "Material certs and FAI"],
    ],
    capabilities: [
      "Shafts, spindles, pins and bushings",
      "Housings, manifolds and valve bodies",
      "Mechanism and linkage components",
      "Threaded and sealed hydraulic parts",
      "Thin-wall and deep-pocket components",
      "Matched sets and mating assemblies",
    ],
    advantages: [
      {
        title: "Documented repeatability",
        body: "Set-up sheets, fixtures and inspection plans are archived per part, so the tenth order runs like the first.",
      },
      {
        title: "Multi-process under one roof",
        body: "Turning, milling, grinding and EDM in one facility removes transit time and inter-supplier tolerance loss.",
      },
      {
        title: "Inspection evidence supplied",
        body: "First-article and in-process data give your incoming inspection something concrete to check against.",
      },
    ],
    applications: [
      "Hydraulic and pneumatic components",
      "Motion and automation hardware",
      "Instrument and sensor bodies",
      "Pump and compressor parts",
      "Gearbox and drivetrain components",
      "Aerospace and defence detail parts",
    ],
    faqs: [
      {
        q: "Do you hold stock for repeat orders?",
        a: "Yes — call-off agreements and buffer stock arrangements are available for regular part numbers.",
      },
      {
        q: "What inspection equipment do you use?",
        a: "CMM, height gauges, bore gauges, profile projectors, surface roughness testers and calibrated hand metrology.",
      },
      {
        q: "Can you manage surface treatment?",
        a: "Yes. Anodising, plating, passivation, heat treatment and coating are managed through approved partners.",
      },
    ],
    related: [
      { to: "/services/cnc-machining", label: "CNC Machining" },
      { to: "/services/surface-grinding", label: "Surface Grinding" },
      { to: "/quality", label: "Quality & Inspection" },
    ],
  }),
  make({
    slug: "custom-manufacturing",
    name: "Custom Manufacturing",
    title: "Custom manufacturing programmes managed end to end",
    lead: "Multi-process builds, assemblies and supply agreements — engineered, manufactured, inspected, assembled and shipped as a finished deliverable.",
    metaTitle: "Custom Manufacturing & Contract Production | Merjan Tooling Craft",
    metaDescription:
      "Custom contract manufacturing: multi-process builds, sub-assembly, finishing, inspection and scheduled delivery managed by one engineering team.",
    image: imgProduction,
    imageAlt: "Production cell manufacturing a batch of engineered components",
    overview: [
      "Some requirements do not fit a single process. Custom manufacturing programmes at Merjan Tooling Craft combine machining, casting, tooling, finishing and assembly into one managed supply, with a single point of contact and one delivery schedule.",
      "We take responsibility for the whole bill of materials — including bought-in hardware and outsourced treatments — so what arrives on your dock is a finished, inspected assembly rather than a box of parts to reconcile.",
      "Scheduled call-off agreements, kanban replenishment and buffer stock keep long-running programmes predictable.",
    ],
    quickSpecs: [
      ["Model", "Contract & call-off supply"],
      ["Scope", "Parts, treatment, assembly, packing"],
      ["Volumes", "Pilot to series production"],
      ["Reporting", "Batch records and FAI"],
    ],
    capabilities: [
      "Multi-process component manufacture",
      "Sub-assembly and mechanical assembly",
      "Sourcing of bought-in hardware",
      "Managed surface treatment and finishing",
      "Kitting, labelling and custom packaging",
      "Scheduled call-off and buffer stock",
    ],
    advantages: [
      {
        title: "One supplier, one schedule",
        body: "Vendor management, treatment logistics and inspection are handled by us, not by your buyers.",
      },
      {
        title: "Assembly-ready deliveries",
        body: "Parts arrive kitted, labelled and inspected, ready to go straight to your line.",
      },
      {
        title: "Predictable capacity",
        body: "Call-off agreements reserve machine time, protecting your programme from spot-market lead times.",
      },
    ],
    applications: [
      "OEM sub-assemblies",
      "Machinery build kits",
      "Aftermarket and spare part programmes",
      "Localisation of imported assemblies",
      "Low-volume, high-mix supply",
      "Long-term series production",
    ],
    faqs: [
      {
        q: "Can you manage outsourced processes?",
        a: "Yes. Heat treatment, plating, anodising, painting and specialist welding are managed through audited partners.",
      },
      {
        q: "Do you offer long-term agreements?",
        a: "Yes — annual pricing agreements with scheduled call-offs and buffer stock are common for series work.",
      },
      {
        q: "Can you export internationally?",
        a: "Yes. We export regularly and handle documentation, packaging standards and freight coordination.",
      },
    ],
    related: [
      { to: "/services/production", label: "On-Demand Production" },
      { to: "/services/precision-components", label: "Precision Components" },
      { to: "/contact", label: "Talk to our team" },
    ],
  }),
];

export const EXTRA_SERVICE_MAP: Record<string, ServiceContent> = Object.fromEntries(
  EXTRA_SERVICES.map((s) => [s.slug, s]),
);

export const SERVICE_INDEX = [
  { to: "/services/cnc-machining", label: "CNC Machining", img: imgMilling },
  { to: "/services/cnc-machining/cnc-milling", label: "CNC Milling", img: imgMilling },
  { to: "/services/cnc-machining/cnc-turning", label: "CNC Turning", img: imgTurning },
  { to: "/services/wire-edm", label: "Wire EDM", img: imgWireEdm },
  { to: "/services/surface-grinding", label: "Surface Grinding", img: imgGrinding },
  { to: "/services/tool-and-die", label: "Tool & Die Manufacturing", img: imgToolDie },
  {
    to: "/services/injection-mold-manufacturing",
    label: "Injection Mold Manufacturing",
    img: imgMold,
  },
  { to: "/services/plastic-injection-molding", label: "Plastic Injection Molding", img: imgMolding },
  { to: "/services/die-casting", label: "High-Pressure Die Casting", img: imgProduction },
  { to: "/services/reverse-engineering", label: "Reverse Engineering", img: imgScan },
  { to: "/services/3d-scanning", label: "3D Scanning", img: imgScan },
  { to: "/services/cad-cam-design", label: "CAD/CAM Design", img: imgCad },
  { to: "/services/product-development", label: "Product Development", img: imgProto },
  { to: "/services/rapid-prototyping", label: "Rapid Prototyping", img: imgProto },
  { to: "/services/precision-components", label: "Precision Components", img: imgParts },
  { to: "/services/custom-manufacturing", label: "Custom Manufacturing", img: imgProduction },
  { to: "/services/led-lights", label: "LED Lighting", img: imgProduction },
  { to: "/services/production", label: "On-Demand Production", img: imgProduction },
];
