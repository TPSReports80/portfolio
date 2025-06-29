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
            Upwards Inc.
          </Tabs>
          <Tabs
            className={toggleState === 2 ? "active-tab" : "tab"}
            onClick={() => toggleTab(2)}
          >
            ExtraHop Inc.
          </Tabs>
          <Tabs
            className={toggleState === 3 ? "active-tab" : "tab"}
            onClick={() => toggleTab(3)}
          >
            SparkCognition Government Systems
          </Tabs>
          <Tabs
            className={toggleState === 4 ? "active-tab" : "tab"}
            onClick={() => toggleTab(4)}
          >
            Career Break
          </Tabs>
          <Tabs
            className={toggleState === 5 ? "active-tab" : "tab"}
            onClick={() => toggleTab(5)}
          >
            Brighter Inc.
          </Tabs>
          <Tabs
            className={toggleState === 6 ? "active-tab" : "tab"}
            onClick={() => toggleTab(6)}
          >
            Square One Solutions Inc.
          </Tabs>
        </TabsBtnContainer>
        <TabContentContainer>
          <TabsContent
            className={toggleState === 1 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              Senior Frontend Developer |{" "}
              <JobLink target="_blank" to={{ pathname: "//upwards.com/" }}>
                Upwards Inc.
              </JobLink>
            </JobTitle>
            <JobLength>Mar 2025 - Present</JobLength>
            <JobDesc>
              Software Engineer for Upwards, a leading technology start-up that
              offers the largest childcare network in the United States.
            </JobDesc>
            <JobDesc>
              Tech Stack: React, Typescript, Tailwind CSS, Redux, PHP, jQuery,
              Jenkins, Cursor
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 2 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              Web Developer III |{" "}
              <JobLink target="_blank" to={{ pathname: "//extrahop.com/" }}>
                ExtraHop Inc.
              </JobLink>
            </JobTitle>
            <JobLength>May 2024 - Dec 2024</JobLength>
            <JobDesc>
              Web Developer for a startup specializing in cybersecurity and
              providing AI-based network intelligence.
            </JobDesc>
            <JobDesc>
              Tech Stack: React, Next.js, Sanity CMS, Tailwind CSS, Gitlab
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 3 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              Software Engineer III |{" "}
              <JobLink target="_blank" to={{ pathname: "//sparkgov.ai/" }}>
                SparkCognition Government Systems (SGS)
              </JobLink>
            </JobTitle>
            <JobLength>Mar 2023 - Feb 2024</JobLength>
            <JobDesc>
              Front-End Engineer for a start-up specializing in providing
              AI-based software solutions for national and military defense.
            </JobDesc>
            <JobDesc>
              Tech Stack: Typescript, React, Next.js, Effector, ElasticSearch,
              Payload CMS, Cypress, MUI, Docker, Gitlab
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 4 ? "active-content" : "tab-content"}
          >
            <JobTitle>Career Break</JobTitle>
            <JobLength>Sep 2020 - Feb 2023</JobLength>
            <JobDesc>
              I took time-off and a break from my career due to the pandemic and
              for personal reasons. I also took advantage of this time to keep
              up-to-date with current technologies.
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 5 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              Senior UI Developer |{" "}
              <JobLink
                target="_blank"
                to={{ pathname: "//my.cigna.com/web/public/guest" }}
              >
                Cigna Digital
              </JobLink>
            </JobTitle>
            <JobLength>Sep 2013 - Jul 2020</JobLength>
            <JobDesc>
              Formally known as Brighter Inc. I was initially brought on as the
              only front-end developer in a start-up team of 7 developers to
              help build and maintain the company's websites through multiple
              versions and updates.
            </JobDesc>
            <JobDesc>
              Worked closely with the UI designer to ensure all pages were built
              per spec and collaborated on responsive design and layout.
            </JobDesc>
            <JobDesc>
              Lead the transformation of our sites to ensure all pages were W3C
              compliant (semantic labeling, color contrast, keyboard navigation,
              screen reader) and assisted in its documentation using Confluence.
            </JobDesc>
            <JobDesc>
              Mentored incoming junior front-end developers on current company
              coding standards.
            </JobDesc>
            <JobDesc>
              Participated in bi-weekly to daily Scrum meetings using Agile
              methodology with 2-to-3-week long sprints.
            </JobDesc>
          </TabsContent>
          <TabsContent
            className={toggleState === 6 ? "active-content" : "tab-content"}
          >
            <JobTitle>
              UI Developer |{" "}
              <JobLink
                target="_blank"
                to={{ pathname: "//squareonesolutions.net/" }}
              >
                Square One Solutions Inc.
              </JobLink>
            </JobTitle>
            <JobLength>Jun 2012 - Sep 2013</JobLength>
            <JobDesc>
              Worked in a 6 person development team that delivered UI web
              development for clients such as but not limited to:
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
