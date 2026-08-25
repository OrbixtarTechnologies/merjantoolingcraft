import { createFileRoute } from "@tanstack/react-router";
import { MaterialPageTemplate } from "@/components/material-page";
import { MATERIAL_MAP } from "@/data/materials";
import { breadcrumbSchema, seo } from "@/components/page-blocks";

const M = MATERIAL_MAP["aluminum"];

export const Route = createFileRoute("/materials/aluminum")({
  head: () => ({
    ...seo(M.metaTitle, M.metaDescription, "/materials/aluminum"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Materials", path: "/materials" },
        { name: M.name, path: "/materials/aluminum" },
      ]),
    ],
  }),
  component: () => <MaterialPageTemplate m={M} />,
});
