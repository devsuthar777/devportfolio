import logo from './logo.svg';
import './App.css';
import Navbar from './core/common/Navbar';
import AboutSection from './core/common/AboutSection';
import SkillsSection from './core/common/SkillsSection';
import ProjectSection from './core/common/ProjectSection';
import ContactMeSection from './core/common/ContactMeSection';
import HomePage from './core/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import KnowMeMorePage from './core/pages/KnowMeMorePage';
import HireMePage from './core/pages/HireMePage';
import DevOr404Page from './core/pages/DevOr404Page';
import useViewMode from './hooks/useViewMode';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { apiConnector } from './services/apiConnector';
import {visitors} from './services/apis'
import ProjectsPage from './core/pages/ProjectsPage';

//const visitorToken = process.env.VISITOR_VALID


function App() {
  
  const {mode,token,updateToken} = useContext(AppContext);
  const createToken = async () => {
    try
    {
       if(!token) {
        console.log(visitors.VISITOR_API,visitors.visitorToken);

        const result = await apiConnector("POST",visitors.VISITOR_API,{guesttLocalDate:calculateDate()});
        console.log("Printing token result",result);
        if(result.data.success) updateToken(result.data.visitorToken);
        else alert(result.data.message);
        
       }
       else
       {
        console.log(visitors.VISITOR_API,visitors.visitorToken);

        const result = await apiConnector("POST",visitors.VISITOR_API,{token:`${token}`});
        console.log("Printing token result",result);

       }
        
    }
    catch(error)
    {
          console.log("Not able to create token",error);
    }
  } 

  useEffect(() => {
    
    createToken();

  },[]);

 const calculateDate = () => {
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    let day = currentDate.getDate().toString().padStart(2, '0');

    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');

    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDate);
    return formattedDate;
  }
   
   
  return (
    <div className={`w-full min-h-screen ${mode==='light' ? 'bg-[#81C1E1]' : 'bg-black'}   overflow-hidden flex flex-col font-inter`}>
      <Navbar  />
      <Routes>
         <Route path="/" element ={<HomePage/>} />
         <Route path="/knowMeMore" element ={<KnowMeMorePage/>} />
         <Route path="/hireMe" element ={<HireMePage/>} />
         <Route path="*" element ={<DevOr404Page/>} />
         <Route path="/projects/:projectName" element={<ProjectsPage/>}>

         </Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
