import { useEffect, useState } from "react";
import { ArrowUp, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Navbar";
import { navLinks, services } from "./data";
import { contactInfo } from "./Contact";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm text-navy-foreground/65">Professional MEPF engineering for commercial, industrial, residential and institutional projects.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Instagram, Youtube].map((I, k) => (
              <a key={k} href="#" aria-label="Social media" className="glass grid h-10 w-10 place-items-center rounded-full transition-all hover:-translate-y-1 hover:bg-primary"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/65">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-accent">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/65">
            {services.map((s) => <li key={s.title}><a href="/#services" className="hover:text-accent">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/65">
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-6 text-center text-xs text-navy-foreground/50">
        © {new Date().getFullYear()} VAREON Engineering Services. All rights reserved.
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow transition-all hover:-translate-y-1 ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
