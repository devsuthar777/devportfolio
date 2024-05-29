import {toast} from 'react-hot-toast'
import {visitors} from "../../services/apis"
const {apiConnector} = require('../apiConnector');
const {recruiterInfo} = require('../apis');


export const createVisitorToken = async (guestVisitName,token,updateToken) => {

    

    try
    {
       if(!token) {
        console.log(visitors.VISITOR_API);

        const result = await apiConnector("POST",visitors.VISITOR_API,{guestLocalDate:calculateDate(),"guestVisitName":guestVisitName});
        console.log("Printing token result",result);
        if(result.data.success) updateToken(result.data.visitorToken);
        //else alert(result.data.message);
        
       }
       else
       {
        console.log(visitors.VISITOR_API,visitors.visitorToken);

        const result = await apiConnector("POST",visitors.VISITOR_API,{token:`${token}`});
        console.log("Printing token result",result);

       }
        
    }
    catch(error)
    {
          console.log("Not able to create token",error);
    }
}

const calculateDate = () => {
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    let day = currentDate.getDate().toString().padStart(2, '0');

    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');

    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDate);
    return formattedDate;
  }