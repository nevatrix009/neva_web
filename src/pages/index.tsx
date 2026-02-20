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
            title="Custom Web Development Company | Nevatrix"
            description="Nevatrix is a custom web development company delivering scalable, secure web solutions for startups and businesses. Get a free consultation."
            url="https://nevatrix.com"
        />
            <Hero />
          <AboutSection />
          <WhatWeDo />
            <MissionSection />
            <MissionVision />

      </>
  );
}
