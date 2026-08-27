import { SectionHeader } from "./About";

const LINKS = [
  { label: "email", value: "michel-partanen@hotmail.com", href: "mailto:michel-partanen@hotmail.com" },
  { label: "github", value: "xplizy", href: "https://github.com/xplizy" },
  { label: "linkedin", value: "Michel Partanen", href: "https://linkedin.com/in/michel-partanen-108440297" },
  { label: "location", value: "Göteborg, SE", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="04" title="contact" caption="// låt oss bygga något" />

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          <div className="bento md:col-span-3 p-8 md:p-12 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(500px 250px at 80% 100%, color-mix(in oklab, var(--ember) 25%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <p className="font-mono text-xs text-ember">$ echo $MESSAGE</p>
              <h3 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Har du ett projekt<br />som behöver <span className="text-gradient-ember">hjälp med?</span> Kontakta mig!
              </h3>
              <p className="mt-5 max-w-md text-muted-foreground">
                Jag tar konsultuppdrag, fast anställning och tekniska
                review-uppdrag. Skicka ett mail så hörs vi inom 24h.
              </p>
              <a
                href="mailto:michel-partanen@hotmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg ember-gradient px-5 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
              >
                send_email() →
              </a>
            </div>
          </div>

          <ul className="md:col-span-2 grid gap-5">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="bento group flex h-full items-center justify-between p-5"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {l.label}
                    </p>
                    <p className="mt-1 font-mono text-base text-foreground group-hover:text-ember">
                      {l.value}
                    </p>
                  </div>
                  <span className="font-mono text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-ember">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
