import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Hire from "@/components/main/Hire";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Comments from "@/components/main/Comments";
import Education from "@/components/main/Education";
import ContactSection from "@/components/main/ContactSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Comments />
        <Education />
        <Hire />
        <ContactSection />
      </div>
    </main>
  );
}
