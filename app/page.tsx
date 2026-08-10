import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { WhyRelais } from "@/components/home/WhyRelais";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <SolutionsShowcase />
      <WhyRelais />
      <ProjectsShowcase />
    </>
  );
}
