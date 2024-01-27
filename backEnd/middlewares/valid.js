const mongoose = require('mongoose');
const visitorInfo = require('../models/visitorInfo');
const visitorToken = require('../models/visitorToken');
exports.isAllowedRecruiter = async (req,res,next) =>{

    try
    {
        const token = req.header("Authorisation");

        if(!token)
        {
            return res.status(401).json({
                    success:false,
                    message:'Please! refresh the page'
            })
        }
        else
        {
            const {recNameFirst,recNamelast,recEmail} = req.body;
            console.log("Data:",req.body);
            if(recNameFirst==="" || recNamelast==="" || recEmail==="") 
            {
                return res.status(401).json({
                    success:false,
                    message: 'All fields are required'
                })
            }
            const visitor = new visitorInfo({
                firstName:recNameFirst,lastName:recNamelast,email:recEmail
            });
             const visitorInfoData = await visitor.save();

            console.log("Saved visitor Info",visitorInfoData);
            console.log(token,(visitorInfoData._id).toString);

            
              
            //updating visitro info to visitor token
            const updatedToken = await visitorToken.findByIdAndUpdate({_id:token},{visitorInfo:visitorInfoData._id},{new:true}).populate("visitorInfo").exec();
            console.log("UpdatedToken after recruiterInfo",updatedToken);
  

        }
        
        next();

    }
    catch(error)
    {
        console.log("Error occured while validating ",error.message);
        return res.status(500).json({
            success:false,
            message:'Something went wrong'
        })

    }

}


exports.isAllowedContector = async (req,res,next) =>{

    try
    {
        const token = req.header("Authorisation");

        if(!token)
        {
            return res.status(401).json({
                    success:false,
                    message:'Please! refresh the page'
            })
        }
        else
        {
            const {firstName,lastName,email} = req.body;
            console.log("Data:",req.body);
            if(firstName==="" || lastName==="" || email==="") 
            {
                return res.status(401).json({
                    success:false,
                    message: 'All fields are required'
                })
            }
            const visitor = new visitorInfo({
                firstName,lastName,email
            });
             const visitorInfoData = await visitor.save();

            console.log("Saved visitor Info",visitorInfoData);
            console.log(token,(visitorInfoData._id).toString);

            
              
            //updating visitro info to visitor token
            const updatedToken = await visitorToken.findByIdAndUpdate({_id:token},{visitorInfo:visitorInfoData._id},{new:true}).populate("visitorInfo").exec();
            console.log("UpdatedToken after recruiterInfo",updatedToken);
  

        }
        
        next();

    }
    catch(error)
    {
        console.log("Error occured while validating ",error.message);
        return res.status(500).json({
            success:false,
            message:'Something went wrong'
        })

    }

}


exports.isValid = async (req,res,next) =>{

    try
    {
        const visitorValid = req.header("Authorisation");
        if(!visitorValid)
        {
            return res.status(401).json(
                {
                    success:false,
                    message:'Unauthorised'
                }
            )

        }

        next();
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }

}