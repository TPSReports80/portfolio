import styled from "styled-components";

export const AboutSection = styled.section``;

export const AboutHeader = styled.h4``;
export const HeaderArrow = styled.div``;
export const AboutInner = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 3fr 2fr;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const AboutDesc = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

export const AboutTech = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

export const TechList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(3, 1fr) / 1fr 1fr;
  list-style: none;
  font-family: var(--fira-sans);
`;

export const TechItem = styled.li`
  font-size: 1.3rem;
  cursor: default;
  letter-spacing: 0.5px;

  &:hover {
    transition: 0.3s ease-in-out;
    color: var(--light-slate);
  }
  &:before {
    content: "▹";
    left: 0px;
    margin-right: 0.8rem;
    color: var(--light-blue-green);
    font-size: 1.4rem;
  }
`;
export const AboutLeft = styled.div``;

export const AboutRight = styled.div`
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 5rem auto 0;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

export const IconHolder = styled.span`
  font-size: 3.6rem;
  vertical-align: middle;
  margin-left: 0.5rem;
  display: inline-block;
  color: var(--light-slate);
`;
