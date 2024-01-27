import React from 'react'
import clogo from "../../assests/stack/c-logo.png"

const SkillVertiCalSlider = ({skillsData,skillElement}) => {
  console.table(skillsData);
  console.log(skillElement);
  var currentObj = skillsData[0];

  var nestedData ={};
  for(var key in currentObj)
  {
    if(key==skillElement)
    {
      nestedData = currentObj[key]
    }
  }

  if(nestedData=={}) return (<div></div>);


  console.log(nestedData);
  
  if(nestedData==undefined) return (<div></div>)
  return (
    <div className='w-full relative overflow-hidden  transition-all duration-200 '>
    <div className=' transition-all duration-200'>
    {
      nestedData.map((currData, index) => (
        <div className='flex flex-row items-center justify-around mx-auto py-5 h-auto '>
            <img src={currData.skillLogo}
            alt="logo" width={50} height={20} loading='lazy'/> <p>{currData.skillName}</p>
        </div>
      )) 
    }
    </div>   
    </div>
  )
}

export default SkillVertiCalSlider