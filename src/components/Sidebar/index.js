import React from "react";
import {
  SidebarContainer,
  IconContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <IconContainer onClick={toggle}>
        <CloseIcon />
      </IconContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about-section" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="work-section" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="project-section" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact-section" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
