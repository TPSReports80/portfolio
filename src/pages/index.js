import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Main } from "./Main";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Project from "../components/Projects";
import Contact from "../components/Contact";
import LeftIconLinks from "../components/LeftIconLinks";
import RightEmailLink from "../components/RightEmailLink";

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const revealSectionFn = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionOptions = {
    root: null,
    threshold: 0.15,
  };

  const sectionObserver = new IntersectionObserver(
    revealSectionFn,
    sectionOptions
  );
  React.useEffect(() => {
    const allSections = document.querySelectorAll(".content-section");

    allSections.forEach((sec) => {
      sec.classList.add("section--hidden");
      sectionObserver.observe(sec);
    });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <LeftIconLinks />
      <RightEmailLink />
      <Main>
        <Hero />
        <About />
        <Work />
        <Project />
        <Contact />
      </Main>
    </>
  );
};

export default Home;
