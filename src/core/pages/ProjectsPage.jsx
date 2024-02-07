
import React, { useContext } from 'react'
import ProjectSideBar from '../common/projects/ProjectSideBar'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const ProjectsPage = () => {
    const currLocation = useLocation();
    const {mode} = useContext(AppContext);
    //alert(currLocation.pathname);
    

  return (
    <div className='mt-16 '>     
        <div className='w-full flex flex-row '>
            <div className={`${mode == 'dark' ? 'w-[15%] border-r border-white fixed' : 'w-[15%] border-r fixed'}`}><ProjectSideBar/></div>
            <div className=' h-full  w-[85%] ml-[15%]'>
                
            </div>
        </div>
    </div>
    
  )
}

export default ProjectsPage