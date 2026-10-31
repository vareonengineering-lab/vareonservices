import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text, light }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold md:text-5xl ${light ? "text-navy-foreground" : "text-foreground"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{text}</p>}
    </Reveal>
  );
}
