import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Radio, BatteryCharging, Cpu, ShieldCheck, Globe2, Sparkles } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import heroBg from "@/assets/hero-bg.jpg";
import telecomImg from "@/assets/telecom-hero.jpg";
import evImg from "@/assets/ev-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unitech E-Power and Trading PLC | Telecom & Electric Vehicles" },
      { name: "description", content: "Pioneering telecom infrastructure and electric mobility for a sustainable future." },
      { property: "og:title", content: "Unitech E-Power and Trading PLC" },
      { property: "og:description", content: "Pioneering telecom infrastructure and electric mobility for a sustainable future." },
      { property: "og:image", content: heroBg },
      { name: "twitter:image", content: heroBg },
    ],
  }),
  component: Home,
});

function Home() {
  const slides = [
    { src: heroBg, alt: "Unitech infrastructure hero scene" },
    { src: telecomImg, alt: "Telecom field deployment" },
    { src: evImg, alt: "Electric vehicle showcase" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <PageShell>
      {/* TOP AUTO SLIDER */}
      <section className="container-px mx-auto max-w-7xl pt-10 md:pt-14">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elevated)] bg-card/80">
            <motion.div
              className="flex"
              animate={{ x: `-${activeSlide * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {slides.map((slide) => (
                <div key={slide.alt} className="w-full shrink-0">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-44 sm:h-52 md:h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === index ? "w-7 bg-primary" : "w-4 bg-primary/35 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="container-px mx-auto max-w-7xl relative pt-20 pb-32 md:pt-32 md:pb-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary font-medium tracking-wider uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              Telecom · Electric Mobility · Trading
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
              Powering the <span className="text-gradient">connected</span> &{" "}
              <span className="text-gradient">electric</span> future.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Unitech E-Power and Trading PLC builds the infrastructure behind tomorrow's networks
              and brings clean, intelligent electric vehicles to the streets today.
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { v: "12+", l: "Years experience" },
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
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">What we do</p>
          <h2 className="text-3xl md:text-5xl font-bold">Two pillars. One vision.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <PillarCard
            to="/telecom"
            img={telecomImg}
            icon={<Radio className="w-6 h-6" />}
            title="Telecom Solutions"
            desc="End-to-end network design, fiber rollout, tower construction, RAN deployment and managed services for operators."
          />
          <PillarCard
            to="/electric-vehicles"
            img={evImg}
            icon={<BatteryCharging className="w-6 h-6" />}
            title="Electric Vehicles"
            desc="Imported and locally adapted EVs — passenger cars, scooters, three-wheelers — plus charging infrastructure."
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
              From mission-critical telecom infrastructure to next-gen mobility, we combine deep
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
              Talk to our team about your telecom rollout or fleet electrification.
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
}: {
  to: "/telecom" | "/electric-vehicles";
  img: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Link to={to} className="group relative overflow-hidden rounded-2xl glass-card aspect-[4/5] md:aspect-[5/6] block">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative h-full p-8 flex flex-col justify-end">
        <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 backdrop-blur">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground max-w-md">{desc}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm">
          Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </Link>
  );
}
