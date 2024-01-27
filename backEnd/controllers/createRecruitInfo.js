
const recruitInfo = require('../models/recruiterInfo');


exports.createRecruitInfo = async(req,res) => {
    try
    {
        
        const {recCompName,recComments,} = req.body;
        const token = req.header("Authorisation");
        console.log("recruiter info ",req.body);
        const response = await recruitInfo.create({recCompName,recComments,visitorToken:token });
        console.log("recruiter info generated:",response);
        //
        res.status(200).json({
            success:true,
            data:response,
            message: 'Your Request recieved. contact you soon'
        });

    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data: 'Internal server error',
            message: err.message
        })


    }
}