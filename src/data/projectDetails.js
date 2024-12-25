import porfolio from '../../src/core/assests/project/portfolioLogo.png'
import devTute from '../../src/core/assests/project/devtute.png'
import musicplayer from '../../src/core/assests/project/MusicPlayer.svg'
import prorFolioLogoDark from '../../src/core/assests/project/portFolioLogoDark.png'
import formbuilderPage from '../../src/core/assests/project/forbuilderPage.png'
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
        "path":"/projects/:portfolioWebsite",
        "projectImg": prorFolioLogoDark,
        "type":"iframe",
        "src":"https://devportfolio-frontend.vercel.app/",
        "projectName" : 'portfolioWebsite',
        "projectTechnologies" : 'HTML , CSS, TailWind CSS, JavaScript, ReactJs, NodeJs, Context API, MongoDB',
        "ProjectBriefDesc": [{'point':' Built a web application for my digital portfolio, describing myself. The portfolio is responsive and interactive, developed using ReactJs and Context API.'}, 
        {'point':'Implemented Back-end with NodeJs and Integreted with Restful APIs to extracted the review’s and suggestions from online visitors.'},
        {'point':'It has two type view modes that are light and dark.'}]
    },
    {
        "ProjectTitle" : "Form-Builder",
        "projectDesc" : "Inspired by google forms, Tried replicate the same features where you can create dynamic forms and share with others",
        "projectTechLogos":[{"logo":reactLogo},{"logo":nodeLogo},{"logo":MongoDB},{"logo":tailwindLogo}],
        "path":"/projects/:formBuilder",
        "projectImg": formbuilderPage,
        "type":"iframe",
        "src": "https://form-builder-sbmm.vercel.app/",
        "projectName" : 'formBuilder',
        "projectTechnologies" : 'HTML , CSS, TailWind CSS, JavaScript, ReactJs, NodeJs, Redux, MongoDB, JWT, Social Login pachage',
        "ProjectBriefDesc": [{'point':' Developed FormBuilder, a dynamic form creation tool akin to Google Forms, enabling users to easily create, share, and view forms with dynamic features for enhanced engagement and responsiveness.'}, 
        {'point':'Integrated Google social login and JSON Web Tokens for secure user authentication and authorization within FormBuilder, ensuring a seamless and protected user experience.'},
        ]
    },
    {
        "ProjectTitle" : "DevTute",
        "projectDesc" : "DevTute is a fully functional EdTech platform that enables online Learners and Tutors to create, consume, and rate educational content.",
        "projectTechLogos":[{"logo":reactLogo},{"logo":nodeLogo},{"logo":expressLogo},{"logo":tailwindLogo},{"logo":MongoDB}],
        "path":"/projects/:devTute",
        "projectImg": devTute,
        "projectName" : 'devTute',
        "type":"img",
        "projectTechnologies" : 'HTML , CSS, TailWind CSS, JavaScript, ReactJs, NodeJs, Redux, MongoDB, JSON Web Tokens',
        "ProjectBriefDesc": [{'point':'DevTute is a fully functional EdTech platform that enables users to create, consume, and rate educational content.'},
        {'point':'It’s built on the MERN tech stack which includes ReactJs, NodeJs, MongoDB and expressJs. And JavaScript to do mandatory front-end Validation.'},
        {'point':'It’s integrated with the essential functionality of User validation on Login, SignUp, Authorisation, Authentication using JSON web tokens and OTP generation.'},
        {'point':'It has been integrated with payment gateway functionality with Razorpay for buying the courses and enrolling learner’s to paid courses.'},
        {'point':'Application is using RestApi for data retrieval and manipulation with Axios. These reliable API’s are built with the Restful principle for the future aspects of maintaining and scaling.'}]
    },
    {
        "ProjectTitle" : "Music Player",
        "projectDesc" : "A fascinating music player UI which is responsive and cool. It helps you to navigate through the all the songs and artist to play the music you want. A great music search algorithm with debounce to find your favourite song. Controll the music through buttons and seeker.",
        "projectTechLogos":[{"logo":reactLogo},{"logo":tailwindLogo},],
        "path":"/projects/:musicplayer",
        "projectImg": musicplayer,
        "projectName" : 'musicplayer',
        "type":"iframe",
        "src": "https://music-player-ui-chi.vercel.app/",
        "projectTechnologies" : 'HTML , CSS, TailWind CSS, JavaScript, ReactJs, Context-API',
        "ProjectBriefDesc": [{'point':'Music player is replica of spotify'},
        {'point':'The UI is built using reactJs along with the tailwind css for stayling and responsive which gives a really cool look and gives simmer UI effect while loading.'},
        {'point':'It list all songs      and you can search any song using search bar and uses debounce algoritham for responsive searching!'},
        ]
    }
]