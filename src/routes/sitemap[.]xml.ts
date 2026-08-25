import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://merjantoolingcraft.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/services/cnc-machining", changefreq: "monthly", priority: "0.9" },
          { path: "/services/cnc-machining/cnc-milling", changefreq: "monthly", priority: "0.8" },
          { path: "/services/cnc-machining/cnc-turning", changefreq: "monthly", priority: "0.8" },
          { path: "/services/die-casting", changefreq: "monthly", priority: "0.9" },
          { path: "/services/die-casting/quality", changefreq: "monthly", priority: "0.7" },
          { path: "/services/reverse-engineering", changefreq: "monthly", priority: "0.8" },
          { path: "/services/led-lights", changefreq: "monthly", priority: "0.8" },
          { path: "/services/production", changefreq: "monthly", priority: "0.8" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/industries/automotive", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/aerospace", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/medical", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/consumer-electronics", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/electronics", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/oil-and-gas", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/energy", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/industrial-equipment", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/robotics", changefreq: "monthly", priority: "0.7" },
          { path: "/industries/defence", changefreq: "monthly", priority: "0.7" },
          { path: "/capabilities", changefreq: "monthly", priority: "0.8" },
          { path: "/certifications", changefreq: "monthly", priority: "0.7" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/materials", changefreq: "monthly", priority: "0.8" },
          { path: "/materials/die-casting", changefreq: "monthly", priority: "0.7" },
          { path: "/resources", changefreq: "monthly", priority: "0.7" },
          { path: "/resources/design-tips", changefreq: "monthly", priority: "0.7" },
          { path: "/resources/design-for-machining-toolkit", changefreq: "monthly", priority: "0.7" },
          { path: "/resources/product-life-cycle", changefreq: "monthly", priority: "0.7" },
          { path: "/prototyping-to-production", changefreq: "monthly", priority: "0.8" },
          { path: "/quality", changefreq: "monthly", priority: "0.7" },
          { path: "/about", changefreq: "yearly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          { path: "/quote", changefreq: "yearly", priority: "0.7" },
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
