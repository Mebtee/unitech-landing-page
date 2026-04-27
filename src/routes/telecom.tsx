import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Radio, Cable, Wrench, Activity, Server, Wifi, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import telecomImg from "@/assets/telecom-hero.jpg";

export const Route = createFileRoute("/telecom")({
  head: () => ({
    meta: [
      { title: "Telecom Solutions | Unitech E-Power" },
      { name: "description", content: "End-to-end telecom infrastructure: tower construction, fiber, RAN deployment, and managed services." },
      { property: "og:title", content: "Telecom Solutions | Unitech E-Power" },
      { property: "og:description", content: "End-to-end telecom infrastructure for operators." },
      { property: "og:image", content: telecomImg },
      { name: "twitter:image", content: telecomImg },
    ],
  }),
  component: Telecom,
});

const services = [
  { icon: <Radio />, t: "Tower & site construction", d: "Greenfield, rooftop and camouflage sites built to operator specifications." },
  { icon: <Cable />, t: "Fiber optic deployment", d: "OSP/ISP fiber rollout, splicing, OTDR testing and as-built documentation." },
  { icon: <Server />, t: "RAN & transmission", d: "2G/3G/4G/5G RAN installation, microwave links and IP backhaul." },
  { icon: <Wrench />, t: "Managed services", d: "Preventive and corrective maintenance with 24/7 NOC support." },
  { icon: <Activity />, t: "Site survey & design", d: "RF planning, civil and structural design, and feasibility studies." },
  { icon: <Wifi />, t: "Indoor coverage / DAS", d: "Distributed antenna systems for malls, hospitals and corporate campuses." },
];

function Telecom() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Telecom Solutions"
        title={<>Infrastructure that keeps the world <span className="text-gradient">connected</span>.</>}
        subtitle="From tower foundations to fiber splices, we deliver mission-critical telecom programs for operators, ISPs and enterprise."
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/40 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden glass-card aspect-[4/3]">
            <img src={telecomImg} alt="Telecom tower at night" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A full-stack telecom partner</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Whether you're rolling out a new market or densifying an existing footprint, our integrated
              teams handle every layer of the stack.
            </p>
            <ul className="space-y-3">
              {[
                "Turn-key site delivery (civil, power, telecom)",
                "Multi-vendor RAN expertise",
                "Power systems: rectifiers, batteries & solar",
                "Quality-assured fiber networks",
                "Lifecycle managed services with SLA guarantees",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition glow-cyan">
              Discuss your rollout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
