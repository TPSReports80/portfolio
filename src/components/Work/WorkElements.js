import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const WorkContainer = styled.section``;
export const WorkHeader = styled.h4``;

export const HeaderArrow = styled.div``;
export const TabContainer = styled.div`
  gap: 4rem;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TabsBtnContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Tabs = styled.div`
  font-size: 1.4rem;
  letter-spacing: 0.12rem;
  font-family: var(--fira-sans);
  height: 5rem;
  align-items: center;
  display: flex;
  padding: 0 2rem;
  border-left: 2px solid var(--slate);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  min-width: 24rem;

  &:hover {
    border-left: 2px solid var(--light-blue-green);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: var(--light-blue-green);
    background-color: rgba(136, 146, 176, 0.3);
  }
  &.active-tab {
    border-left: 2px solid var(--light-blue-green);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: var(--light-blue-green);
  }
  @media screen and (max-width: 768px) {
    border-left: none;
    min-width: 0;
    &.active-tab,
    &:hover {
      border-left: none;
      border-bottom: 2px solid var(--light-blue-green);
    }
  }
`;
export const JobTitle = styled.h5`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
export const JobLength = styled.p`
  font-family: var(--sf-mono);
  font-size: 1.2rem;
  color: var(--light-slate);
  margin-bottom: 1rem;
`;
export const JobDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  gap: 0.5rem;
  &::before {
    content: "▹";
    left: 0px;
    margin-right: 0.8rem;
    color: var(--light-blue-green);
    font-size: 1.4rem;
  }
`;
export const JobLink = styled(LinkR)`
  font-size: 1.8rem;
  color: var(--light-blue-green);
`;
export const ClientList = styled.ul`
  display: grid;
  grid-gap: 0.8rem;
  grid-template: 1fr 1fr / 1fr 2fr;
  margin: 2rem 0 2rem 2.5rem;
`;
export const Client = styled.li`
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  list-style: none;
  font-family: var(--sf-mono);
  &::before {
    content: "▹";
    left: 0px;
    margin-right: 0.8rem;
    color: var(--light-blue-green);
    font-size: 1.4rem;
  }
`;
export const TabContentContainer = styled.div``;

export const TabsContent = styled.div`
  font-size: 1.6rem;
  display: none;
  &.active-content {
    display: block;
  }
`;
