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
    year: "2024 — 2025",
    role: ".NET Cloud Developer (LIA)",
    company: "Recas AB",
    location: "Trollhättan",
    type: "work",
    bullets: [
      "Deltog i utvecklingen av en mobilapplikation för att uppmärksamma försäljningsframgångar",
      "Arbetade med både frontend- och backendutveckling",
      "Ansvarade för uppsättning och hantering av infrastruktur i Microsoft Azure",
      "Fick helhetsförståelse för utvecklingsprocessen från idé till färdig lösning",
    ],
    stack: ["ASP.NET Core", "Azure", "C#", "DevOps", "Scrum"],
  },
  {
    year: "2026 - behov",
    role: "Ordningsvakt",
    company: "Orca Security",
    location: "Göteborg",
    type: "work",
    bullets: [
      "Ordningsvakt på evenemang, fotboll och krog",
    ],
    stack: ["Ordningsvakt", "Fotboll", "Evenemang", "Krog"],
  },
  {
    year: "2019 - Tillsvidare",
    role: "Väktare / Ordningsvakt",
    company: "Securitas AB",
    location: "Göteborg",
    type: "work",
    bullets: [
      "Inom handelsmiljö i Göteborg (Citygruppen)",
      "Genomför regelbundna butiksbesök och ronderingar",
      "Skapar trygghet för butikspersonal och kunder",
      "Utför larmutryckningar till butiker",
      "Förebygger stölder och ordningsstörningar",
    ],
    stack: ["Väktare", "Ordningsvakt"],
  },
  {
    year: "2011 — 2019",
    role: "Larmoperatör / Väktare",
    company: "Avarn Security",
    location: "Göteborg",
    type: "work",
    bullets: [
      "Hanterar inbrotts-, brand- och fellarm samt 112-samtal",
      "Övervakar och bedömer larmsituationer via kamerasystem",
      "Fungerar som central beslutsfattare i akuta ärenden",
      "Säkerställer snabb och effektiv respons vid larmsituationer",
    ],
    stack: ["Larmoperatör", "Väktare"],
  },
  {
    year: "2026",
    role: "Ordningsvakt",
    company: "Polisen",
    location: "Skövde",
    type: "edu",
    bullets: ["Genomförde utbildning för behörighet som ordningsvakt, inklusive lagstiftning, konflikthantering och säkerhetsrutiner."],
    stack: ["Ordningsvakt"],
  },
   {
    year: "2023 — 2025",
    role: ".NET Cloud Developer",
    company: "IT-Högskolan",
    location: "Göteborg",
    type: "edu",
    bullets: ["Fick en gedigen utbildning inom .NET och molnteknologier, inklusive C#, ASP.NET Core, Azure och DevOps-principer."],
    stack: ["C#", "ASP.NET Core", "Azure", "DevOps", "Scrum", "Docker", "Kubernetes", "Terraform", "Bicep" , "Database Design", "Entity Framework", "SQL"],
  },
   {
    year: "2004 - 2007",
    role: "Restaurang",
    company: "Burgården Gymnnasium",
    location: "Göteborg",
    type: "edu",
    bullets: ["Kock och restaurangutbildning med fokus på matlagning, service och restaurangdrift."],
    stack: ["Kock", "Restaurang", "Matlagning", "Service"],
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
              <span className="text-ember">$</span> git init // 1987
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
