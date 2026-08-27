export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-ember">$</span> echo "© {new Date().getFullYear()} Michel Partanen — built with .NET love"
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          v1.0.0 · <span className="text-ember">●</span> all systems operational
        </p>
      </div>
    </footer>
  );
}
