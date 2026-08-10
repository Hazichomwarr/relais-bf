import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <SolutionsShowcase />
    </>
  );
}
