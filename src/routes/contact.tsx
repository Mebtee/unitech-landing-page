import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Unitech E-Power and Trading PLC" },
      { name: "description", content: "Get in touch with Unitech E-Power for telecom rollouts, EV procurement or charging infrastructure." },
      { property: "og:title", content: "Contact | Unitech E-Power" },
      { property: "og:description", content: "Talk to our team about telecom or electric mobility projects." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Message sent! We'll be in touch shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build <span className="text-gradient">together</span>.</>}
        subtitle="Whether you're planning a telecom rollout, a fleet electrification or a charging network — we'd love to hear from you."
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <ContactCard icon={<MapPin />} title="Headquarters" lines={["Bole, Addis Ababa", "Ethiopia"]} />
            <ContactCard icon={<Phone />} title="Phone" lines={["+251 11 000 0000", "+251 91 000 0000"]} />
            <ContactCard icon={<Mail />} title="Email" lines={["info@unitech-epower.com", "sales@unitech-epower.com"]} />
            <div className="rounded-2xl overflow-hidden glass-card aspect-video">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=38.74%2C8.98%2C38.82%2C9.04&layer=mapnik"
                className="w-full h-full grayscale-[0.4] opacity-90"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} placeholder="Jane Doe" />
              <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="jane@company.com" />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => update("subject", v)} placeholder="Telecom rollout enquiry" />
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-lg bg-input/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition glow-cyan disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-input/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}

function ContactCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex gap-4">
      <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="font-semibold mb-1">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
      </div>
    </div>
  );
}
