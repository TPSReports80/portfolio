import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconLinkContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);
  @media screen and (max-width: 1080px) {
    left: 20px;
    right: auto;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
`;
export const IconItem = styled.li`
  &:last-of-type {
    margin-bottom: 2rem;
  }
`;
export const IconLink = styled(Link)`
  padding: 1rem;
  display: inline-block;
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--slate);
    transition: 0.3s ease-in-out all;
    &:hover {
      color: var(--light-blue-green);
    }
  }
`;
