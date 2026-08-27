import { SectionHeader } from "./About";

type Project = {
  name: string;
  blurb: string;
  stack: string[];
  metric: { label: string; value: string };
  status: "production" | "beta" | "open-source";
  span: string;
  url: string;
  accent?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Nomix",
    blurb:
      "Webisida för Nomix, hjälpa småföretag att digitalisera sin verksamhet med moderna webblösningar.",
    stack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    metric: { label: "", value: "" },
    status: "production",
    span: "md:col-span-4 md:row-span-2",
    url: "https://nomix.se",
    accent: true,
  },
  {
    name: "SwingIT",
    blurb: "Golfapplikation med klubbdistanser, scorekort och statistik.",
    stack: ["ASP.NET Core", "EF Core", "Postgres", "React"],
    metric: { label: "", value: "" },
    status: "production",
    span: "md:col-span-2",
    url: "https://swingit.netlify.app/",
  },
  {
    name: "Taekwondo Quiz",
    blurb: "Quizapplikation för yngre Taekwondo-utövare att träna på teori, regler och historia.",
    stack: ["React", "TypeScript", "CSS", "HTML"],
    metric: { label: "", value: "" },
    status: "production",
    span: "md:col-span-2",
    url: "https://tkdquiz.netlify.app/",
  },
  {
    name: "Vain Golv",
    blurb: "Webisida för Vain Golv, ett golvföretag i Göteborg som erbjuder golvläggning och golvslipning.",
    stack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    metric: { label: "", value: "" },
    status: "beta",
    span: "md:col-span-2",
    url: "",
  },
  {
    name: "??",
    blurb: "??",
    stack: ["GitHub Actions", "Bicep", "TypeScript"],
    metric: { label: "", value: "" },
    status: "open-source",
    span: "md:col-span-2",
    url: "",
  },
];

const statusColors: Record<Project["status"], string> = {
  production: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  beta: "text-amber-300 border-amber-300/30 bg-amber-300/5",
  "open-source": "text-sky-300 border-sky-300/30 bg-sky-300/5",
};

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="02" title="projects" caption="// vad jag har byggt" />

        <div className="mt-12 grid gap-5 md:grid-cols-6 md:auto-rows-[180px]">
          {PROJECTS.map((p, i) => (
            <article
                key={p.name}
                className={`bento group relative p-6 ${p.span} ${
                  p.accent ? "md:p-10" : ""
                }`}
              >
              {p.accent && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(600px 200px at 20% 0%, color-mix(in oklab, var(--ember) 25%, transparent), transparent 70%)",
                  }}
                  aria-hidden
                />
              )}

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span className="text-ember">{String(i + 1).padStart(2, "0")}</span>
                    <span>/</span>
                    <span>project</span>
                  </div>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${statusColors[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <h3
                  className={`mt-3 font-bold text-foreground ${
                    p.accent ? "text-4xl md:text-5xl" : "text-2xl"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-2 text-muted-foreground ${
                    p.accent ? "text-base md:text-lg max-w-xl" : "text-sm"
                  }`}
                >
                  {p.blurb}
                </p>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border bg-background/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {p.metric.label}
                      </p>
                      <p className="font-mono text-xl font-bold text-foreground">
                        {p.metric.value}
                      </p>
                    </div>
                    <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-xs text-muted-foreground transition-colors hover:text-ember"
                      >
                        visit site →
                      </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
