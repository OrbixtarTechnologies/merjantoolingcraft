import { createFileRoute } from "@tanstack/react-router";
import { MaterialPageTemplate } from "@/components/material-page";
import { MATERIAL_MAP } from "@/data/materials";
import { breadcrumbSchema, seo } from "@/components/page-blocks";

const M = MATERIAL_MAP["stainless-steel"];

export const Route = createFileRoute("/materials/stainless-steel")({
  head: () => ({
    ...seo(M.metaTitle, M.metaDescription, "/materials/stainless-steel"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Materials", path: "/materials" },
        { name: M.name, path: "/materials/stainless-steel" },
      ]),
    ],
  }),
  component: () => <MaterialPageTemplate m={M} />,
});
