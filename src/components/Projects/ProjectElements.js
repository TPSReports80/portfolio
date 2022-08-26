import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const ProjectContainer = styled.section`
  margin-bottom: 100px;
`;

export const ProjectHeader = styled.h4``;
export const HeaderArrow = styled.div``;
export const ProjectList = styled.ul``;

export const ProjectItem = styled.li`
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  &:nth-of-type(2n + 1) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
    }
    .project-image-content {
      grid-column: 1 / 8;
    }
    .tech-list {
      justify-content: flex-end;
      li {
        margin: 0 0 5px 20px;
      }
    }
    @media screen and (max-width: 768px) {
      .project-content {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      .project-image-content {
        grid-column: 1 / -1;
      }
      .tech-list {
        justify-content: flex-start;

        li {
          margin: 0 20px 5px 0;
        }
      }
    }
  }

  &:nth-of-type(2n) {
    .project-links {
      justify-content: flex-start;
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 18rem;
  }

  @media screen and (max-width: 768px) {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    &:not(:last-of-type) {
      margin-bottom: 10rem;
    }
    .project-content {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    .project-image-content {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
  grid-area: 1 / 1 / -1 / 7;
`;

export const ProjectOverline = styled.p`
  font-family: var(--sf-mono);
  color: var(--light-blue-green);
  font-size: 1.2rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--light-slate);
`;
export const ProjectDesc = styled.div`
  background-color: var(--light-navy);
  border-radius: 0.4rem;
  padding: 2rem;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  p {
    font-size: 1.4rem;
    color: var(--mid-slate);
  }
  @media screen and (max-width: 768px) {
    background-color: transparent;
    padding: 0;
  }
`;

export const ProjectTechList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  padding: 0;
  margin: 2.5rem 0 1rem;
`;

export const ProjectTechItem = styled.li`
  font-size: 1.3rem;
  color: var(--mid-slate);
  white-space: nowrap;
  font-family: var(--sf-mono);
  margin: 0px 20px 5px 0px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

export const ProjectLink = styled(LinkR)`
  padding: 1rem;
  svg {
    height: 2rem;
    width: 2rem;

    color: var(--light-slate);
    transition: 0.2s ease-in all;
    &:hover {
      color: var(--light-blue-green);
      transition: 0.2s ease-in all;
    }
  }
`;

export const ProjectImageContent = styled.div`
  box-shadow: 0 1rem 3rem -1.5rem var(--navy-shadow);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  filter: hue-rotate(210deg) grayscale(30%) contrast(65%) brightness(27%);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    filter: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const ProjectImageLink = styled(LinkR)`
  width: 100%;
  height: 30rem;
  display: inline-block;
  vertical-align: middle;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;
