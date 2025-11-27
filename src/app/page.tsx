import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Certificates from "../components/Certificates";

export default function Home() {
  return (
    <div className="bg-background font-sans">
      <main className="mx-auto w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
      </main>
    </div>
  );
}
