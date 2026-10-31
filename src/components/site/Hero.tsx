import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      {/* Blueprint drawing */}
      <svg className="absolute right-0 top-1/2 hidden h-[80%] -translate-y-1/2 text-accent lg:block" viewBox="0 0 600 600" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
        <g className="animate-draw" opacity="0.7">
          <rect x="120" y="120" width="360" height="380" />
          <path d="M120 220 H480 M120 320 H480 M120 420 H480 M240 120 V500 M360 120 V500" />
          <path d="M300 40 L120 120 M300 40 L480 120" />
          <circle cx="300" cy="270" r="60" />
          <path d="M60 520 H540 M60 510 V530 M540 510 V530" />
        </g>
        <g opacity="0.4" className="animate-draw" style={{ animationDelay: "1s" }}>
          <path d="M140 140 C 200 200, 260 160, 300 270 S 420 360, 460 480" strokeDasharray="6 6" />
          <circle cx="300" cy="270" r="110" strokeDasharray="4 8" />
        </g>
      </svg>
      <div className="animate-float absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="animate-float absolute bottom-10 right-1/3 h-56 w-56 rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> MEPF ENGINEERING EXCELLENCE
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] md:text-7xl lg:text-8xl">
            Engineering <span className="text-gradient-brand">Better</span> Buildings.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/75 md:text-xl">
            Professional Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) Engineering Solutions for Commercial, Industrial, Residential, and Institutional Projects.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl"><a href="#contact">Get a Quote <ArrowRight /></a></Button>
            <Button asChild variant="glass" size="xl"><a href="#services">View Our Services</a></Button>
          </div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-navy-foreground/60"><ChevronDown /></a>
    </section>
  );
}
