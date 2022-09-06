import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  TabContainer,
  WorkContainer,
  TabsBtnContainer,
  Tabs,
  TabContentContainer,
  TabsContent,
  WorkHeader,
  HeaderArrow,
  JobLength,
  JobTitle,
  JobDesc,
  JobLink,
  Client,
  ClientList,
} from "./WorkElements";
const Work = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <WorkContainer id="work-section" className="content-section">
      <WorkHeader>
        <HeaderArrow className="header--arrow">
          <AiOutlineDoubleRight />
        </HeaderArrow>
        Work Experience
      </WorkHeader>
      <TabContainer>
        <TabsBtnContainer>
          <Tabs
            className={toggleState === 1 ? "active-tab" : "tab"}
            onClick={() => toggleTab(1)}
          >
            Career Break
          </Tabs>
          <Tabs
            className={toggleState === 2 ? "active-tab" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Brighter Inc.
          </Tabs>
          <Tabs
            className={toggleState === 3 ? "active-tab" : "tab"}
            onClick={() => toggleTab(3)}
          >
            Square One Solutions Inc.
          </Tabs>
        </TabsBtnContainer>
        <TabContentContainer>
          <TabsContent
            className={toggleState === 1 ? "active-content" : "tab-content"}
          >
            <JobTitle>Career Break</JobTitle>
            <JobLength>Jul 2020 - Present</JobLength>
            <JobDesc>
              I took some time-off due to personal reasons. I also made use of
              this period to strengthen my knowledge and be kept up-to-date with
              current technologies.
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 2 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              Senior UI Developer{" "}
              <JobLink
                target="_blank"
                to={{ pathname: "//my.cigna.com/web/public/guest" }}
              >
                @ Cigna Digital
              </JobLink>
            </JobTitle>
            <JobLength>Sep 2013 - Jun 2020</JobLength>
            <JobDesc>
              Formally known as Brighter Inc. until it's acquisition by Cigna
              Health, I started as the sole front-end UI developer in a start-up
              team of 8 developers.
            </JobDesc>
            <JobDesc>
              I worked closely with in-house designers to transform PSD mocks
              into pixel-perfect webpages for the flagship website.
            </JobDesc>
            <JobDesc>
              Mentored incoming UI developers on current coding standards and
              assisted other fellow developers with front-end issues.
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 3 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              UI Developer{" "}
              <JobLink
                target="_blank"
                to={{ pathname: "//squareonesolutions.net/" }}
              >
                @ Square One Solutions Inc.
              </JobLink>
            </JobTitle>
            <JobLength>Jun 2012 - Sep 2013</JobLength>
            <JobDesc>
              Worked in a 3 person UI team that delivered UI web development for
              clients such as but not limited to:
            </JobDesc>
            <ClientList>
              <Client>DirectTV</Client>
              <Client>ValleyCrest Landscape</Client>
              <Client>Union Bank</Client>
              <Client>Green Dot Financial</Client>
              <Client>Agile Health</Client>
            </ClientList>
            <JobDesc>
              Also focused on grid layout web development utilizing Twitter
              Bootstrap and responsive UI for mobile and tablet devices.
            </JobDesc>
          </TabsContent>
        </TabContentContainer>
      </TabContainer>
    </WorkContainer>
  );
};

export default Work;
