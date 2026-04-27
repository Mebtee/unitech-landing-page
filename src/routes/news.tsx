import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import a from "@/assets/telecom-hero.jpg";
import b from "@/assets/ev-hero.jpg";
import c from "@/assets/ev-charger.jpg";
import d from "@/assets/ev-scooter.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights | Unitech E-Power" },
      { name: "description", content: "Updates, insights and announcements from Unitech E-Power and Trading PLC." },
      { property: "og:title", content: "News & Insights | Unitech E-Power" },
      { property: "og:description", content: "Latest news from the team building telecom and EV infrastructure." },
    ],
  }),
  component: News,
});

const posts = [
  { img: c, cat: "Announcement", date: "Mar 12, 2025", title: "Unitech opens first DC fast-charging corridor on Addis–Adama highway", excerpt: "Eight stations powered by 100% renewable energy now serve EV drivers along Ethiopia's busiest expressway." },
  { img: b, cat: "Industry", date: "Feb 28, 2025", title: "Why fleet electrification is the next big lever for African logistics", excerpt: "A look at the economics, charging strategies, and policy tailwinds reshaping urban transport." },
  { img: a, cat: "Engineering", date: "Feb 04, 2025", title: "Inside our multi-vendor NOC: 24/7 reliability for 350+ sites", excerpt: "How we combine automation, smart escalation and field crews to keep networks alive." },
  { img: d, cat: "Product", date: "Jan 18, 2025", title: "Volt-S scooter lands in three new cities with swap stations", excerpt: "Last-mile riders now get 120km range and a 30-second battery swap experience." },
];

function News() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News & Insights"
        title={<>From the <span className="text-gradient">field</span>.</>}
        subtitle="Stories, updates and engineering deep-dives from the Unitech team."
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="text-primary font-medium uppercase tracking-wider">{p.cat}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
