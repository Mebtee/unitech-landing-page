import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Unitech E-Power and Trading PLC" },
      { name: "description", content: "Learn about Unitech E-Power's mission to power telecom and electric mobility across Africa." },
      { property: "og:title", content: "About Unitech E-Power and Trading PLC" },
      { property: "og:description", content: "Our mission, vision and the team building tomorrow's infrastructure." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHero
        title={<>About <span className="text-gradient"> Us</span></>}
        subtitle="Unitech Trading PLC is a professional trading company specializing in various metal products, tires, telecom infrastructure, and electric vehicles."
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who we are</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                We are dedicated to providing high-quality steel, related products, communication devices, and EV solutions to meet the diverse needs of the construction, industrial, telecommunications, and automotive sectors.
              </p>
              <p>
                With operations spanning across Ethiopia and Djibouti, we have established a strong regional presence. Being a Huawei Gold Partner underscores our capability to handle large-scale communication supply chains and enterprise-grade infrastructure.


              </p>
              <p>
                With a customer-centric approach, we continuously strive for excellence, ensuring that every client receives the best possible service and products tailored to their specific project requirements.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <Target />, t: "Mission", d: "To help clients achieve project success by providing high-quality metal products and technical solutions. We understand the uniqueness of each project, which is why we offer customized solutions to meet the specific needs of different clients." },
              { icon: <Eye />, t: "Vision", d: "To become a leader in the metal products, infrastructure, and tire industry across the region, earning customer trust and support through innovation and exceptional service." },
              { icon: <Heart />, t: "Values", d: "Integrity, engineering excellence, customer obsession, and respect for the environment." },
              { icon: <Award />, t: "Promise", d: "Every project delivered on time, to spec, and built to outlast expectations." },
            ].map((c) => (
              <div key={c.t} className="glass-card rounded-xl p-6 hover:border-primary/40 transition">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">{c.icon}</div>
                <h3 className="font-semibold mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our journey</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          {[
            { y: "2012", t: "Founded", d: "Unitech opens its doors with a focus on telecom contracting." },
            { y: "2016", t: "Regional expansion", d: "Multi-country telecom projects across East Africa." },
            { y: "2020", t: "Trading division", d: "Launched our trading arm for advanced electrical equipment." },
            { y: "2023", t: "EV launch", d: "Introduced our first imported electric vehicles and charging stations." },
            { y: "Today", t: "Scaling up", d: "Powering 350+ active sites and a growing EV portfolio." },
          ].map((m, i) => (
            <div key={m.y} className={`relative flex gap-6 mb-10 md:mb-12 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="md:w-1/2 md:px-8">
                <div className="glass-card rounded-xl p-5 ml-12 md:ml-0">
                  <div className="text-primary font-bold text-sm mb-1">{m.y}</div>
                  <div className="font-semibold mb-1">{m.t}</div>
                  <div className="text-sm text-muted-foreground">{m.d}</div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-cyan mt-6 md:mt-0" />
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
