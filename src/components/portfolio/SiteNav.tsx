import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#cv", label: "cv" },
  { href: "#contact", label: "contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md ember-gradient text-primary-foreground font-bold">
            {"</>"}
          </span>
          <span className="text-foreground">michel<span className="text-ember">.partanen</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              <span className="text-ember">/</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground transition-all hover:border-ember hover:text-ember"
        >
          hire_me()
        </a>
      </div>
    </header>
  );
}
