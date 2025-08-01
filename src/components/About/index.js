import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { MdMilitaryTech } from "react-icons/md";
import {
  AboutSection,
  AboutHeader,
  HeaderArrow,
  AboutInner,
  AboutLeft,
  AboutRight,
  AboutImage,
  AboutDesc,
  AboutTech,
  TechList,
  TechItem,
  IconHolder,
} from "./AboutElements";
const About = () => {
  return (
    <AboutSection id="about-section" className="content-section">
      <AboutHeader>
        <HeaderArrow className="header--arrow">
          <AiOutlineDoubleRight />
        </HeaderArrow>
        About Me
      </AboutHeader>
      <AboutInner>
        <AboutLeft>
          <AboutDesc>
            Hey there! My name is Mike and I am a front-end developer who enjoys
            creating clean, robust and visually pleasing user interfaces for the
            web. I have experience working in fast-paced start-up environments
            and love sharing knowledge and good vibes with other awesome
            developers.
          </AboutDesc>
          <AboutDesc>
            I'm am also a proud United States Marine Corps Veteran. Semper
            Fidelis!
          </AboutDesc>
          <AboutTech>
            Here are some technologies I have worked with or have knowledge of:
          </AboutTech>
          <TechList>
            <TechItem>Javascript</TechItem>
            <TechItem>Typescript</TechItem>
            <TechItem>React | React-Query</TechItem>
            <TechItem>REST API</TechItem>
            <TechItem>Next.js</TechItem>
            <TechItem>Payload & Sanity CMS</TechItem>
            <TechItem>Redux Toolkit | RTK-Query</TechItem>
            <TechItem>Tailwind CSS</TechItem>
            <TechItem>HTML5 | CSS3</TechItem>
            <TechItem>SASS | Less</TechItem>
            <TechItem>Material-UI</TechItem>
            <TechItem>Recharts</TechItem>
            <TechItem>Bootstrap</TechItem>
            <TechItem>Node.js</TechItem>
            <TechItem>Express</TechItem>
            <TechItem>Postgresql</TechItem>
            <TechItem>Jest | Cypress</TechItem>
            <TechItem>Webpack</TechItem>
            <TechItem>Docker</TechItem>
            <TechItem>Github Copilot</TechItem>
            <TechItem>Cursor</TechItem>
            <TechItem>AWS (EC2, RDS, Amplify, S3)</TechItem>
          </TechList>
        </AboutLeft>
        <AboutRight>
          <AboutImage src="/images/Profile.jpg" />
        </AboutRight>
      </AboutInner>
    </AboutSection>
  );
};

export default About;
