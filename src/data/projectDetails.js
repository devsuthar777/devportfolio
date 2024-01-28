import porfolio from '../../src/core/assests/project/portfolioLogo.png'
import devTute from '../../src/core/assests/project/devtute.png'
import prorFolioLogoDark from '../../src/core/assests/project/portFolioLogoDark.png'
import clogo from "../core/assests/stack/c-logo.png";
import jsLogo from "../core/assests/stack/Javascript.svg"
import sqlLogo from '../core/assests/stack/sql-logo.png'
import cssLogo from '../core/assests/stack/CSS.png'
import htmlLogo from '../core/assests/stack/HTML.png'
import javaLogo from '../core/assests/stack/Bash.svg'
import jQueryLogo from '../core/assests/stack/jquery.svg'
import tailwindLogo from '../core/assests/stack/Tailwind.png'
import reactLogo from '../core/assests/stack/React.png'
import nodeLogo from '../core/assests/stack/NodeJs.svg'
import expressLogo from '../core/assests/stack/Express.png'
import reduxLogo from '../core/assests/stack/Redux.svg'
import gitLogo from '../core/assests/stack/Git.svg'
import postmanLogo from '../core/assests/stack/postman.svg' 
import MongoDB from '../core/assests/stack/MongoDB.svg'
export const projectDetails= [
    {
        "ProjectTitle" : "Portfolio WebSite",
        "projectDesc" : "It's an interactive, user-friendly, and fascinating digital portfolio website for displaying my skills and projects.",
        "projectTechLogos":[{"logo":reactLogo},{"logo":nodeLogo},{"logo":cssLogo},{"logo":tailwindLogo}],
        "path":"/project",
        "projectImg": prorFolioLogoDark
    },
    {
        "ProjectTitle" : "DevTute",
        "projectDesc" : "DevTute is a fully functional EdTech platform that enables online Learners and Tutors to create, consume, and rate educational content.",
        "projectTechLogos":[{"logo":reactLogo},{"logo":nodeLogo},{"logo":expressLogo},{"logo":tailwindLogo},{"logo":MongoDB}],
        "path":"/project",
        "projectImg": devTute
    }
]