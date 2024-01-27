import React, { useContext } from 'react'
import AboutSection from '../common/AboutSection'
import SkillsSection from '../common/SkillsSection'
import ProjectSection from '../common/ProjectSection'
import ContactMeSection from '../common/ContactMeSection'
import { AppContext } from '../../context/AppContext'

const HomePage = () => {
  const {mode} = useContext(AppContext);
  return (
    <div className=''>
       <section className='flex justify-center my-10 rounded-sm'>
        <AboutSection/>
      </section>

      <section className='flex justify-center my-10 rounded-sm'>
        <SkillsSection />
      </section> 
       {/* diagonal section divider */}
      <div className={`w-0 h-0 border-l-[100vw] ${mode=='light' ? 'border-b-[#E1E1E1]' : 'border-b-[#393E46]'}  border-solid border-l-transparent border-b-[13.9vw] `}></div>  

       <section className={`min-h-[500px] ${mode=='light' ? 'bg-[#E1E1E1]' : 'bg-[#393E46]'} ` }>
        <ProjectSection/>
      </section>    

    {/* diagonal section divider */}
    <div className = {`w-0 h-0 border-l-[100vw] ${mode=='light' ? 'border-t-[#E1E1E1]' : 'border-t-[#393E46]'} border-solid  border-l-transparent border-t-[13.9vw] `}></div>  

      <section className={`min-h-[500px] ${mode== 'light' ? 'bg-[#81C1E1]' : 'bg-black'}`}>
        <ContactMeSection/>
      </section>  

    </div>
  )
}

export default HomePage