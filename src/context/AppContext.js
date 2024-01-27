import { createContext, useState } from "react"



export const AppContext = createContext();

export default function AppContextProvider({children})
{
    const [mode,setMode] = useState('dark');
    const [token,setToken] = useState(localStorage.getItem("visitorToken") || '');

    const updateToken = (currToken) => {
      if(token=='')
      {
        setToken(currToken);
        localStorage.setItem("visitorToken",currToken);
      }
    }

    const values = {
      mode,
      setMode,
      token,
      updateToken
    }


    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}
