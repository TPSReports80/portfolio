import React from "react";
import { useSpring, animated } from "react-spring";
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import {
  IconLinkContainer,
  IconList,
  IconLink,
  IconItem,
} from "./LeftIconLinksElements";
const LeftIconLinks = () => {
  const props = useSpring({
    delay: 800,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <IconLinkContainer>
        <IconList>
          <IconItem>
            <IconLink
              target="_blank"
              to={{ pathname: "//github.com/TPSReports80" }}
            >
              <FiGithub />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              to={{ pathname: "//linkedin.com/in/mike-joo-23869a5" }}
            >
              <FiLinkedin />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              to={{ pathname: "//instagram.com/tpsreports80" }}
            >
              <FiInstagram />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              to={{ pathname: "//facebook.com/miknike" }}
            >
              <FiFacebook />
            </IconLink>
          </IconItem>
        </IconList>
      </IconLinkContainer>
    </animated.div>
  );
};

export default LeftIconLinks;
