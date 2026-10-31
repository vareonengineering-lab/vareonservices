import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About, Services, WhyUs, Process, Projects, Stats, Testimonials } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";

const title = "VAREON Engineering Services | MEPF Engineering Solutions";
const description = "Professional Mechanical, Electrical, Plumbing and Fire Protection engineering for commercial, industrial, residential and institutional projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
