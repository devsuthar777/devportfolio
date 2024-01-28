import React, { useContext } from 'react'
import { profileDropLogo } from '../../data/profileDropDown'
import NavigateButton from './NavigateButton'
import { AppContext } from '../../context/AppContext'
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {
  const {mode} = useContext(AppContext);
  console.log(mode+ "-------------AboutSection")

  return (
    <div className={`w-10/12 min-h-[450px] h-auto  ${mode=='light' ? 'bg-[#3B6E91] text-black' : 'bg-[#3D0000] text-white'} rounded-2xl flex flex-col-reverse sm:flex-col-reverse md:flex-row  
    
    justify-between items-center py-5`}>
        <div className='flex flex-col w-[80%] md:w-[60%] items-center mx-16 gap-2 mt-5 '>
            <div className='flex flex-col gap-3 justify-center items-center md:items-start'>
            <h1 className='text-2xl text-center md:text-4xl md:text-left   ]'>Hello Everyone!</h1>
            <span className='text-5xl py-2 items-center w-[100%]  flex md:text-left flex-col md:flex-row  gap-2 h-[180px] md:h-auto '><span className='text-5xl md:text-4xl text-center '>I am</span>{"  "}
            <div className={`text-center flex items-center text-5xl md:text-4xl ${mode=='dark' ? 'text-blue-300' : 'text-richblack-50'}  `}>
            <TypeAnimation className=''
            sequence={[
            // Same substring at the start will only be typed out once, initially
            ' Devendra Suthar',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            ' a Front-end Developer',
            1000,
            ' a Back-end Developer',
            1000
            ]}
      wrapper="span"
      speed={30}
      style={{  display: 'inline-block;' }}
      repeat={Infinity}
    />
            </div>
            
            
            </span>
            <p className={`text-center md:text-left ${mode=='light' ? 'text-richblack-800' : 'text-richblack-50'} `}>Coding started as a hobby, and now I'm stepping into web development. Check out my work and share your thoughts. Let's build something awesome!</p>
            <p className='text-center md:text-left'>Seeking MERN Full-Stack Developer job. Ready to contribute and connect</p>
            <NavigateButton buttonText={"Hire Me"} path={"/hireMe"} />
            </div>
        </div>
        <div className='px-14'>
             <img alt='devDropDown'
             className='rounded-e-full rounded-s-full md:rounded-s-none   shadow-2xl shadow-black' 
             src={profileDropLogo.link} width={300} height={200} loading='lazy'/>
                         
        </div>
    </div>
  )
}

export default AboutSection