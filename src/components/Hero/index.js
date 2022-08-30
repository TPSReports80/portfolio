import React from "react";
import {
  HeroSection,
  IntroP,
  HeroName,
  HeroTitle,
  HeroDesc,
  HeroSiteP,
  HeroScroll,
} from "./HeroElements";

const Hero = () => {
  React.useEffect(() => {
    document.getElementById("hero-section").classList.remove("section--hidden");
  }, []);
  return (
    <HeroSection id="hero-section" className="section--hidden">
      <IntroP>Hi, my name is</IntroP>
      <HeroName>Mike Joo.</HeroName>
      <HeroTitle>I am a Front-End Developer</HeroTitle>
      <HeroDesc>
        who specializes in building clean and scalable applications for the
        modern web. I am currently residing in Los Angeles, California.
      </HeroDesc>
      <HeroSiteP>
        This site is built using React and Styled Components.
      </HeroSiteP>
      <HeroScroll
        className="box-link"
        to="about-section"
        spy={true}
        smooth={true}
        offset={-180}
        duration={500}
      >
        About Me
      </HeroScroll>
    </HeroSection>
  );
};

export default Hero;
