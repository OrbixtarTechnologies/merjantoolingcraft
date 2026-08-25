import { createFileRoute } from "@tanstack/react-router";
import { MaterialPageTemplate } from "@/components/material-page";
import { MATERIAL_MAP } from "@/data/materials";
import { breadcrumbSchema, seo } from "@/components/page-blocks";

const M = MATERIAL_MAP["bronze"];

export const Route = createFileRoute("/materials/bronze")({
  head: () => ({
    ...seo(M.metaTitle, M.metaDescription, "/materials/bronze"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Materials", path: "/materials" },
        { name: M.name, path: "/materials/bronze" },
      ]),
    ],
  }),
  component: () => <MaterialPageTemplate m={M} />,
});
