import { createFileRoute } from "@tanstack/react-router";
import svcScanning from "@/assets/certifications.jpg";
import { CTABand, CardGrid, PageHero, Prose, Section, seo } from "@/components/page-blocks";

export const Route = createFileRoute("/certifications")({
  head: () =>
    seo(
      "Quality Certifications & Compliance — Merjan Tooling Craft",
      "Merjan Tooling Craft quality standards, inspection documentation, material certification and compliance information for buyers and quality teams.",
      "/certifications",
    ),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="Quality / Certifications"
        title="Certifications & compliance"
        lead="What we certify, what we document and what we can supply with your parts — stated plainly so your quality team knows exactly what to expect."
        image={svcScanning}
        imageAlt="Dimensional inspection of a machined component"
      />

      <Section title="Documentation supplied with your parts">
        <CardGrid
          cols={3}
          items={[
            { title: "Dimensional inspection report", tag: "Every batch", body: "Measured results against the drawing's critical dimensions, signed and dated before release." },
            { title: "First Article Inspection (FAI)", tag: "On request", body: "Full feature-by-feature verification of the first part from a new or revised program." },
            { title: "Material certificates", tag: "On request", body: "Mill certificates retained and issued for the material batch used on your order." },
            { title: "CMM reports", tag: "On request", body: "Coordinate-measured results for tight-tolerance and complex geometry." },
            { title: "Surface finish records", tag: "On request", body: "Measured Ra values on sealing, bearing and cosmetic faces." },
            { title: "Certificate of conformity", tag: "On request", body: "Declaration that supplied parts conform to the agreed drawing revision and specification." },
          ]}
        />
      </Section>

      <Section muted title="Standards we work to">
        <Prose>
          <p>
            Our quality management procedures are structured on the principles of ISO 9001:
            controlled drawing revisions, documented inspection plans, calibrated measuring
            equipment, traceable material batches and recorded corrective action.
          </p>
          <p>
            Where your programme requires certification to a specific standard — ISO 9001, ISO
            14001, RoHS or REACH declarations, or customer-specific quality requirements — contact
            us with the scope and we will confirm in writing exactly which certificates and
            declarations we can currently provide for your order.
          </p>
          <p>
            We publish only what we can evidence. If a certificate is not listed above, ask us
            directly rather than assuming coverage.
          </p>
        </Prose>
      </Section>

      <Section title="Request our documentation pack">
        <Prose>
          <p>
            Quality teams evaluating Merjan Tooling Craft as a supplier can request our company
            profile, capability statement, machine list and quality procedure summary. Email{" "}
            <a className="text-primary underline" href="mailto:inquiry@merjantoolingcraft.com">
              inquiry@merjantoolingcraft.com
            </a>{" "}
            and we will send the current pack.
          </p>
        </Prose>
      </Section>

      <CTABand title="Need a supplier assessment pack?" body="Tell us which certificates, procedures and inspection evidence your approval process requires." />
    </>
  );
}
