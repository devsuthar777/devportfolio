
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
const DevOr404Page = () => {
  const {mode,token,updateToken} = useContext(AppContext);
  return (
    <div className={`mt-28  w-1/2 mx-auto ${mode=='dark' ? 'bg-richblack-400' : 'bg-[#950101] text-white'} py-4 px-6 rounded-md`}>
        <p1 className="text-3xl" >Page is under Development or 404 : Not Found</p1>
    </div>
  )
}

export default DevOr404Page