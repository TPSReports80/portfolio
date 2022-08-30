import { createGlobalStyle } from "styled-components";
import SFMonoLight from "./fonts/SFMonoLight.woff";

export const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: 'SF Mono Light';
    font-style: normal;
    font-weight: normal;
    src: local('SF Mono Light'), url(${SFMonoLight}) format('woff');
    }
    :root {
        --light-navy: #112240;
        --navy-shadow: rgba(2,12,27,0.7);
    --dark-blue: #0a1d2e;
    --blue: #0e2941;
    --light-slate: #ccd6f6;
    --mid-slate: #a8b2d1;
    --slate: #8892b0;
    --light-blue-green: #63ffea;
    --sf-mono: 'SF Mono Light', sans-serif;
    --open-sans: open-sans, sans-serif;
    }
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    }
    body {
    background: var(--dark-blue);
    background: linear-gradient(
        166deg,
        var(--dark-blue) 0%,
        var(--dark-blue) 60%,
        var(--blue) 100%
    );
    background-attachment: fixed;
    font-size: 1rem;
    font-family: var(--open-sans);
    color: var(--slate);
    }
    a {
        text-decoration: none;
    }
    .box-link {
    transition: 0.3s ease-in-out;
    }
    .box-link:hover {
        background: rgba(100, 255, 218, 0.1);
        transition: 0.3s ease-in-out;
    }
    section {
        max-width: 1000px;
        margin: 0 auto;
        padding: 100px 0;
        min-height: 80vh;
        transition: transform 1s, opacity 1s;
        @media screen and (max-width: 768px) {
            padding: 80px 0;
            min-height: auto;
        }
        &.section--hidden {
            opacity: 0;
            transform: translateY(8rem);
        }
    }
    h4 {
        letter-spacing: 0.1rem;
        font-size: clamp(2.2rem, 4.5vw, 2.6rem);
        color: var(--light-slate);
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        
    }
    h4::after {
        content: "";
        display: block;
        position: relative;
        width: 40rem;
        height: 1px;
        margin-left: 2rem;
        background-color: var(--slate);
    }
    .header--arrow {
        font-size: 4rem;
        margin-right: 0.8rem;
        color: var(--light-blue-green);
    }
    h5 {
        font-size: 1.8rem;
        color: var(--light-slate);
    }
    p {
        font-size: 1.6rem;
        letter-spacing: 0.1rem;
        line-height: 2.4rem;
        color: var(--light-slate);
    }
    .nav-menu-container {
        transition: 0.1s ease all;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;
