import React, { useContext } from 'react'
import SkillVertiCalSlider from './skillsElements/SkillVertiCalSlider'
import {skillsDetails} from '../../data/skillSets'
import { AppContext } from '../../context/AppContext';

const SkillsSection = () => {
    const skillTableElement = ["Langauges","FrameWorks","Tools"];
    const {mode} = useContext(AppContext);
  return (
    <div id="Skills" className='w-10/12 flex flex-col items-center justify-center'>
        <h1 className={`font-mono  ${mode=='light' ? 'text-richblack-800' : 'text-white'} font-bold text-5xl`}>Skills</h1>
        <p className={`mt-4 w-[80%] md:w-[50%] text-center ${mode=='light' ? 'text-richblack-800' : 'text-white'} `}>I possess decent knowledge and experience with the following programming languages, frameworks, and tools:</p>
        <div className='flex flex-col md:flex-row w-full items-center justify-around mt-3 py-6 gap-x-7 gap-y-10'>
            {
                skillTableElement.map((tableSet) => (
                    <div className={`flex flex-col  w-4/5  sm:w-1/3 h-[400px] shadow-md shadow-black hover:shadow-2xl hover:shadow-black group hover:scale-110 transition-all duration-200 ${mode=='light' ? 'bg-richblack-600' : 'bg-[#950101]'}  text-richblack-25 rounded-xl relative overflow-hidden `}>
                          <h2 className={`text-center py-3 ${mode=='light' ? 'gradientEffect' : 'gradientEffect-dark'} text-blue-5 font-bold rounded-t-xl absolute w-full z-20`} >{tableSet}</h2>
                          <div className='overflow-hidden absolute companiesList w-full '>
                            <SkillVertiCalSlider skillElement={tableSet.toLowerCase()} skillsData={skillsDetails} />
                          </div>
                          <div className={`py-5  ${mode=='light' ? 'gradientEffectOppo' : 'gradientEffectOppo-dark'} rounded-b-xl w-full absolute bottom-0 z-20`} ></div>
                    </div>
                ))
            }
            
            
        </div>
    </div>
  )
}

export default SkillsSection