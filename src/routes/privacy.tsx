import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, CTABand, PageHero, Prose, Section, breadcrumbSchema, seo } from "@/components/page-blocks";
import { CONTACT } from "@/lib/site-contact";

const TITLE = "Privacy Policy | Merjan Tooling Craft";
const DESC =
  "How Merjan Tooling Craft collects, uses and protects the personal and technical information you share when requesting a quote or contacting us.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...seo(TITLE, DESC, "/privacy"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy" },
      ]),
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="This page is maintained by Merjan Tooling Craft to explain what information we collect through this website and how we handle it."
      />

      <Section title="Information we collect">
        <Prose>
          <p>
            When you submit a quote request or contact form we collect the details you choose to
            provide: your name, company, email address, phone number and the description, drawings
            or CAD files relating to your enquiry. We also receive standard technical information
            that your browser sends, such as IP address, browser type and the pages you visit.
          </p>
        </Prose>
      </Section>

      <Section muted title="How we use it">
        <Prose>
          <p>
            Enquiry information is used solely to prepare and discuss your quotation, manufacture
            your order and maintain the commercial relationship. Technical website information is
            used in aggregate to understand how the site is used and improve it. We do not sell or
            rent your information to anyone.
          </p>
        </Prose>
      </Section>

      <Section title="Your drawings and CAD files">
        <Prose>
          <p>
            Design data you send us is treated as confidential and used only for quoting and
            producing your parts. Access is limited to the engineering, production and quality staff
            who need it. We are happy to sign a non-disclosure agreement before you send anything —
            ask and we will return a signed copy the same working day.
          </p>
        </Prose>
      </Section>

      <Section muted title="Sharing and retention">
        <Prose>
          <p>
            We share information with third parties only where it is necessary to fulfil your order
            — for example a plating subcontractor or a freight forwarder — and only the minimum
            required. Enquiry and order records are retained for as long as needed to support the
            commercial relationship and meet legal and accounting obligations.
          </p>
        </Prose>
      </Section>

      <Section title="Your choices">
        <Prose>
          <p>
            You may ask us what information we hold about you, request corrections, or ask us to
            delete your enquiry records where we are not legally required to keep them. You can also
            ask to stop receiving any communication from us at any time.
          </p>
        </Prose>
      </Section>

      <Section muted title="Contact">
        <Prose>
          <p>
            For any privacy question or request, email{" "}
            <a className="text-primary" href={CONTACT.emailHref}>
              {CONTACT.email}
            </a>{" "}
            or call {CONTACT.phoneDisplay}. This policy may be updated from time to time; the
            current version always appears on this page.
          </p>
        </Prose>
      </Section>

      <CTABand />
    </>
  );
}
