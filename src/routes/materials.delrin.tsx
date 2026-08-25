import { createFileRoute } from "@tanstack/react-router";
import { MaterialPageTemplate } from "@/components/material-page";
import { MATERIAL_MAP } from "@/data/materials";
import { breadcrumbSchema, seo } from "@/components/page-blocks";

const M = MATERIAL_MAP["delrin"];

export const Route = createFileRoute("/materials/delrin")({
  head: () => ({
    ...seo(M.metaTitle, M.metaDescription, "/materials/delrin"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Materials", path: "/materials" },
        { name: M.name, path: "/materials/delrin" },
      ]),
    ],
  }),
  component: () => <MaterialPageTemplate m={M} />,
});
