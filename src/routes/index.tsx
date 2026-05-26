import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Lindgren — .NET Cloud Developer" },
      {
        name: "description",
        content:
          "Portfolio för Alex Lindgren — .NET Cloud Developer som bygger skalbara molnlösningar med C#, Azure och distribuerad arkitektur.",
      },
      { property: "og:title", content: "Alex Lindgren — .NET Cloud Developer" },
      {
        property: "og:description",
        content: "Skalbara molnlösningar i .NET och Azure. Projekt, CV och kontakt.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
