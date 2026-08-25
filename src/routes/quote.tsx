import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const TITLE = "Request a Quote — Merjan Tooling Craft";
const DESC =
  "Submit your CNC machining, die casting or reverse engineering request and the Merjan Tooling Craft team will respond with a tailored solution.";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const PROCESSES = [
  "CNC Milling",
  "CNC Turning",
  "Reverse Engineering / 3D Scanning",
  "High-Pressure Die Casting",
  "LED Lights",
  "Not sure yet",
];

function QuotePage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="label-eyebrow">Request a quote</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Submit your request</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Share a few details about your component and a member of the Merjan Tooling Craft team
          will reach out to discuss materials, tooling and lead time.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
          {[
            "Direct reply from an engineer, not a call centre",
            "Advice on the most economical process for your part",
            "Drawings, CAD models and physical samples all welcome",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-border bg-card p-6 md:p-8">
        {sent ? (
          <div className="py-16 text-center">
            <CheckCircle2 className="mx-auto size-10 text-primary" />
            <h2 className="mt-4 text-2xl">Request received</h2>
            <p className="mt-2 text-muted-foreground">
              Thank you — a member of our team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label-eyebrow">First name</span>
                <input required className="field mt-2" name="first" placeholder="First name" />
              </label>
              <label className="block">
                <span className="label-eyebrow">Last name</span>
                <input required className="field mt-2" name="last" placeholder="Last name" />
              </label>
            </div>
            <label className="block">
              <span className="label-eyebrow">Company email</span>
              <input
                required
                type="email"
                className="field mt-2"
                name="email"
                placeholder="name@company.com"
              />
            </label>
            <label className="block">
              <span className="label-eyebrow">Phone (optional)</span>
              <input className="field mt-2" name="phone" placeholder="Phone number" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label-eyebrow">Material</span>
                <input className="field mt-2" name="material" placeholder="e.g. Aluminium 6061" />
              </label>
              <label className="block">
                <span className="label-eyebrow">Quantity</span>
                <input className="field mt-2" name="quantity" placeholder="e.g. 25 pcs" />
              </label>
              <label className="block">
                <span className="label-eyebrow">Tolerance</span>
                <input className="field mt-2" name="tolerance" placeholder="e.g. ±0.02 mm" />
              </label>
              <label className="block">
                <span className="label-eyebrow">Required lead time</span>
                <input className="field mt-2" name="lead" placeholder="e.g. 3 weeks" />
              </label>
            </div>
            <label className="block">
              <span className="label-eyebrow">Upload CAD file (STEP, IGES, STL, DWG, PDF)</span>
              <input
                type="file"
                multiple
                accept=".step,.stp,.iges,.igs,.stl,.dwg,.dxf,.pdf,.zip"
                className="field mt-2 file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-1 file:font-display file:text-xs file:font-bold file:uppercase file:text-primary-foreground"
                name="cad"
              />
              <span className="mt-2 block text-xs text-muted-foreground">
                Large assemblies? Email them to inquiry@merjantoolingcraft.com and reference your name.
              </span>
            </label>
            <label className="block">
              <span className="label-eyebrow">Project description</span>
              <textarea
                required
                maxLength={2000}
                rows={4}
                className="field mt-2"
                name="project"
                placeholder="Part function, quantity, material and required date."
              />
            </label>
            <fieldset>
              <legend className="label-eyebrow">Services of interest</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROCESSES.map((p) => (
                  <label
                    key={p}
                    className="flex cursor-pointer items-center gap-2 border border-border bg-steel px-3 py-2 text-sm has-[:checked]:border-primary"
                  >
                    <input type="checkbox" name="process" value={p} className="accent-primary" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="submit" className="btn-primary w-full">
              Submit your request now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
