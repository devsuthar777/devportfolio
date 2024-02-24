import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { projectDetails } from '../../../data/projectDetails';
import {AppContext} from '../../../context/AppContext';
const ProjectSideBar = () => {
  const currLocation = useLocation();
  const currProject = currLocation.pathname.split(':').at(-1);
  const {mode} = useContext(AppContext);

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  },[currProject]);
  //alert(currProject);
  
  return (
   
   
        

      <div  className='flex md:flex-col  h-full  md:h-screen w-full justify-evenly md:justify-normal border transition-all duration-400 '>
        {
            projectDetails.map((indexProject,index) => (
              
              <Link key={index} to={indexProject.path}><div className={` ${currProject==indexProject.projectName ? (mode=='dark' ? 'bg-richblack-300 font-extrabold' : 'bg-blue-5 font-extrabold') : (mode=='dark' ? 'hover:bg-richblack-100' : 'hover:bg-blue-25')} rounded-sm cursor-pointer  flex md:flex-row flex-col-reverse  items-center py-[2px] text-md font-bold ${index==0 ? ' mt-0 md:mt-[4px]' : ''  }
              h-full w-full text-lg  `} ><div className={` md:w-1  hidden md:block   rounded-t-lg rounded-b-lg ${currProject==indexProject.projectName ? (mode=='light' ? 'bg-black divCutAnimation' : 'bg-white divCutAnimation') : 'bg-transparent'} 
              md:mr-2 mr-0 text-center `}></div><span className={` px-2 md:px-0 ${mode== 'dark' ? 'text-white' : ''}`}>{indexProject.ProjectTitle}</span></div></Link>
            )
            
            )
      }
      </div>
   
  )
}

export default ProjectSideBar