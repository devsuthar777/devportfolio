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
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';
import { apiConnector } from './services/apiConnector';
import {visitors} from './services/apis'
import ProjectsPage from './core/pages/ProjectsPage';
import Footer from './core/common/Footer';
import { createVisitorToken } from './services/operations/createVisitorToken';
import toast from 'react-hot-toast';

//const visitorToken = process.env.VISITOR_VALID


function App() {
  
  const {mode,token,updateToken} = useContext(AppContext);
  const [guestName,setGuestName] = useState(""); 

  function changeNameHandler (event){
    setGuestName(event.target.value);
  }


   
  function guestActionHandler(event)
  {
    console.log(event.target.name);    
    createVisitorToken(guestName,token,updateToken);
    toast.success("Welcome to My Portfolio");

  }
   
  return (
    <div className={`w-full min-h-screen ${mode==='light' ? 'bg-[#81C1E1]' : 'bg-black'} overflow-hidden flex flex-col font-inter`}>
    
    <>

    {
        token ? (
            <>
            <Navbar  />
            <Routes>
         <Route path="/" element ={<HomePage/>} />
         <Route path="/knowMeMore" element ={<KnowMeMorePage/>} />
         <Route path="/hireMe" element ={<HireMePage/>} />
         <Route path="*" element ={<DevOr404Page/>} />
         <Route path="/projects/:projectName" element={<ProjectsPage/>}>

         </Route>
         </Routes>
         <Footer/>
            </>
        )
        :
        <>
          <div className='text-white md:w-[50%] w-[95%] mt-48 mx-auto flex flex-col gap-4 hover:scale-105 transition-all duration-200  bg-richblack-800 rounded-md py-16 px-24 mb-48 hover:shadow-xl hover:shadow-richblack-600'>
             <h1 className='md:text-2xl w-full text-sm'>Please mention your name or skip!</h1>
             <input className='py-2 px-2 rounded-md text-black font-medium' placeholder='Enter your name' onChange={changeNameHandler}></input>
             <div className='flex self-end gap-4 mt-3 ' onClick={guestActionHandler}>
             <button className='md:py-2 md:px-8 flex bg-richblack-600 rounded-md 
              transition-all duration-200
              font-edu-sa hover:shadow-lg hover:scale-105 md:text-base text-sm px-3 hover:shadow-richblack-700'
              name="DoneButton"
              >Done</button> 
              <button className='md:py-2 md:px-8  px-3 md:text-base text-sm flex bg-richblack-600 rounded-md 
              transition-all duration-200
              font-edu-sa hover:shadow-lg hover:scale-105   hover:shadow-richblack-700'
              name="SkipButton"
              >Skip</button>
             </div>
          </div>
        </>
      }

    </>

      
      
      
     
      
     
    </div>
  );
}

export default App;
