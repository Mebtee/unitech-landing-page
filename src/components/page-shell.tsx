import { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="container-px mx-auto max-w-7xl relative py-20 md:py-28">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary font-medium tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
