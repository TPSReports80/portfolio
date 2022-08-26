import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  align-items: flex-start;
  justify-content: center;
  padding: 0;
`;

export const IntroP = styled.p`
  color: var(--light-blue-green);
  font-size: 1.6rem;
  font-family: var(--fira-sans);
  letter-spacing: 0.12rem;
  margin-bottom: 1.6rem;
`;

export const HeroName = styled.h2`
  font-size: clamp(3rem, 6vw, 7rem);
  color: var(--light-slate);
  font-weight: bold;
`;

export const HeroTitle = styled.h2`
  font-weight: bold;
  font-size: clamp(3rem, 6vw, 7rem);
  margin-bottom: 2rem;
`;

export const HeroDesc = styled.p`
  font-size: 1.6rem;
  letter-spacing: 1px;
  line-height: 2.8rem;
  margin-bottom: 2rem;
  max-width: 50rem;
  color: var(--slate);
`;

export const HeroSiteP = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  line-height: 2.4rem;
  margin-bottom: 4.2rem;
  color: var(--slate);
`;

export const HeroScroll = styled(LinkS)`
  border: 1px solid var(--light-blue-green);
  color: var(--light-blue-green);
  font-size: 1.4rem;
  padding: 1.8rem 2.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
  letter-spacing: 0.1rem;
`;
