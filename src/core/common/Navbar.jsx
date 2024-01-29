import React, { useContext } from 'react'
import devLogoDark from '../assests/png/logo-no-background.png'
import devLogoLight from '../assests/png/logo-black.png'
import {NavbarLinks} from '../../data/NavBarElementsLinks'
import {profileDropLogo} from '../../data/profileDropDown'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CiLight } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import useViewMode from '../../hooks/useViewMode'
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from '../../context/AppContext'
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {

    const navigate = useNavigate();
    const {dropdown,setDrop} = useViewMode();
    const {mode,setMode} = useContext(AppContext);
    console.log("=========",mode,dropdown);
    const location = useLocation();
    const currentPath = location.pathname;
    console.log("currentPath",currentPath);
    function clickAnchorHandler(event)
    {
        if(currentPath!='/')
        {
            event.preventDefault();
            navigate('/');
            console.log(event.target.innerHTML);
            setTimeout(() => {
            const targetSection = document.getElementById(event.target.innerHTML);
            targetSection.scrollIntoView({behavior: 'smooth'});
            
            },200);
        }

    }
    

  return (
    <div className={`flex items-center h-16 fixed w-full z-40  py-8 border-b-[1px]  bg-opacity-75
    ${mode=='light' ? 'border-black bg-[#81C1E1]' : 'border-white bg-black'} `}>
        <div className='w-10/12 flex flex-row mx-auto  '>
            <nav className='flex flex-row w-full items-center justify-between '>
                <div className='w-auto h-auto px-3 hover:cursor-pointer'>
                    <NavLink to={'/'}>
                    {
                     <img src={devLogoDark} alt="Logo"  width={40} height={50} loading="lazy"/> 
                    }
                    </NavLink>
                </div>

                <div className='flex flex-col md:flex-row items-center ml-2 mt-24 md:mt-0 group '>
                <FiAlignJustify className={'text-5xl cursor-pointer block md:hidden mx-auto text-white md:text-black'}/>
                <ul className= {`flex opacity-0 md:opacity-100 group-hover:opacity-100 items-center flex-col md:flex-row  gap-x-11 z-10 gap-y-1 ${mode=='light' ? 'bg-black' : 'bg-white'} md:bg-transparent  rounded-lg md:rounded-none ${mode=='light' ? 'text-blue-600': 'text-white'} font-semibold text-1 `}>
                {
                    NavbarLinks.map(
                        (link,index) => (
                            
                                <li key={index} className={`hover:border-b-2 cursor-pointer text-sm ${mode=='light' ? 'text-white' : 'text-black'} ${mode=='light' ? 'md:text-black' : 'md:text-white'}   md:text-xl transition-all duration-100 px-2 `}>{
                                    (link.title === "Home" || link.title === "Know Me More" ) 
                                    ? <NavLink to={link.path}>{link.title}</NavLink> 
                                    : <a className='' onClick={clickAnchorHandler} href={"#"+link.title}>{link.title}</a>
                                }
                                
                                </li>


                            
                        )
                    )
                }
                </ul>
                </div>

                
                    <div className='flex gap-x-3 items-center justify-center'>
                        <img alt='devDropDown' src={profileDropLogo.link} width={40} height={30} loading='lazy'
                            className='rounded-full hidden md:block'
                        />

                    <div className='mt-[72px] relative flex flex-col items-center '>
                         <div className={`flex flex-col items-center border ${mode=='light' ? 'border-black' : 'border-white'} hover:shadow-md 
                         w-[40px]
                         cursor-pointer group rounded-md gap-0 px-1  transition-all duration-300`}>
                            
                            {
                                mode=='light' ? (<CiLight className='w-[30px] h-[30px] text-black'/>) : (<CiDark className='w-[30px] h-[30px] text-white'/>)
                            }
                            {
                                
                                !dropdown ? (<IoIosArrowDown onClick={() => setDrop(true)} className={`${mode=='light' ? 'text-black' : 'text-white'}  group-hover:scale-150  `} />) :
                                (<IoIosArrowUp onClick={() => setDrop(false)} className={`${mode=='light' ? 'text-black' : 'text-white'}  group-hover:scale-150  `}/>)
                            }
                            
                        </div>
                        <div className={`relative flex flex-col items-center top-3 ${dropdown ? 'opacity-100' : 'opacity-0'}`}>
                            <div className={`w-[25px] h-[25px] rounded-md bg-white absolute top-[-8%] rotate-45 z-[0]`}></div>
                            <ul className='flex flex-col gap-2 bg-white p-2  bg-transparent rounded-md z-[5]'>
                                <li 
                                onClick={() => {setMode("light");setDrop(false);}}
                                className={`flex items-center gap-1 ${dropdown ? 'cursor-pointer' : ''} hover:text-blue-100 hover:drop-shadow transition-all duration-100`}><CiLight className='w-[20px] h-[20px]'/>  <span className='text-sm'>Light mode</span></li>
                                <li className='w-full h-[1px] bg-black'></li>
                                <li 
                                onClick={() => {setMode("dark"); setDrop(false);}}
                                className={`flex items-center gap-1 ${dropdown ? 'cursor-pointer' : ''} hover:text-blue-100 hover:drop-shadow transition-all duration-100`}><CiDark className='w-[20px] h-[20px]'/>  <span className='text-sm'>Dark mode</span></li>
                            </ul>
                        </div>
                    </div>
                        
                    </div>
                
                
            </nav>
        </div>
    </div>
  )
}

export default Navbar