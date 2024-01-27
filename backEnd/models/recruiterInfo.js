const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const visitorToken = require('../models/visitorToken');

const recruiterInfoSchema = new mongoose.Schema({
  
    recCompName:{
        type:String,
        required:true,
        maxLength:50
    },
    recComments:{
        type:String,
        required:true,
        maxLength:500
    },
    createdAt:
    {
        type:Date,
        required:true,
        default: Date.now()
    },
    visitorToken:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "visitorToken"
    }
});

recruiterInfoSchema.post("save", async function(doc){
try
{
    const token = doc.visitorToken;
    const visitorProfile = await visitorToken.findById(token).populate('visitorInfo');
    
    var currHtml = `<h1>Request from Recruiter for Job</h1>
    <p>Recruiter's Name : <span>${visitorProfile.visitorInfo.firstName +" " + visitorProfile.visitorInfo.lastName}</span><p>
    <p>Recruiter's company : <span>${doc.recCompName}</span></p>
    <p>Comments : <span> ${doc.recComments}</span><p>`

    const mailResponse = await mailSender('devsuthar777@gmail.com',"Recruiter's Request for Job",currHtml);

    console.log("Email send successfully", mailResponse);
}
catch(error)
{
   console.log("error occured while sending mail:",error);
   throw error;
}

})

module.exports = mongoose.model("recruiterInfo",recruiterInfoSchema);