import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  font-size: 1.2rem;
  transition: 0.3 ease-in-out all;
  background: var(--dark-blue);
  top: 0;
  z-index: 10;

  &.active {
    width: 100%;
    transition: 3 ease-in-out all;
    background-color: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(6px);
    box-shadow: 0px 0px 10px var(--navy-shadow);
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  z-index: 1;
  width: 100%;
  padding: 1rem 4rem;
  align-items: center;
`;
export const NavLogo = styled(LinkS)`
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;

  display: flex;
  justify-items: center;
  align-items: center;
  letter-spacing: 0.1rem;
  img {
    width: 48px;
    height: 48px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    color: var(--light-blue-green);
    font-size: 6rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const NavLinks = styled(LinkS)`
  color: var(--light-slate);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: var(--sf-mono);
  transition: 0.3s ease-in-out;

  &.active,
  &:hover {
    color: var(--light-blue-green);
    transition: 0.3s ease-in-out;
  }
`;

export const ResumeLink = styled(LinkR)`
  font-size: 1.3rem;
  font-weight: lighter;
  border: 1px solid var(--light-blue-green);
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;
  letter-spacing: 0.5px;
  color: var(--light-blue-green);
`;
