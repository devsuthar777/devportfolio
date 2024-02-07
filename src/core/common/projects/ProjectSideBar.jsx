import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { projectDetails } from '../../../data/projectDetails';
import {AppContext} from '../../../context/AppContext';
const ProjectSideBar = () => {
  const currLocation = useLocation();
  const currProject = currLocation.pathname.split(':').at(-1);
  const {mode} = useContext(AppContext);
  //alert(currProject);
  
  return (
   
      <div  className='flex flex-col  h-screen w-full  transition-all duration-400 '>
        {
            projectDetails.map((indexProject,index) => (
              
              <Link  to={indexProject.path}><div className={` ${currProject==indexProject.projectName ? (mode=='dark' ? 'bg-richblack-300 font-extrabold' : 'bg-blue-5 font-extrabold') : (mode=='dark' ? 'hover:bg-richblack-100' : 'hover:bg-blue-25')} rounded-sm cursor-pointer  flex flex-row items-center py-[2px] text-md font-bold ${index==0 ? 'mt-[4px]' : ''  }
              h-full w-full text-lg  `} key={index}><span className={`w-1    rounded-t-lg rounded-b-lg ${currProject==indexProject.projectName ? (mode=='light' ? 'bg-black divCutAnimation' : 'bg-white divCutAnimation') : 'bg-transparent'} 
              mr-2 text-center `}></span><span className={`${mode== 'dark' ? 'text-white' : ''}`}>{indexProject.ProjectTitle}</span></div></Link>
            )
            
            )
      }
      </div>
   
  )
}

export default ProjectSideBar