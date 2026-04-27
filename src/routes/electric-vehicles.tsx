import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Battery, Gauge, Zap, Leaf } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import evHero from "@/assets/ev-hero.jpg";
import scooter from "@/assets/ev-scooter.jpg";
import threewheeler from "@/assets/ev-threewheeler.jpg";
import charger from "@/assets/ev-charger.jpg";

export const Route = createFileRoute("/electric-vehicles")({
  head: () => ({
    meta: [
      { title: "Electric Vehicles | Unitech E-Power" },
      { name: "description", content: "Electric SUVs, scooters, three-wheelers and EV charging infrastructure from Unitech E-Power." },
      { property: "og:title", content: "Electric Vehicles | Unitech E-Power" },
      { property: "og:description", content: "Clean, intelligent electric mobility — vehicles and charging infrastructure." },
      { property: "og:image", content: evHero },
      { name: "twitter:image", content: evHero },
    ],
  }),
  component: EV,
});

const products = [
  {
    img: evHero,
    name: "Voltris SUV",
    tag: "Passenger EV",
    blurb: "All-electric crossover designed for urban families and intercity commutes.",
    specs: [
      { l: "Range", v: "520 km" },
      { l: "Battery", v: "82 kWh" },
      { l: "0–100 km/h", v: "6.8 s" },
      { l: "Fast charge", v: "30 min (10–80%)" },
    ],
  },
  {
    img: scooter,
    name: "Volt-S Scooter",
    tag: "Two-wheeler",
    blurb: "City scooter with swappable battery for last-mile delivery and daily riders.",
    specs: [
      { l: "Range", v: "120 km" },
      { l: "Top speed", v: "85 km/h" },
      { l: "Battery", v: "3.2 kWh swappable" },
      { l: "Charge time", v: "3 hours" },
    ],
  },
  {
    img: threewheeler,
    name: "Volt-3 Auto",
    tag: "Three-wheeler",
    blurb: "Electric three-wheeler for passenger transport and urban logistics.",
    specs: [
      { l: "Range", v: "150 km" },
      { l: "Payload", v: "500 kg" },
      { l: "Battery", v: "8 kWh LFP" },
      { l: "Charge", v: "4 hours" },
    ],
  },
  {
    img: charger,
    name: "Volt-Charge DC",
    tag: "Charging infra",
    blurb: "Fast DC charging stations for fleets, public spaces and highway corridors.",
    specs: [
      { l: "Power", v: "60–180 kW" },
      { l: "Connectors", v: "CCS2 / CHAdeMO" },
      { l: "Display", v: "10\" touch HMI" },
      { l: "Network", v: "OCPP 1.6 / 2.0" },
    ],
  },
];

function EV() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Electric Vehicles"
        title={<>Clean. Smart. <span className="text-gradient">Electrifying.</span></>}
        subtitle="A complete electric mobility portfolio — from premium passenger EVs to commercial three-wheelers and the charging infrastructure that powers them."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Battery />, t: "Long range" },
            { icon: <Zap />, t: "Fast charging" },
            { icon: <Gauge />, t: "Smart telemetry" },
            { icon: <Leaf />, t: "Zero emissions" },
          ].map((f) => (
            <div key={f.t} className="glass-card rounded-xl p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">{f.icon}</div>
              <div className="font-semibold text-sm">{f.t}</div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`glass-card rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/40" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{p.tag}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{p.name}</h3>
                <p className="text-muted-foreground mb-6">{p.blurb}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {p.specs.map((s) => (
                    <div key={s.l} className="border-l-2 border-primary/40 pl-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                      <div className="font-semibold mt-0.5">{s.v}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm w-fit">
                  Request a quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
