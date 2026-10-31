import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { pillars, services, reasons, steps, projects, stats, testimonials } from "./data";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">About VAREON Engineering Services</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            VAREON Engineering Services provides professional Mechanical, Electrical, Plumbing, and Fire Protection engineering solutions. Our mission is to deliver efficient, innovative, and sustainable building systems that exceed client expectations.
          </p>
        </Reveal>
        <div className="grid gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group flex gap-5 rounded-2xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground"><p.icon className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-muted py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="What we do" title="Integrated MEPF Services" text="End-to-end building systems engineering, coordinated across every discipline." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <motion.article whileHover={{ y: -8 }} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-8 shadow-soft transition-shadow hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"><s.icon className="h-7 w-7" /></span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-accent" />{it}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-28 text-navy-foreground">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading light eyebrow="Why choose us" title="Built on Engineering Excellence" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.1}>
              <div className="glass group h-full rounded-2xl p-7 transition-all hover:-translate-y-1 hover:bg-navy-foreground/10">
                <r.icon className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mt-5 text-lg font-semibold">✔ {r.title}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="How we work" title="Our Project Process" />
        <div className="relative">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }} className="absolute left-[8%] right-[8%] top-8 hidden h-0.5 origin-left bg-gradient-brand lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.li key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.18 }} className="relative flex flex-col items-center text-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full border-4 border-background bg-navy text-accent shadow-glow transition-transform hover:scale-110"><s.icon className="h-6 w-6" /></span>
                <span className="mt-4 text-xs font-bold tracking-widest text-primary">STEP {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-muted py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" text="A selection of building systems we have engineered." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-navy-foreground">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="glass rounded-full px-3 py-1">{p.discipline}</span>
                    <span className="glass rounded-full px-3 py-1">{p.type}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
                  <div className="mt-1 flex justify-between text-sm text-navy-foreground/75"><span>{p.location}</span><span>Completed {p.year}</span></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="bg-gradient-brand py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-5xl font-extrabold md:text-6xl"><Counter value={s.value} suffix={s.suffix} /></div>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest opacity-85">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i] ?? testimonials[0]!;
  const go = (d: number) => setI((x) => (x + d + testimonials.length) % testimonials.length);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Testimonials" title="Trusted by Our Clients" />
        <div className="relative rounded-3xl border bg-card p-10 shadow-soft md:p-14">
          <Quote className="absolute -top-6 left-10 h-12 w-12 rounded-xl bg-gradient-brand p-2.5 text-primary-foreground" />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
              <p className="text-xl leading-relaxed md:text-2xl">"{t.quote}"</p>
              <p className="mt-8 font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => go(-1)} aria-label="Previous"><ChevronLeft /></Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => go(1)} aria-label="Next"><ChevronRight /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
