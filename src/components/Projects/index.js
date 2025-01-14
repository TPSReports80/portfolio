import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  ProjectContainer,
  ProjectHeader,
  HeaderArrow,
  ProjectList,
  ProjectItem,
  ProjectContent,
  ProjectOverline,
  ProjectTitle,
  ProjectDesc,
  ProjectTechList,
  ProjectTechItem,
  ProjectLink,
  ProjectLinks,
  ProjectImageContent,
  ProjectImageLink,
  ProjectImage,
} from "./ProjectElements";
const Project = () => {
  return (
    <ProjectContainer id="project-section" className="content-section">
      <ProjectHeader>
        <HeaderArrow className="header--arrow">
          <AiOutlineDoubleRight />
        </HeaderArrow>
        Projects for Fun
      </ProjectHeader>
      <ProjectList>
        <ProjectItem>
          <ProjectContent className="project-content">
            <div>
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>UpTunes App</ProjectTitle>
              <ProjectDesc>
                <p>
                  Come check out the hottest albums from your favorite artists!
                  Add your favorite albums to your collection and listen to them
                  on the go!
                </p>
              </ProjectDesc>
              <ProjectTechList className="tech-list">
                <ProjectTechItem>Typescript</ProjectTechItem>
                <ProjectTechItem>React</ProjectTechItem>
                <ProjectTechItem>Tailwind</ProjectTechItem>
                <ProjectTechItem>SCSS</ProjectTechItem>
                <ProjectTechItem>Framer Motion</ProjectTechItem>
                <ProjectTechItem>Last FM API</ProjectTechItem>
                <ProjectTechItem>Vite</ProjectTechItem>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <ProjectLink
                  target="_blank"
                  to={{
                    pathname: "//github.com/TPSReports80/uptunes-app",
                  }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//uptunes.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//uptunes.netlify.app/" }}
            >
              <ProjectImage src="/images/uptunes.png" />
            </ProjectImageLink>
          </ProjectImageContent>
        </ProjectItem>
        <ProjectItem>
          <ProjectContent className="project-content">
            <div>
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>MetaGym App</ProjectTitle>
              <ProjectDesc>
                <p>
                  Looking to shed some holiday pounds? Come check out our fully
                  responsive website and see what our gym as to offer!
                </p>
              </ProjectDesc>
              <ProjectTechList className="tech-list">
                <ProjectTechItem>Typescript</ProjectTechItem>
                <ProjectTechItem>React</ProjectTechItem>
                <ProjectTechItem>React Hook Forms</ProjectTechItem>
                <ProjectTechItem>Tailwind</ProjectTechItem>
                <ProjectTechItem>Framer Motion</ProjectTechItem>
                <ProjectTechItem>Vite</ProjectTechItem>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <ProjectLink
                  target="_blank"
                  to={{
                    pathname: "//github.com/TPSReports80/evogym-typescript",
                  }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//mikejoodev-gym-app.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//mikejoodev-gym-app.netlify.app" }}
            >
              <ProjectImage src="/images/metagym-screenshot.png" />
            </ProjectImageLink>
          </ProjectImageContent>
        </ProjectItem>
        <ProjectItem>
          <ProjectContent className="project-content">
            <div>
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>MeTube Video App</ProjectTitle>
              <ProjectDesc>
                <p>
                  Check out MeTube, a fully responsive Youtube clone app that
                  uses the Youtube RapidAPI to allow users to search and view
                  their favorite videos without all the extra fuss.
                </p>
              </ProjectDesc>
              <ProjectTechList className="tech-list">
                <ProjectTechItem>VS Code</ProjectTechItem>
                <ProjectTechItem>React</ProjectTechItem>
                <ProjectTechItem>Material-UI</ProjectTechItem>
                <ProjectTechItem>RapidAPI</ProjectTechItem>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <ProjectLink
                  target="_blank"
                  to={{
                    pathname: "//github.com/TPSReports80/MeTube-video-app",
                  }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//metube-joo.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//metube-joo.netlify.app" }}
            >
              <ProjectImage src="/images/metube.png" />
            </ProjectImageLink>
          </ProjectImageContent>
        </ProjectItem>
        <ProjectItem>
          <ProjectContent className="project-content">
            <div>
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>NextLevel Food App</ProjectTitle>
              <ProjectDesc>
                <p>
                  An aesthically beautiful food website that lets you search for
                  meals and share your favorite recipes!
                </p>
              </ProjectDesc>
              <ProjectTechList className="tech-list">
                <ProjectTechItem>Next.js 14</ProjectTechItem>
                <ProjectTechItem>React</ProjectTechItem>
                <ProjectTechItem>Typescript</ProjectTechItem>
                <ProjectTechItem>Better-Sqlite3</ProjectTechItem>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <ProjectLink
                  target="_blank"
                  to={{
                    pathname: "//github.com/TPSReports80/nextlevel-foodies",
                  }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//nextlevel-foods.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//nextlevel-foods.netlify.app" }}
            >
              <ProjectImage src="/images/nextlevel.png" />
            </ProjectImageLink>
          </ProjectImageContent>
        </ProjectItem>

        <ProjectItem>
          <ProjectContent className="project-content">
            <div>
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>Forkify App</ProjectTitle>
              <ProjectDesc>
                <p>
                  A fun React application that lets you search millions of
                  delicious recipes from over 125 search queries. Try
                  customizing your servings and bookmarking your favorite
                  recipes!
                </p>
              </ProjectDesc>
              <ProjectTechList className="tech-list">
                <ProjectTechItem>VS Code</ProjectTechItem>
                <ProjectTechItem>React</ProjectTechItem>
                <ProjectTechItem>Styled Components</ProjectTechItem>
                <ProjectTechItem>API</ProjectTechItem>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//github.com/TPSReports80/forkify" }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//forkify-mjoo.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//forkify-mjoo.netlify.app" }}
            >
              <ProjectImage src="/images/forkify.png" />
            </ProjectImageLink>
          </ProjectImageContent>
        </ProjectItem>
        <ProjectItem>
          <ProjectContent className="project-content">
            <div>
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>Mapty App</ProjectTitle>
              <ProjectDesc>
                <p>
                  Need to map your workouts? Try Mapty, a cool and useful
                  application that helps you track your workouts using your
                  geolocation!
                </p>
              </ProjectDesc>
              <ProjectTechList className="tech-list">
                <ProjectTechItem>VS Code</ProjectTechItem>
                <ProjectTechItem>React</ProjectTechItem>
                <ProjectTechItem>Styled Components</ProjectTechItem>
                <ProjectTechItem>API</ProjectTechItem>
                <ProjectTechItem>Leaflet.js</ProjectTechItem>
                <ProjectTechItem>React-Leaflet</ProjectTechItem>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//github.com/TPSReports80/mapty-v2" }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//mapty-joo.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//mapty-joo.netlify.app" }}
            >
              <ProjectImage src="/images/mapty.png" />
            </ProjectImageLink>
          </ProjectImageContent>
        </ProjectItem>
      </ProjectList>
    </ProjectContainer>
  );
};

export default Project;
