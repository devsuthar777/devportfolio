import React, { useEffect, useState } from 'react'

const useViewMode = (recentMode,currValue) => {
 
    const [mode,setMode] = useState('light');
    
   const [dropdown,setDropDown] = useState(false);

   

    function setView(recentMode)
    {
        setMode(recentMode);
    }

    function setDrop(currValue)
    {
       setDropDown(currValue);
    }

   return {mode,setView,dropdown,setDrop};

   
    
    
    

}

export default useViewMode  