import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Radio, BatteryCharging, Cpu, ShieldCheck, Globe2, Sparkles, Factory } from "lucide-react";
import { HuaweiPartnerBadge } from "@/components/huawei-partner-badge";
import { PageShell } from "@/components/page-shell";
import heroBg from "@/assets/hero-bg.jpg";
import telecomImg from "@/assets/telecom-hero.jpg";
import evImg from "@/assets/ev-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unitech E-Power and Trading PLC | Telecom & Electric Vehicles" },
      { name: "description", content: "Pioneering telecom infrastructure, steel supply, and electric mobility for a sustainable future." },
      { property: "og:title", content: "Unitech E-Power and Trading PLC" },
      { property: "og:description", content: "Pioneering telecom infrastructure, steel supply, and electric mobility for a sustainable future." },
      { property: "og:image", content: heroBg },
      { name: "twitter:image", content: heroBg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="container-px mx-auto max-w-7xl relative pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-12 xl:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl min-w-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-400/40 bg-red-600 text-xs text-white font-medium tracking-wider uppercase mb-6">
                <Sparkles className="w-3 h-3" />
                Huawei Gold Partner
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                Engineering the <span className="text-gradient">Future</span> of{" "}
                <span className="text-gradient">Global</span> Connectivity.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Unitech delivers high-performance communication infrastructure, industrial steel solutions, and
                sustainable energy systems to empower modern enterprises.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition glow-cyan"
                >
                  Start a project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/electric-vehicles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/60 transition font-semibold"
                >
                  Explore EV lineup
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="flex justify-center lg:justify-end w-full lg:w-auto lg:max-w-[min(100%,400px)] xl:max-w-[440px] lg:pt-20 xl:pt-24 lg:mr-6 xl:mr-10 2xl:mr-12"
            >
              <HuaweiPartnerBadge className="sm:max-w-[340px] lg:max-w-none" />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { v: "10+", l: "Years experience" },
              { v: "350+", l: "Sites deployed" },
              { v: "40K+", l: "EV km logged" },
              { v: "24/7", l: "Field operations" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-5">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">What we do</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Telecom, electric mobility, and <span className="text-gradient">steel products</span> — engineered for scale.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our three core lines. Hover a card for a quick preview; click through for full detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <PillarCard
            index={0}
            to="/telecom"
            img={telecomImg}
            icon={<Radio className="w-6 h-6" />}
            title="Telecom Solutions"
            desc="End-to-end network design, fiber rollout, tower construction, RAN deployment and managed services for operators."
          />
          <PillarCard
            index={1}
            to="/electric-vehicles"
            img={evImg}
            icon={<BatteryCharging className="w-6 h-6" />}
            title="Electric Vehicles"
            desc="Imported and locally adapted EVs — passenger cars, scooters, three-wheelers — plus charging infrastructure."
          />
          <PillarCard
            index={2}
            to="/steel-materials"
            img={heroBg}
            icon={<Factory className="w-6 h-6" />}
            title="Steel Products"
            desc="Structural sections, rebar, plate, and coordinated supply for construction, towers, and industrial builds."
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Why Unitech</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for reliability. Built for scale.</h2>
            <p className="text-muted-foreground text-lg">
              From mission-critical telecom infrastructure to next-gen mobility and industrial materials, we combine deep
              technical expertise with a relentless focus on quality and sustainability.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <Cpu />, t: "Smart engineering", d: "Modern stack & best-in-class hardware partners." },
              { icon: <ShieldCheck />, t: "Quality assured", d: "ISO-aligned processes from design to handover." },
              { icon: <Globe2 />, t: "Local expertise", d: "Deep on-the-ground knowledge across the region." },
              { icon: <BatteryCharging />, t: "Sustainable", d: "Clean mobility & energy-efficient infrastructure." },
            ].map((f) => (
              <div key={f.t} className="glass-card rounded-xl p-5 hover:border-primary/40 transition">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-1">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
              Ready to build what's <span className="text-gradient">next</span>?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Talk to our team about your telecom rollout, steel program, or fleet electrification.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition glow-cyan"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PillarCard({
  to,
  img,
  icon,
  title,
  desc,
  index,
  className,
}: {
  to: "/telecom" | "/electric-vehicles" | "/steel-materials";
  img: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
    >
      <Link
        to={to}
        className="group relative overflow-hidden rounded-2xl glass-card aspect-[4/5] md:aspect-[5/6] block h-full border border-border/50 shadow-[var(--shadow-elevated)] hover:border-primary/45 hover:shadow-[var(--glow-cyan)] transition-[border-color,box-shadow] duration-300"
      >
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-[0.62] group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/20 group-hover:via-background/55 transition-colors duration-500" />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
          <div className="absolute -inset-1 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>
        <div className="relative h-full p-8 flex flex-col justify-end">
          <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4 backdrop-blur-md ring-1 ring-primary/25 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">{title}</h3>
          <p className="text-muted-foreground max-w-md group-hover:text-foreground/90 transition-colors duration-300">{desc}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm">
            Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
