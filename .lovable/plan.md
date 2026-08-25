## Stack note

The project runs on TanStack Start (React 19 + TypeScript + Tailwind v4 + shadcn/ui) — Lovable's supported full-stack React framework. It gives the same SSR, routing, SEO and server-function capabilities as Next.js; I'll build everything requested on it. Framer Motion (`motion`) will be added for animation. Everything else in your brief is achievable as written.

## What already exists (30 pages)

Home, About, Services hub + CNC milling/turning, die casting (+quality), reverse engineering, LED lights, production, 10 industry pages, Materials hub + die-casting alloys, Capabilities, Quality, Certifications, Case Studies, FAQ, Resources (3), Prototyping-to-Production, Quote, Contact, sitemap, robots, WhatsApp + chat widget.

## Phase 1 — Design system + motion layer

- Retune tokens in `src/styles.css` to the premium palette: dark navy, steel gray, industrial orange accent, white/light surfaces; softer shadows, wider whitespace scale, refined type ramp (Figtree display + IBM Plex Mono for technical data).
- Add `motion` and a small animation kit: `<Reveal>` (scroll reveal), `<Counter>` (animated stats), page transition wrapper, hover/micro-interaction utilities — all respecting `prefers-reduced-motion`.
- Upgrade shared blocks in `page-blocks.tsx`: hero variants, testimonial carousel, logo/trust strip, breadcrumb component (with BreadcrumbList schema), sticky "Request Quote" bar.

## Phase 2 — Homepage rebuild

Full-screen animated hero ("Engineering Precision. Manufacturing Excellence."), scroll indicator, trusted-by strip, animated statistics (years, projects, countries, machines, customers, quality rate), services, industries, 7-step process, why-us, equipment preview, featured projects, testimonials, latest articles, CTA banner, upgraded footer (quick links, services, industries, materials, resources, downloads, legal, newsletter, socials).

## Phase 3 — Services expansion

Keep existing pages, add: Wire EDM, Surface Grinding, Tool & Die Manufacturing, Injection Mold Manufacturing, Plastic Injection Molding, 3D Scanning, CAD/CAM Design, Product Development, Precision Components, Rapid Prototyping, Custom Manufacturing. Every service page: overview, capabilities, advantages, materials, tolerances, machine specs, applications, industries, gallery, FAQs (FAQ schema), related services, CTA, unique metadata.

## Phase 4 — Industries + Materials

- Add Agriculture and Consumer Products; standardize all 12 industry pages to the fuller template.
- Material pages: Aluminum, Stainless Steel, Tool Steel, Titanium, Brass, Copper, Bronze, Delrin, PEEK, ABS, Polycarbonate, Nylon, Mild Steel — each with properties table, applications, advantages, machining tips, gallery, related services.

## Phase 5 — Proof & content pages

Equipment (machine cards with axis/accuracy/travel/capacity), Factory (facility tour + timeline), Projects (filterable portfolio with technical data), 6 detailed Case Studies, Gallery (lightbox), Downloads (capability statement, profile, brochure, machine list, quality manual, certificates), Blog (index, categories, search, reading time, article pages, related posts), Careers, expanded Quality page.

## Phase 6 — Conversion, legal, SEO, a11y

- RFQ page rebuild: name, company, email, phone, country, industry, material, quantity, tolerance, surface finish, lead time, message, drag-and-drop CAD upload (STEP/STP/IGES/DXF/DWG/PDF/ZIP), zod validation, success page.
- Contact: map placeholder, hours, phone, email, WhatsApp, socials, form.
- Privacy Policy, Terms, Cookies, custom 404.
- SEO: per-route metadata, Organization/FAQ/Breadcrumb/Article schema, OG + Twitter, canonicals, regenerated sitemap, internal linking.
- Accessibility pass (WCAG AA): landmarks, ARIA labels, focus states, contrast, keyboard nav.
- Performance: lazy loading, responsive images, code splitting, font optimization.

## Imagery

New premium industrial photography generated per page (equipment, factory, materials, projects, blog covers), reusing the 24 existing images where they already fit.

## Technical details

- Routes are file-based under `src/routes/`; content-heavy sections are driven by typed data modules (`src/data/services.ts`, `materials.ts`, `equipment.ts`, `projects.ts`, `blog.ts`) rendered through shared templates, so pages stay consistent and easy to extend.
- Downloads ship as generated placeholder PDFs; the RFQ form is client-side until you want submissions stored — say the word and I'll wire Lovable Cloud for RFQ storage, file uploads and email notifications.

I'll work through the phases in order and report after each.