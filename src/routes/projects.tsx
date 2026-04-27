import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import telecom from "@/assets/telecom-hero.jpg";
import ev from "@/assets/ev-hero.jpg";
import charger from "@/assets/ev-charger.jpg";
import hero from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Unitech E-Power" },
      { name: "description", content: "Featured telecom and electric mobility projects delivered by Unitech E-Power." },
      { property: "og:title", content: "Projects | Unitech E-Power" },
      { property: "og:description", content: "A portfolio of delivered telecom and EV programs." },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: telecom, cat: "Telecom", title: "Nationwide 4G densification", loc: "Ethiopia", year: "2024", desc: "Designed and deployed 120+ macro sites with integrated power and fiber backhaul." },
  { img: ev, cat: "Mobility", title: "Government EV pilot fleet", loc: "Addis Ababa", year: "2024", desc: "Delivered 40 passenger EVs with maintenance and driver training program." },
  { img: charger, cat: "Charging", title: "Highway DC fast-charge corridor", loc: "Adama – Addis", year: "2025", desc: "Engineered 8-station DC fast-charging corridor with OCPP cloud integration." },
  { img: hero, cat: "Telecom", title: "Metro fiber backbone", loc: "Hawassa", year: "2023", desc: "120 km of metro fiber and 14 PoPs serving enterprise customers." },
  { img: telecom, cat: "Managed", title: "Multi-vendor NOC services", loc: "East Africa", year: "Ongoing", desc: "24/7 monitoring and field maintenance across 350+ telecom sites." },
  { img: ev, cat: "Mobility", title: "Three-wheeler taxi rollout", loc: "Bahir Dar", year: "2024", desc: "Pilot deployment of 60 electric three-wheelers with swap stations." },
];

function Projects() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title={<>Real projects, <span className="text-gradient">real impact</span>.</>}
        subtitle="A selection of telecom and electric mobility programs delivered for operators, governments and enterprise."
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-xs text-primary font-medium">{p.cat}</div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{p.loc}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.year}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
