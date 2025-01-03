
import React, { useContext, useEffect, useRef, useState } from 'react'
import ProjectSideBar from '../common/projects/ProjectSideBar'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { projectDetails } from '../../data/projectDetails'

const ProjectsPage = () => {
    const currLocation = useLocation();
    const {mode} = useContext(AppContext);
    const currProjectName = currLocation.pathname.split(':').at(-1);
    const myRef = useRef(null);


    const currProject =  projectDetails.filter((project) => {
        return project.projectName === currProjectName;
    })

    const mouseEnterHanlder = () =>
        {
            console.log("onMouseEnter");
            const element = myRef.current;
            element.classList.add('hidden');  
        }

    useEffect(() => {
        const element = myRef.current;
        element.classList.remove('titleSlideEffect');
        element.classList.add('titleSlideEffect');
        console.log('class removed and added');
        setTimeout(() =>{element.classList.remove('titleSlideEffect');},1100);
        setTimeout(() =>{element.classList.remove('titleSlideEffect');},1100);
        
    },[currProject])
    
    


  return (
    <div className='mt-16  transition-all duration-200'>     
        <div className='w-full flex md:flex-row  h-full flex-col-reverse'>
            {/* side bar for big screen */}
            <div className={`md:block hidden ${mode == 'dark' ? 'md:w-[15%] w-full md:border-r border-white md:fixed' : 'md:w-[15%] w-full border-r md:fixed'}`}> <ProjectSideBar /></div>
            {/* side bar for big screen */}
            <div className=' h-full w-full md:w-[85%]  md:ml-[15%] mt-8 '>
                <div className='w-[90%] mx-auto border h-full border-blue-100 rounded-lg'>
                    <div className='w-full h-full relative flex overflow-hidden'  >
                       {
                        currProject[0].type == "img" ? 
                        (
                            <>
                            <img alt="projectImg" src={currProject[0].projectImg} lang='true' className='w-full h-full rounded-lg '></img>
                            <p ref={myRef}  className={` text-3xl md:text-7xl text-white absolute bottom-0   w-full text-center gradientEffectProject  rounded-b-lg `}>{currProject[0].ProjectTitle}</p>
                            </>
                        )
                        :
                        (
                            <>
                            <iframe  onMouseEnter={mouseEnterHanlder} className='w-full h-[80vh]' src={currProject[0].src} title="W3Schools Free Online Web Tutorials"></iframe>
                            <p ref={myRef} onClick={mouseEnterHanlder}  className={` text-3xl md:text-7xl text-white absolute bottom-0    w-full text-center gradientEffectProject  rounded-b-lg `}>{currProject[0].ProjectTitle}</p>
                            </>
                                                        
                        )
                       } </div>
                </div>

                {/* side bar for big screen */}
            <div className={`md:hidden block my-10 border  ${mode == 'dark' ? 'md:w-[15%] w-full md:border-r border-white md:fixed' : 'md:w-[15%] w-full border-r md:fixed'}`}> <ProjectSideBar /></div>
            {/* side bar for big screen */}

                <div className='w-[80%]  mx-auto mt-10 flex flex-col gap-5 mb-4'>
                <div className='flex flex-col gap-2'>
                <p className={`text-2xl font-extrabold ${mode==='dark' ? 'text-white' : ''}`}>{currProject[0].ProjectTitle}</p>
                <p className={`${mode==='dark' ? 'text-white' : ''}`}>{currProject[0].projectDesc}</p> 
                </div>
                <div className='w-full bg-richblack-500 h-1 rounded-lg'></div>

                <div className='flex flex-col gap-2'>
                <p className={`text-2xl font-extrabold ${mode==='dark' ? 'text-white' : ''}`}>Technology</p>
                <p className={`${mode==='dark' ? 'text-white' : ''}`}>{currProject[0].projectTechnologies}</p> 
                </div>
                <div className='w-full bg-richblack-500 h-1 rounded-lg'></div>

                <div className='flex flex-col gap-2'>
                <p className={`text-2xl font-extrabold ${mode==='dark' ? 'text-white' : ''}`}>Description</p>
                <ul className={`flex flex-col gap-2  ${mode==='dark' ? 'text-white' : ''}`}>
                 {
                        currProject[0].ProjectBriefDesc.map((points,index) => (
                            <li className='flex flex-row gap-1 w-full relative'><div className={` w-2 h-2  ${mode==='dark' ? 'bg-white' : 'bg-black'} top-2 rounded-full absolute`} ></div><div className='ml-5'> {points.point}</div></li>
                        ))
                 }
                </ul>
                </div>


                

                </div>
            </div>

                 
        </div>
    </div>
    
  )
}

export default ProjectsPage