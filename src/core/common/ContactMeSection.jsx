import React, { useContext, useState } from 'react'
import NavigateButton from './NavigateButton'
import { AppContext } from '../../context/AppContext';
import {createContactorInfo} from '../../services/operations/contector'

const ContactMeSection = () => {

    const [formData,setFormData]= useState({firstName:"", lastName:"",email:"",suggestion:""});
    const [loaderFlag,setLoaderFlag] = useState(false);
    
    
    const {mode,token} = useContext(AppContext);
    console.log(formData);

    function changeHandler(event)
    {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        });
    }
    
    async function  submitHandler(event)
    {
        event.preventDefault();

        Object.keys(formData).map((key) =>{

            if(formData[key].trim()==="") {alert("All fields are mandatory"); return false;};
      
          });
      
          formData.visitorToken= token;
          console.log("final Submissizon",formData);
          setLoaderFlag(true);
          await createContactorInfo(formData,token);
          setLoaderFlag(false);

    }

  return (
    <div className={`w-full ${loaderFlag ? 'min-h-[400px] flex items-center justify-center' :''}  `}>
    {
        loaderFlag ? (<span className="loader  "></span>) : (
            <div>
            <div>
                <h2 className={`font-mono  ${mode=='light' ? 'text-richblack-800':'text-white'} font-bold text-5xl text-center`}>Contact Me</h2>
                <p className={`mt-4 w-5/6 md:w-1/2 text-center mx-auto ${mode=='light' ? 'text-richblack-800':'text-richblack-50'} `}>I hope you enjoyed reviewing my work and exploring my digital portfolio. If you have any suggestions to enhance it further, feel free to share your thoughts.</p>
            </div>
            <form onSubmit={submitHandler}>
            <div className={`w-4/5 sm:w-2/5 h-auto  ${mode=='light' ? 'bg-richblack-600' : 'bg-[#3D0000]'} mx-auto scale-90 hover:scale-100 transition-all duration-200 mb-16 mt-5 text-richblack-25
            flex flex-col gap-y-5 rounded-2xl shadow-2xl shadow-black `}>
            <div className={`w-9/12 h-[580px] ${mode=='light' ? 'bg-richblack-600 text-richblack-25' : 'bg-[#3D0000] text-richblack-100'} mx-auto mb-16  
            flex flex-col  `}>
                <div className='flex flex-col w-full mt-2'>
                    <label for="firstName" className='text-xl py-2 '>First Name</label>
                    <input  name="firstName" 
                    value={formData.firstName}
                    onChange={changeHandler}
                    className='text-black p-2 rounded-md '></input>
                </div>
                <div className='flex flex-col w-full'>
                    <label  for="lastName" className='text-xl py-2'>Last Name</label>
                    <input name="lastName" 
                    value={formData.lastName}
                     onChange={changeHandler}
                    className='text-black p-2 rounded-md'></input>
                </div>
                <div className='flex flex-col w-full'>
                    <label for="email" className='text-xl py-2'>Email Address</label>
                    <input  name="email"
                     value={formData.email}
                     onChange={changeHandler}
                     className='text-black p-2 rounded-md '></input>
                </div>
                <div className='flex flex-col h-[300px] '>
                    <label for="suggestion" className='text-xl py-2'>Comments</label>
                    <textarea  name="suggestion"  
                    onChange={changeHandler}
                    value={formData.suggestion}
                    className='text-black p-2 rounded-md' rows="10" cols="50"></textarea>
                </div>
                <div className='mx-auto mt-2'><NavigateButton buttonText={"Submit"} path={''} btnType={"submit"}/></div>
            </div>
            </div>
            </form>
            </div>
            )
    }     
    </div>
  )
}

export default ContactMeSection