import { createFileRoute } from "@tanstack/react-router";
import careersTeam from "@/assets/careers-team.jpg";
import {
  Breadcrumbs,
  Bullets,
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

const TITLE = "Careers — Join Merjan Tooling Craft | Precision Manufacturing Jobs";
const DESC =
  "Careers at Merjan Tooling Craft: CNC machinist, CNC programmer, toolmaker, quality inspector and CAD engineer roles in a precision manufacturing facility in Lahore.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    ...seo(TITLE, DESC, "/careers"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers" },
      ]),
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  {
    title: "CNC Machinist (Milling)",
    type: "Full time · Lahore",
    body: "Set up and operate 3, 4 and 5-axis machining centres on prototype and production work. Read engineering drawings, hold tolerance and record in-process inspection.",
    reqs: ["3+ years on VMC set-up", "Drawing and GD&T literacy", "Micrometer and gauge competence"],
  },
  {
    title: "CNC Programmer (CAM)",
    type: "Full time · Lahore",
    body: "Programme milling and turning operations in Mastercam or Fusion, design fixturing, and support DFM feedback during quoting.",
    reqs: ["CAM experience on 4/5-axis", "Solid CAD modelling skills", "Toolpath optimisation mindset"],
  },
  {
    title: "Toolmaker / Die Maker",
    type: "Full time · Lahore",
    body: "Build and repair progressive dies, die casting dies and injection moulds, working with wire EDM, sinker EDM and surface grinding.",
    reqs: ["5+ years in a tool room", "EDM and grinding experience", "Precision fitting and assembly"],
  },
  {
    title: "Quality Inspector (CMM)",
    type: "Full time · Lahore",
    body: "Run first-article and in-process inspection on CMM and optical systems, produce measurement reports and maintain calibration records.",
    reqs: ["CMM programming experience", "ISO-style documentation", "Strong GD&T interpretation"],
  },
  {
    title: "Mechanical Design Engineer",
    type: "Full time · Lahore",
    body: "Support product development and reverse engineering projects: parametric CAD, tolerance stack-ups, prototype iteration and production release.",
    reqs: ["SolidWorks proficiency", "DFM knowledge", "Scan-to-CAD experience an advantage"],
  },
  {
    title: "Apprentice Machinist",
    type: "Apprenticeship · Lahore",
    body: "Structured entry route into precision manufacturing with rotation through machining, tool room, finishing and inspection under supervision.",
    reqs: ["Technical diploma or equivalent", "Careful, methodical approach", "Willingness to learn"],
  },
];

function CareersPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />
      <PageHero
        eyebrow="Careers"
        title="Build precision parts with us"
        lead="Merjan Tooling Craft is a place for people who care about the last hundredth of a millimetre — machinists, toolmakers, programmers and engineers who take pride in what leaves the door."
        image={careersTeam}
        imageAlt="Manufacturing engineers working together on the shop floor"
      />

      <Section eyebrow="Culture" title="What working here is like">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Prose>
            <p>
              We are an engineering-led business, not a volume job shop. That means people here are
              expected to think about the part, question a drawing that will not work, and suggest a
              better route — and that input genuinely reaches the customer.
            </p>
            <p>
              Because tooling, machining, casting and inspection all happen under one roof, careers
              here broaden quickly. A machinist who wants to learn programming, or an inspector who
              wants to move into quality engineering, can do it without changing employer.
            </p>
            <p>
              Training is on the job and continuous, safety discipline is non-negotiable, and pay is
              reviewed against skill progression rather than time served.
            </p>
          </Prose>
          <div className="surface-card p-6">
            <p className="label-eyebrow">What we offer</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Competitive salary reviewed on skill",
                "Structured training and machine sign-off",
                "Modern, well-maintained equipment",
                "Clear progression across departments",
                "Safe, organised working environment",
                "Stable, long-established employer",
              ].map((b) => (
                <li key={b} className="border-b border-border pb-2 last:border-b-0">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section muted eyebrow="Open roles" title="Positions we recruit for">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col surface-card p-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-primary">
                  {r.type}
                </p>
                <h2 className="mt-2 text-lg">{r.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  {r.reqs.map((q) => (
                    <li key={q} className="flex gap-2">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                      {q}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${CONTACT.emailHref}?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                  className="btn-primary mt-5 w-full"
                >
                  Apply for this role
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Applying" title="How to apply">
        <Bullets
          items={[
            "Email your CV to inquiry@merjantoolingcraft.com with the role in the subject line",
            "Include the machines, controls and CAM systems you have worked with",
            "Tell us about a part or tool you are proud of and why it was difficult",
            "Shortlisted candidates complete a practical assessment on the shop floor",
            "Speculative applications are welcome — we keep strong CVs on file",
            "Apprentices: apply any time; intakes run twice a year",
          ]}
        />
      </Section>

      <RelatedLinks
        title="Learn more about us"
        items={[
          { to: "/about", label: "About Merjan" },
          { to: "/factory", label: "Factory tour" },
          { to: "/equipment", label: "Equipment" },
          { to: "/contact", label: "Contact" },
        ]}
      />

      <CTABand
        title="Interested in joining the team?"
        body="Send your CV and we will get back to you — we are always interested in skilled machinists and toolmakers, even between advertised vacancies."
      />
    </>
  );
}
