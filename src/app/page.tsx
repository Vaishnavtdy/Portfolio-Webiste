import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />

      <ScrollAnimationWrapper animation="fade-up">
        <About />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up">
        <Skills />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up">
        <Experience />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up">
        <Projects />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up">
        <Education />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up">
        <Contact />
      </ScrollAnimationWrapper>
    </div>
  );
}
