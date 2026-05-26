import { SectionHeader } from "./About";

type Entry = {
  year: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  stack: string[];
  type: "work" | "edu" | "cert";
};

const ENTRIES: Entry[] = [
  {
    year: "2023 — nu",
    role: "Senior .NET Cloud Developer",
    company: "Northwind Cloud AB",
    location: "Stockholm / Remote",
    type: "work",
    bullets: [
      "Tech lead för event-driven plattform på Azure (Functions, Service Bus, Cosmos DB)",
      "Sänkte cold start med 70% via Native AOT och Premium plan-tuning",
      "Införde OpenTelemetry + distributed tracing över 14 tjänster",
    ],
    stack: [".NET 8", "Azure", "Bicep", "OTel"],
  },
  {
    year: "2021 — 2023",
    role: ".NET Backend Developer",
    company: "Lumen Labs",
    location: "Stockholm",
    type: "work",
    bullets: [
      "Byggde multi-tenant SaaS-backend med ASP.NET Core och Postgres",
      "Designade CI/CD-pipelines i Azure DevOps med blue/green deployments",
      "Migrerade legacy WCF-tjänster till gRPC",
    ],
    stack: ["ASP.NET Core", "Postgres", "gRPC"],
  },
  {
    year: "2022",
    role: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    company: "Microsoft",
    location: "Certifiering",
    type: "cert",
    bullets: ["Bekräftad kompetens inom Azure compute, storage, security och monitoring."],
    stack: ["AZ-204"],
  },
  {
    year: "2019 — 2021",
    role: "Software Developer",
    company: "Boreal Systems",
    location: "Göteborg",
    type: "work",
    bullets: [
      "Utvecklade interna verktyg i C# och React",
      "Bidrog till open source-bibliotek för Azure SDK",
    ],
    stack: ["C#", "React", "Azure SDK"],
  },
  {
    year: "2015 — 2019",
    role: "MSc Computer Science",
    company: "KTH Royal Institute of Technology",
    location: "Stockholm",
    type: "edu",
    bullets: ["Specialisering inom distribuerade system och formell verifiering."],
    stack: ["KTH"],
  },
];

const typeBadge: Record<Entry["type"], { label: string; cls: string }> = {
  work: { label: "WORK", cls: "text-ember border-ember/40 bg-ember/10" },
  edu: { label: "EDU", cls: "text-sky-300 border-sky-300/30 bg-sky-300/5" },
  cert: { label: "CERT", cls: "text-emerald-300 border-emerald-300/30 bg-emerald-300/5" },
};

export function Timeline() {
  return (
    <section id="cv" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="03" title="cv" caption="// git log --oneline --all" />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-ember hover:text-ember"
          >
            ⬇ download cv.pdf
          </a>
          <span className="font-mono text-xs text-muted-foreground">
            commit <span className="text-ember">a1c3f0e</span> · HEAD → main
          </span>
        </div>

        <ol className="relative mt-12 ml-3 border-l border-border md:ml-6">
          {ENTRIES.map((e, idx) => (
            <li key={idx} className="group relative pl-8 pb-12 md:pl-12">
              {/* node */}
              <span
                aria-hidden
                className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-ember bg-background"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_10px_var(--ember)]" />
              </span>

              <div className="bento p-6 md:p-7 transition-transform">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.year}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${typeBadge[e.type].cls}`}
                  >
                    {typeBadge[e.type].label}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-foreground md:text-2xl">
                  {e.role}
                </h3>
                <p className="mt-1 font-mono text-sm text-ember">
                  @ {e.company}
                  <span className="ml-2 text-muted-foreground">— {e.location}</span>
                </p>

                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 font-mono text-ember">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-background/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}

          <li className="relative pl-8 md:pl-12">
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border border-border bg-background"
            />
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-ember">$</span> git init // 1996
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
