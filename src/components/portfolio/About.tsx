const STACK = [
  { name: ".NET 8 / C#", level: 95 },
  { name: "Azure (Functions, AKS, Service Bus)", level: 92 },
  { name: "ASP.NET Core / Minimal APIs", level: 94 },
  { name: "Entity Framework / SQL", level: 88 },
  { name: "Docker / Kubernetes", level: 85 },
  { name: "CI/CD (GitHub Actions, Azure DevOps)", level: 90 },
  { name: "Terraform / Bicep", level: 78 },
  { name: "TypeScript / React", level: 80 },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="01" title="about" caption="// vem jag är" />

        <div className="mt-12 grid gap-5 md:grid-cols-6 md:grid-rows-2">
          {/* Bio */}
          <article className="bento md:col-span-4 md:row-span-2 p-8 md:p-10 grain">
            <p className="font-mono text-xs text-ember">const bio = `</p>
            <p className="mt-4 text-xl leading-relaxed text-foreground md:text-2xl">
              Jag heter Alex och jag är{" "}
              <span className="text-ember">.NET Cloud Developer</span> med 6+ år
              i branschen. Jag bygger backend-system som inte vaknar dig kl 03 —
              event-drivna mikrotjänster, serverless workflows och API:er som
              skalar utan drama.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Jag tror på pragmatisk arkitektur, läsbar kod och observability
              från dag ett. När jag inte kodar bygger jag mekaniska tangentbord
              och dricker oförsvarligt mycket espresso.
            </p>
            <p className="mt-6 font-mono text-xs text-ember">`;</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["C#", "Azure", "Kubernetes", "DDD", "Event-Driven", "CQRS"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </article>

          {/* Now playing */}
          <article className="bento md:col-span-2 p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              ~/now
            </p>
            <ul className="mt-4 space-y-3 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-ember">▸</span>
                <span>Bygger event-driven SaaS på Azure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ember">▸</span>
                <span>Läser <em className="text-foreground">Designing Data-Intensive Applications</em></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ember">▸</span>
                <span>Lär mig Rust på fritiden</span>
              </li>
            </ul>
          </article>

          {/* Location card */}
          <article className="bento md:col-span-2 p-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full ember-gradient opacity-20 blur-2xl float" aria-hidden />
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              location
            </p>
            <p className="mt-3 font-mono text-3xl font-bold text-foreground">
              Stockholm
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              59.3293° N, 18.0686° E
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Remote-first, men trivs i ett bra teamrum.
            </p>
          </article>
        </div>

        {/* Stack */}
        <div className="mt-5 bento p-8 md:p-10">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              ~/stack
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {STACK.length} dependencies
            </p>
          </div>
          <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {STACK.map((s) => (
              <div key={s.name}>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-foreground">
                    {s.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {s.level}%
                  </span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-background">
                  <div
                    className="h-full ember-gradient"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-4">
      <div>
        <p className="font-mono text-xs text-muted-foreground">{caption}</p>
        <h2 className="mt-2 text-3xl font-bold md:text-5xl">
          <span className="text-ember">{index}.</span> {title}
          <span className="text-ember">()</span>
        </h2>
      </div>
      <span className="hidden font-mono text-xs text-muted-foreground md:inline">
        {"{ scroll: down }"}
      </span>
    </div>
  );
}
