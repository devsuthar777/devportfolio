
import React from 'react'
import ProjectSideBar from '../common/projects/ProjectSideBar'
import { useLocation } from 'react-router-dom'

const ProjectsPage = () => {
    const currLocation = useLocation();
    //alert(currLocation.pathname);
    

  return (
    <div className='mt-16 '>     
        <div className='w-full flex flex-row '>
            <div className='w-[15%] border  fixed'><ProjectSideBar/></div>
            <div className=' h-full  w-[85%] ml-[15%]'>
                
            </div>
        </div>
    </div>
    
  )
}

export default ProjectsPage