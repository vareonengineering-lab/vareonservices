import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal, SectionHeading } from "./Reveal";
import { services } from "./data";

export const contactInfo = {
  phone: "+63 912 345 6789",
  email: "info@vareon-engineering.com",
  address: "Unit 1204, Ayala Avenue, Makati City, Metro Manila",
};

export function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! Our engineering team will contact you shortly.");
    }, 700);
  };

  return (
    <section id="contact" className="bg-muted py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's Engineer Your Next Project" />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl bg-gradient-navy p-8 text-navy-foreground shadow-soft">
              <h3 className="text-xl font-bold">VAREON Engineering Services</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3"><Phone className="h-5 w-5 text-accent" /><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-accent" /><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" />{contactInfo.address}</li>
              </ul>
            </div>
            <iframe title="Office location" loading="lazy" className="min-h-64 w-full flex-1 rounded-2xl border shadow-soft" src="https://www.google.com/maps?q=Ayala+Avenue+Makati&output=embed" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border bg-card p-8 shadow-soft sm:grid-cols-2">
              {[
                ["name", "Name", "text", true],
                ["company", "Company", "text", false],
                ["email", "Email", "email", true],
                ["phone", "Phone", "tel", false],
              ].map(([id, label, type, req]) => (
                <div key={id as string} className="space-y-2">
                  <Label htmlFor={id as string}>{label as string}</Label>
                  <Input id={id as string} name={id as string} type={type as string} required={req as boolean} maxLength={120} className="h-11" />
                </div>
              ))}
              <div className="space-y-2 sm:col-span-2">
                <Label>Service Needed</Label>
                <Select name="service">
                  <SelectTrigger className="h-11"><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} required maxLength={2000} />
              </div>
              <Button type="submit" variant="hero" size="xl" disabled={sending} className="sm:col-span-2">
                {sending ? "Sending..." : <>Submit Inquiry <Send /></>}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
