import React from "react";
import { useSpring, animated } from "react-spring";
import {
  LinkContainer,
  LinkWrapper,
  EmailLink,
} from "./RightEmailLinkElements";
const RightEmailLink = () => {
  const props = useSpring({
    delay: 1000,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <LinkContainer id="right--links">
        <LinkWrapper>
          <EmailLink target="_blank" href="mailto:mikejoo80@gmail.com">
            mikejoo80@gmail.com
          </EmailLink>
        </LinkWrapper>
      </LinkContainer>
    </animated.div>
  );
};

export default RightEmailLink;
