import { createFileRoute } from "@tanstack/react-router";
import { MaterialPageTemplate } from "@/components/material-page";
import { MATERIAL_MAP } from "@/data/materials";
import { breadcrumbSchema, seo } from "@/components/page-blocks";

const M = MATERIAL_MAP["brass"];

export const Route = createFileRoute("/materials/brass")({
  head: () => ({
    ...seo(M.metaTitle, M.metaDescription, "/materials/brass"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Materials", path: "/materials" },
        { name: M.name, path: "/materials/brass" },
      ]),
    ],
  }),
  component: () => <MaterialPageTemplate m={M} />,
});
