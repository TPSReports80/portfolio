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
        Projects for Fun (needs updating)
      </ProjectHeader>
      <ProjectList>
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
              <ProjectTitle>My Gym App</ProjectTitle>
              <ProjectDesc>
                <p>
                  A simple yet highly versatile application that searches
                  through thousands of workouts depending on your search
                  criterias. Try out similar workouts and watch youtube videos
                  that are specific to your workout.
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
                  to={{ pathname: "//github.com/TPSReports80/my-gym" }}
                >
                  <FiGithub />
                </ProjectLink>
                <ProjectLink
                  target="_blank"
                  to={{ pathname: "//my-gym-joo.netlify.app" }}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImageContent className="project-image-content">
            <ProjectImageLink
              target="_blank"
              to={{ pathname: "//my-gym-joo.netlify.app" }}
            >
              <ProjectImage src="/images/my-gym.png" />
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
