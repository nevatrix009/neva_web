import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import MissionVision from "@/components/MissionVision";


export default function Home() {
  return (
      <>
            <SEO/>
            <Hero />
            <AboutSection />
            <WhatWeDo />
            <MissionSection />
            <MissionVision />

      </>
  );
}
