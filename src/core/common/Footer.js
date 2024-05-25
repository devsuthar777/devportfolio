import React, { useContext } from 'react'
import devLogoDark from '../assests/png/logo-no-background.png'
import linkdinlogo from '../assests/png/Linkdin.png'
import gitHub from '../assests/png/GitHub.png'
import InstagramLogo from '../assests/png/Instagram.png'
import { AppContext } from '../../context/AppContext'
const Footer = () => {
    const {mode} = useContext(AppContext);
  return (
    <div className={`w-full h-44 ${mode=='light' ? 'bg-[#E1E1E1]' : 'bg-[#393E46]'} z-50 `}>
        <div className='w-11/12  h-full mx-auto flex justify-center gap-3 '>
        <div className='w-1/2 h-full  flex-col justify-center items-center gap-2 md:flex hidden'>
            <img src={devLogoDark} className="bg-black rounded-full" alt="Logo"  width={80} height={100} loading="lazy"/> 
            <h1 className={`font-medium ${mode=='light' ? 'text-black' : 'text-white'}`} >DevAndProjects</h1>  
        </div>
        <div className='w-1 h-4/5 my-auto bg-richblack-50 md:flex hidden'></div>
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            
        <div className='gap-3 flex flex-col '>
            <p className='gap-5 flex'><span className={`font-medium ${mode=='light' ? 'text-black' : 'text-white'}` }>Email</span> <span className={`text-richblue-300 font-medium ${mode=='light' ? 'text-richblue-300' : 'text-blue-50'}`}><a href='mailto:devsuthar777@gmail.com'> <span className='underline'>devsuthar777@gmail.com</span></a></span> </p>
            <p className='gap-5 flex'><span className={`font-medium ${mode=='light' ? 'text-black' : 'text-white'}`}>Phone</span> <span className={`text-richblue-300 font-medium ${mode=='light' ? 'text-richblue-300' : 'text-blue-50'}`}>(+91) 954918699</span></p>
        </div>
        <div>
            <ul className='flex mt-6 gap-10 transition-all duration-200'>
                <li className='hover:shadow-lg hover:scale-105'><a href='https://www.linkedin.com/in/linkdev/'><img src={linkdinlogo} alt="Logo"  width={50} height={80} loading="lazy"></img></a></li>
                <li className='hover:shadow-lg hover:scale-105'><a href='https://github.com/devsuthar777/'><img src={gitHub} alt="Logo"  width={50} height={100} loading="lazy"></img></a></li>
                <li className='hover:shadow-lg hover:scale-105'><a href='https://www.instagram.com/mechatronics_devj/'><img src={InstagramLogo} alt="Logo"  width={50} height={100} loading="lazy"></img></a></li>
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer