import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Service from "@/components/main/Service";
import FAQ from "@/components/main/FAQ";
import ProjectDetailTab from "@/components/sub/Projectdetailtab";
import TeamDetails from "@/components/sub/TeamDetails";
import Compare from "@/components/sub/compare";
import Pricing from "@/components/sub/Pricing";
import Add from "@/components/sub/Add";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <ProjectDetailTab />
        <Compare />
        <TeamDetails />
        <Skills />
        <Encryption />
        <Service />
        <Projects />
        <Pricing />
        <FAQ/>
        <Add />
      </div>
    </main>
  );
}
