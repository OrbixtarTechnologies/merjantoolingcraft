import { createFileRoute } from "@tanstack/react-router";
import { MaterialPageTemplate } from "@/components/material-page";
import { MATERIAL_MAP } from "@/data/materials";
import { breadcrumbSchema, seo } from "@/components/page-blocks";

const M = MATERIAL_MAP["tool-steel"];

export const Route = createFileRoute("/materials/tool-steel")({
  head: () => ({
    ...seo(M.metaTitle, M.metaDescription, "/materials/tool-steel"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Materials", path: "/materials" },
        { name: M.name, path: "/materials/tool-steel" },
      ]),
    ],
  }),
  component: () => <MaterialPageTemplate m={M} />,
});
