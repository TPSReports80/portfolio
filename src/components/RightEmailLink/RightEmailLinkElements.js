import styled from "styled-components";
import { Link } from "react-router-dom";
export const LinkContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: var(--light-slate);

  opacity: 1;

  @media screen and (max-width: 1080px) {
    left: auto;
    right: 20px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
`;

export const EmailLink = styled.a`
  margin: 20px auto;
  padding: 10px;
  font-family: var(--sf-mono);
  font-size: 1.2rem;
  line-height: 20px;
  letter-spacing: 0.1em;
  color: var(--light-slate);
  transition: 0.3s ease-in-out all;

  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  display: inline-block;
  &:hover {
    color: var(--light-blue-green);
    transition: 0.3s ease-in-out all;
  }
`;
