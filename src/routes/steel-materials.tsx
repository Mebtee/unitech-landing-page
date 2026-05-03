import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Package, Ruler, Truck, ShieldCheck } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import hero from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/steel-materials")({
  head: () => ({
    meta: [
      { title: "Steel Materials | Unitech E-Power" },
      { name: "description", content: "Structural steel, rebar, and industrial metal supply for construction and infrastructure." },
      { property: "og:title", content: "Steel Materials | Unitech E-Power" },
      { property: "og:description", content: "Quality-assured steel products and logistics for your next build." },
    ],
  }),
  component: SteelMaterials,
});

const offerings = [
  {
    title: "Structural sections",
    desc: "Beams, columns, and channels in standard grades with mill certificates and traceability.",
    icon: Ruler,
  },
  {
    title: "Rebar & mesh",
    desc: "Cut-and-bent reinforcement, welded mesh, and accessories for civil and commercial projects.",
    icon: Package,
  },
  {
    title: "Sheets & plates",
    desc: "HR/CR coils, chequered plate, and custom-cut flats for fabrication partners.",
    icon: ShieldCheck,
  },
  {
    title: "Logistics & yard",
    desc: "Scheduled deliveries, site drops, and consolidation from trusted regional mills.",
    icon: Truck,
  },
];

function SteelMaterials() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Steel materials"
        title={
          <>
            Steel that <span className="text-gradient">meets spec</span>, on schedule.
          </>
        }
        subtitle="Industrial steel supply for construction, telecom towers, and heavy infrastructure — sourced, verified, and delivered with clear documentation."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-border/60 shadow-[var(--shadow-elevated)] aspect-[4/3]"
          >
            <img src={hero} alt="Industrial steel and infrastructure" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-primary/10" />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Why Unitech steel</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">One partner for specification, quality checks, and dependable supply.</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We align material grades to your drawings, support third-party inspection when required, and coordinate
              transport so your crews stay on the critical path.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-semibold">·</span> Mill certs and heat-number traceability</li>
              <li className="flex gap-2"><span className="text-primary font-semibold">·</span> Cut, bend, and fabrication coordination</li>
              <li className="flex gap-2"><span className="text-primary font-semibold">·</span> Project-based scheduling and call-offs</li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition glow-cyan"
            >
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {offerings.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group glass-card rounded-2xl p-6 md:p-8 border border-border/60 hover:border-primary/45 transition-colors duration-300 hover:shadow-[var(--glow-cyan)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
