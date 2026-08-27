import { useEffect, useState } from "react";

const PHRASES = [
"Building modern web applications.",
"Developing with C# and .NET.",
"Creating scalable solutions on Azure.",
"Turning ideas into working software.",
];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const phrase = PHRASES[i % PHRASES.length];
    let n = 0;
    const type = () => {
      n++;
      setText(phrase.slice(0, n));
      if (n < phrase.length) {
        timeout = setTimeout(type, 45);
      } else {
        timeout = setTimeout(() => setI((p) => p + 1), 2200);
      }
    };
    setText("");
    timeout = setTimeout(type, 200);
    return () => clearTimeout(timeout);
  }, [i]);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 dotgrid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_12px_var(--ember)]" />
          available_for_work = true
        </div>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Michel Partanen.<br />
          <span className="text-gradient-ember">.NET Cloud</span><br />
          Developer<span className="text-ember">_</span>
        </h1>

        <p className="mt-8 max-w-xl font-mono text-sm text-muted-foreground md:text-base">
          <span className="text-ember">{">"}</span> <span>{text}</span>
          <span className="caret" />
        </p>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Jag designar och bygger skalbara molnlösningar i .NET och Azure — från idé och användargränssnitt till API, databaser och molninfrastruktur, med fokus på moderna och hållbara applikationer.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg ember-gradient px-5 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
          >
            view_projects()
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#cv"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-ember hover:text-ember"
          >
            ./resume.sh
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-border pt-8 max-w-2xl">
          {[
            { k: "years", v: "2+" },
            { k: "projects", v: "10+" },
            /*{ k: "azure_certs", v: "?"},*/
          ].map((s) => (
            <div key={s.k}>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.k}
              </dt>
              <dd className="mt-1 font-mono text-3xl font-bold text-foreground">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
