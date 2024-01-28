import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const NavigateButton = ({buttonText,path,btnType}) => {
  const navigate = useNavigate();
  const {mode} = useContext(AppContext);
  
  function handleClick()
  {
    if(btnType==='submit') return false;
    navigate(path);
  }

  return (
    <div className='mt-1 transition-all '>
    <button onClick={handleClick} type={btnType} className={`text-brown-900 hover:text-white   ${mode=='light border border-white' ? 'text-white' : 'text-white bg-black border border-white'}  hover:bg-blue-700 
    rounded-lg text-2xl px-10 py-2 text-center shadow-md shadow-black hover:scale-105 phover:shadow-2xl hover:shadow-black transition-all duration-200 `}>{buttonText}</button>
    </div>
  )
}

export default NavigateButton