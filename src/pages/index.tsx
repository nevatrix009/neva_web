import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import MissionVision from "@/components/MissionVision";


export default function Home() {
  return (
      <>
        <SEO
            title="Nevatrix | Web Development, AI & Digital Marketing Company"
            description="Nevatrix provides web development, AI solutions, UI UX design, and digital marketing services for modern businesses."
        />
            <Hero />
          <AboutSection />
          <WhatWeDo />
            <MissionSection />
            <MissionVision />

      </>
  );
}
