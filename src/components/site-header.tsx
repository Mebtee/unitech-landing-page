import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import companyLogo from "@/assets/company-logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/telecom", label: "Telecom" },
  { to: "/electric-vehicles", label: "Electric Vehicles" },
  { to: "/steel-materials", label: "Steel Materials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden bg-white border border-neutral-200/90 shadow-md ring-1 ring-white/70 shrink-0 group-hover:scale-105 transition-transform">
            <img src={companyLogo} alt="Unitech logo" className="w-full h-full object-contain p-1.5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm md:text-base tracking-tight text-foreground">UNITECH</div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-widest">E-POWER & TRADING</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm text-primary rounded-md" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-cyan"
        >
          Get in touch
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border/50",
          open ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground rounded-md"
              activeProps={{ className: "px-3 py-3 text-sm text-primary rounded-md bg-muted/50" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
