import { Wind, Zap, Droplets, Flame, DraftingCompass, Target, Eye, Gem, Users, Award, Timer, PiggyBank, ShieldCheck, HeartHandshake, MessageSquare, MapPin, PenTool, ClipboardCheck, HardHat, Flag } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const pillars = [
  { icon: Target, title: "Mission", text: "Deliver efficient, innovative and sustainable building systems that exceed client expectations on every project." },
  { icon: Eye, title: "Vision", text: "To be the most trusted MEPF engineering partner, shaping safer and smarter buildings across the region." },
  { icon: Gem, title: "Core Values", text: "Integrity, precision, collaboration and continuous innovation guide every design decision we make." },
];

export const services = [
  { icon: Wind, title: "Mechanical Engineering", items: ["HVAC Design", "Ventilation Systems", "Air Conditioning", "Chilled Water Systems", "Exhaust Systems"] },
  { icon: Zap, title: "Electrical Engineering", items: ["Power Distribution", "Lighting Design", "Generator Systems", "Solar Integration", "Electrical Load Analysis"] },
  { icon: Droplets, title: "Plumbing Engineering", items: ["Water Supply Systems", "Sanitary Drainage", "Storm Drainage", "Sewage Systems", "Water Storage"] },
  { icon: Flame, title: "Fire Protection", items: ["Sprinkler Systems", "Fire Alarm Systems", "Fire Pumps", "Hydrant Systems", "Fire Safety Compliance"] },
  { icon: DraftingCompass, title: "Other Engineering Services", items: ["Engineering Design", "Construction Supervision", "Quantity Estimates", "As-built Drawings", "Building Permit Plans", "Consultancy"] },
];

export const reasons = [
  { icon: Users, title: "Experienced Engineers", text: "Licensed professionals with deep multi-discipline expertise." },
  { icon: Award, title: "High Quality Design", text: "Precise, coordinated drawings built to perform for decades." },
  { icon: Timer, title: "Fast Project Delivery", text: "Streamlined workflows that keep your schedule on track." },
  { icon: PiggyBank, title: "Cost Efficient Solutions", text: "Value engineering that optimises capital and running costs." },
  { icon: ShieldCheck, title: "Compliance with Standards", text: "Designs aligned with local codes and international standards." },
  { icon: HeartHandshake, title: "Customer Focused", text: "Clear communication and support from concept to handover." },
];

export const steps = [
  { icon: MessageSquare, title: "Consultation" },
  { icon: MapPin, title: "Site Inspection" },
  { icon: PenTool, title: "Engineering Design" },
  { icon: ClipboardCheck, title: "Client Review" },
  { icon: HardHat, title: "Construction Support" },
  { icon: Flag, title: "Project Completion" },
];

export const projects = [
  { img: p1, name: "Meridian Corporate Tower", location: "Makati City", discipline: "Full MEPF", type: "Commercial", year: 2025 },
  { img: p2, name: "Apex Central Chiller Plant", location: "Laguna Technopark", discipline: "Mechanical", type: "Industrial", year: 2024 },
  { img: p3, name: "Riverside Medical Center", location: "Quezon City", discipline: "Electrical & Plumbing", type: "Institutional", year: 2024 },
  { img: p4, name: "Harborview Fire Pump Upgrade", location: "Cebu City", discipline: "Fire Protection", type: "Residential", year: 2023 },
];

export const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Engineering Disciplines" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const testimonials = [
  { quote: "VAREON's coordinated MEPF design saved us months on site. Their engineers were responsive and exceptionally thorough.", name: "Maria Santos", role: "Project Director, Meridian Developments" },
  { quote: "The chiller plant redesign cut our energy costs significantly. A truly professional and reliable engineering partner.", name: "James Lim", role: "Facilities Manager, Apex Manufacturing" },
  { quote: "From permit plans to commissioning, the team handled everything with precision. We will work with them again.", name: "Dr. Ana Reyes", role: "Administrator, Riverside Medical Center" },
];
