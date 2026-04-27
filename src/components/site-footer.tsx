import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import companyLogo from "@/assets/company-logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 mt-24 bg-card/30 backdrop-blur-xl">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-card border border-border/60 shadow-[var(--shadow-elevated)]">
              <img src={companyLogo} alt="Unitech logo" className="w-full h-full object-contain p-1.5" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm">UNITECH</div>
              <div className="text-[10px] text-muted-foreground tracking-widest">E-POWER & TRADING</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Powering tomorrow's connected and electric infrastructure across Africa and beyond.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition">Projects</Link></li>
            <li><Link to="/news" className="hover:text-primary transition">News</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Solutions</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/telecom" className="hover:text-primary transition">Telecom Infrastructure</Link></li>
            <li><Link to="/electric-vehicles" className="hover:text-primary transition">Electric Vehicles</Link></li>
            <li><Link to="/electric-vehicles" className="hover:text-primary transition">EV Charging</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />Addis Ababa, Ethiopia</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />+251 11 000 0000</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />info@unitech-epower.com</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Linkedin className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Unitech E-Power and Trading PLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
