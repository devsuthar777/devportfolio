import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import {createRecruiterInfo} from '../../services/operations/recruiter'
const HireMePage = () => {
  const {mode,token,updateToken} = useContext(AppContext);
  const [loaderFlag,setLoaderFlag] = useState(false);
  
  const [recFormData, setRecFormData] = useState({recNameFirst:'',recNamelast:'',recEmail:'',recCompName:'',recComments:''});

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  },[]);

  const  submitHandler =  async(event) => {
    event.preventDefault();

    Object.keys(recFormData).map((key) =>{

      if(recFormData[key].trim()==="") {alert("All fields are mandatory"); return false;};

    }); 

    recFormData.visitorToken= token;
    console.log("final Submission",recFormData);
    setLoaderFlag(true);
    await createRecruiterInfo(recFormData,token);
    setLoaderFlag(false);


  }

  function changeHandlerRec(event)
  {
    setRecFormData((prevData) =>
     {
      return{
        ...prevData,
        [event.target.name] : event.target.value
      }
     }
      )
  }

  return (
    
    <div className='w-full flex justify-center items-center relative min-h-screen mt-14'>
     {
      loaderFlag ? (<span className="loader absolute top-[40%]"></span>) : (
    
      <div className='w-10/12  mx-auto flex flex-col gap-3'>
      <h2 className={`mx-auto mt-8 text-4xl ${mode=='dark' ? 'text-white' : ''}`}>Thank You!</h2>
      <p className={`text-center w-10/12 mx-auto ${mode=='dark' ? 'text-richblack-50' : 'text-richblack-700'}`}>I appreciate your positive feedback on my work. If you could kindly fill out the form, I will be able to provide you with my resume and contact information promptly upon successful submission. Thank you for considering my application.
      </p>

      <form className='mb-4 mt-3' onSubmit={submitHandler}>
      
      <div className='w-full md:w-1/2 mx-auto  flex  relative flex-col  justify-center items-center gap-3  rounded-xl hover:scale-105 hover:mt-5 transition-all duration-200'>
      <div className={`absolute w-full h-full  blur-sm rounded-xl  ${mode=='dark' ? 'bg-[#3D0000]' : 'bg-[#3B6E91]'}`}></div>
      <div className={`w-full mx-auto  flex  relative flex-col justify-center items-center gap-5  rounded-xl z-[10] ${mode=='light' ? 'text-black' :'text-richblack-50'} `}>
      <div className='w-4/5 flex flex-col md:flex-row justify-between gap-1 md:gap-0 mt-8'>
          <label className='text-xl text-nowrap font-semibold '>First Name</label>
          <input name='recNameFirst' className='rounded-md w-full md:w-[66%] px-1 text-black' value={recFormData.recNameFirst} onChange={changeHandlerRec}></input>
        </div>

        <div className='w-4/5 flex flex-col md:flex-row justify-between  gap-1 md:gap-0'>
          <label className='text-xl text-nowrap font-semibold'>Last Name</label>
          <input name='recNamelast' className='rounded-md w-full md:w-[66%]  px-1 text-black' value={recFormData.recNamelast} onChange={changeHandlerRec} ></input>
        </div>

        <div className='w-4/5 flex flex-col md:flex-row justify-between gap-1 md:gap-0 '>
          <label className='text-xl text-nowrap font-semibold'>Email Address</label>
          <input name='recEmail' className='rounded-md w-full md:w-[66%] px-1 text-black'  value={recFormData.recEmail} onChange={changeHandlerRec} ></input>
        </div>

        <div className='w-4/5 flex flex-col md:flex-row justify-between gap-1 md:gap-0'>
          <label className='text-xl text-nowrap font-semibold'>Company Name</label>
          <input name='recCompName' className='rounded-md w-full md:w-[66%] px-1 text-black' value={recFormData.recCompName} onChange={changeHandlerRec}  ></input>
        </div>
        <div className='w-4/5 flex flex-col justify-between gap-2'>
          <label className='text-xl font-semibold'>Comments</label>
          <textarea name='recComments' className='rounded-md px-2 py-2 text-black' value={recFormData.recComments} onChange={changeHandlerRec}  rows="10" cols="50"></textarea>
        </div>
        <div className='flex items-center border py-2 text-2xl px-20 bg-black text-white rounded-lg outline-none cursor-pointer 
        mb-5 '><button type='submit' >Submit</button></div>
      </div>
        
      </div>
      
      </form>
      
      <p className='mx-auto  flex flex-col md:flex-row text-sm md:text-xl items-center md:gap-2 mb-11 '><span className={` ${mode=='light' ? 'text-brown-800' :'text-white'} font-extrabold`}>Note:</span><span className={`${mode=='light' ? 'text-richblack-800' :'text-richblack-50'}`}>Only valid recruiters will be replied!</span> </p>
     
      </div>
    
        
      )}      
      
    </div>
  )
}

export default HireMePage