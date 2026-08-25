import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page";
import { EXTRA_SERVICE_MAP } from "@/data/services";
import { breadcrumbSchema, faqSchema, seo } from "@/components/page-blocks";

const S = EXTRA_SERVICE_MAP["precision-components"];

export const Route = createFileRoute("/services/precision-components")({
  head: () => ({
    ...seo(S.metaTitle, S.metaDescription, S.path),
    scripts: [
      faqSchema(S.faqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: S.name, path: S.path },
      ]),
    ],
  }),
  component: () => <ServicePageTemplate s={S} />,
});
