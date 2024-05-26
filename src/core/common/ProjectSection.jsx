import React, { useContext } from 'react'
import {projectDetails} from '../../data/projectDetails'
import portfolioLogo from '../assests/project/portfolioLogo.png'
import NavigateButton from '../common/NavigateButton'
import { AppContext } from '../../context/AppContext'

const ProjectSection = () => {

 console.log(projectDetails);
 const {mode} = useContext(AppContext);
  projectDetails.map((currProject) => (console.table(currProject)));
  return (
    <div id='Projects' className=''>
        <div>
        <h1 className={`font-mono pt-5 md:pt-1 ${mode=='light' ? 'text-richblack-800' : 'text-white'} font-bold text-5xl text-center`}>Projects</h1>
        <p className={`mt-4 w-5/6 md:w-1/2  text-center mx-auto ${mode=='light' ? 'text-richblack-800' : 'text-richblack-50'}`}>Acquired one and a half years of experience building and learning new web skills, applying them to create various projects. Feel free to explore and share your thoughts</p>
        </div>
        <div className='w-full md:w-10/12 mx-auto flex flex-col relative gap-y-14 mt-10 py-6 '>
          {
            projectDetails.map((currProject,index) => (
                <div className={`w-9/12 h-[400px]  hover:scale-110 transition-all duration-200 group hover:bg-black hover:z-30 relative  shadow-xl  rounded-2xl  self-center ${index%2 ? 'md:self-end':'md:self-start'} shadow-black `}>
                    <div className='w-full flex rounded-2xl  '>
                        <div className='w-full h-full absolute   opacity-100  group-hover:opacity-30'>
                        <img
                        className='h-full w-full rounded-2xl' 
                        src={currProject.projectImg}></img></div>
                    
                           <div className={`w-4/5 md:w-3/5  flex-col h-4/5 mt-10 ml-10 sm:ml-32 mx-auto absolute hover:scale-110 
                           group group-hover:flex hidden 
                           transition-all duration-200 justify-center  gap-y-5  z-[10]`}>
                            <h2 className={`text-3xl font-extrabold group-hover:drop-shadow-sm text-white`}>{currProject.ProjectTitle}</h2>
                            <p className='font-semibold text-white'>{currProject.projectDesc}</p>
                        
                             <ul className='flex gap-x-2 md:gap-x-5'>
                                {
                                currProject.projectTechLogos.map((currLogo) => (
                                    <li className='rounded-full bg-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center'><img alt={"techLogo"} loading='lazy' width={30} height={30} 
                                        src={currLogo.logo}
                                    /></li>
                                ))   
                                }   
                                </ul>
                            <NavigateButton buttonText={"View"}  path={currProject.path} btnType={'button'} />
                        </div>
                    </div>
                    
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default ProjectSection