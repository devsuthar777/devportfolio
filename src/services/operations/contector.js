import {toast} from 'react-hot-toast'
const {apiConnector} = require('../apiConnector');
const {contectorInfo} = require('../apis');

export const createContactorInfo =  async (bodyData,visitorToken) => {
    try
    {
        
        const result = await apiConnector("POST",contectorInfo.CONTECTOR_INFO,bodyData,{"Authorisation":visitorToken});
        console.log(result);
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
            toast.success(result.data.message);
        }
        else
        {
              
            toast.error(result.data.message);
        }
    }
    catch(error)
    {
        console.log(error);
        
        toast.error('Something went wrong! Please try again');
    }
}