import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "./data";

export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2.5" aria-label="VAREON Engineering Services home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-lg font-black text-primary-foreground">V</span>
      <span className={`leading-none ${light ? "text-navy-foreground" : "text-foreground"}`}>
        <span className="block text-lg font-extrabold tracking-[0.15em]">VAREON</span>
        <span className="block text-[10px] font-medium tracking-[0.2em] opacity-70">ENGINEERING SERVICES</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "border-b border-navy-foreground/10 bg-navy/85 py-3 backdrop-blur-xl" : "bg-transparent py-5"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo light />
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-sm font-medium text-navy-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-navy-foreground hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" className="hidden rounded-full md:inline-flex">
          <a href="/#contact">Get a Quote</a>
        </Button>
        <button className="text-navy-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-6 pt-4 pb-2 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-navy-foreground/90">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
