const contactInfo = require('../models/contactInfo');

exports.createContectorInfo = async(req,res) =>{

    try
    {
        const {firstName,lastName,email,suggestion} = req.body;
        const token = req.header("Authorisation");
 
       if(suggestion === "") return res.status(401).json({
            success:false,
            message: 'All fields are Mandatory'
        })

        const currData = new contactInfo({suggestion,visitorToken:`${token}`});

        const newData = await currData.save();

        if(newData){
            return res.status(200).json({
                success:true,
                message:"Thank you! will contact you soon"
            })
        }
        else
        {
            return res.status(402).json({
                success:false,
                message:"Please try again!"
            }) 
        }

    }
    catch(error)
    {
        console.log("Error 500 : while creating cotactInfo",error);
        return res.status(500).json({
            success: false,
            message:'Internal Server Error'
        })
    }

}