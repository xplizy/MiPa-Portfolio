import { SectionHeader } from "./About";

type Project = {
  name: string;
  blurb: string;
  stack: string[];
  metric: { label: string; value: string };
  status: "production" | "beta" | "open-source";
  span: string;
  accent?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Helios",
    blurb:
      "Event-driven order platform som processar 2M+ events/dygn över Azure Service Bus och Functions.",
    stack: [".NET 8", "Azure Functions", "Service Bus", "Cosmos DB"],
    metric: { label: "throughput", value: "2M/d" },
    status: "production",
    span: "md:col-span-4 md:row-span-2",
    accent: true,
  },
  {
    name: "Aurora API",
    blurb: "Multi-tenant SaaS-backend med rad-nivå säkerhet och OpenTelemetry.",
    stack: ["ASP.NET Core", "EF Core", "Postgres", "OTel"],
    metric: { label: "p95", value: "42ms" },
    status: "production",
    span: "md:col-span-2",
  },
  {
    name: "Pulse",
    blurb: "Realtidsdashboard på SignalR + Azure SignalR Service för 50k samtidiga.",
    stack: ["SignalR", "Redis", "Bicep"],
    metric: { label: "ccu", value: "50k" },
    status: "beta",
    span: "md:col-span-2",
  },
  {
    name: "kbd-cli",
    blurb: "Open source CLI för QMK-konfiguration. Skrivet i C# med Native AOT.",
    stack: ["C#", "Native AOT", "Spectre.Console"],
    metric: { label: "stars", value: "1.2k" },
    status: "open-source",
    span: "md:col-span-2",
  },
  {
    name: "Forge CI",
    blurb: "Internt verktyg som genererar GitHub Actions-pipelines från Bicep-templates.",
    stack: ["GitHub Actions", "Bicep", "TypeScript"],
    metric: { label: "saved", value: "120h/mån" },
    status: "production",
    span: "md:col-span-2",
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
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-ember">
                      view →
                    </span>
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
