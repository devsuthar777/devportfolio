import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { projectDetails } from '../../../data/projectDetails';
const ProjectSideBar = () => {
  const currLocation = useLocation();
  const currProject = currLocation.pathname.split(':').at(-1);
  //alert(currProject);
  
  return (
   
      <div  className='flex flex-col  h-screen w-full  transition-all duration-400 '>
        {
            projectDetails.map((indexProject,index) => (
              
              <Link  to={indexProject.path}><div className={` ${currProject==indexProject.projectName ? 'bg-blue-5 font-extrabold' : 'hover:bg-blue-25'} rounded-sm cursor-pointer  flex flex-row items-center py-[2px] text-md font-bold ${index==0 ? 'mt-[4px]' : ''  }
              h-full w-full text-lg  `} key={index}><span className={`w-1    rounded-t-lg rounded-b-lg ${currProject==indexProject.projectName ? 'bg-black divCutAnimation' : 'bg-transparent'} 
              mr-2 text-center `}></span><span>{indexProject.ProjectTitle}</span></div></Link>
            )
            
            )
      }
      </div>
   
  )
}

export default ProjectSideBar