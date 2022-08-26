import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: var(--light-blue-green);
`;

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  top: 2.4rem;
  right: 2.4rem;
  background: transparent;
  font-size: 5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--light-blue-green);
  }
`;
