import React from "react";
import { CgMenu } from "react-icons/cg";
import { useSpring, animated } from "react-spring";
import Resume from "../../static/Resume-Mike-Joo.pdf";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ResumeLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [navbarState, setNavbarState] = React.useState(false);
  const props = useSpring({
    delay: 500,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarState(true);
    } else {
      setNavbarState(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  return (
    <>
      <Nav id="nav" className={navbarState ? "active" : ""}>
        <NavbarContainer>
          <NavLogo
            to="hero-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <img src="/images/logo_67x67.png" alt="logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <CgMenu />
          </MobileIcon>
          <animated.div style={props} className="nav-menu-container">
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-180}
                  duration={500}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="work-section"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                >
                  Experience
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="project-section"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                >
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <ResumeLink className="box-link" target="_blank" to={Resume}>
                  Resume
                </ResumeLink>
              </NavItem>
            </NavMenu>
          </animated.div>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
