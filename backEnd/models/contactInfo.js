const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const visitorToken = require('../models/visitorToken');
const contactInfoSchema = new mongoose.Schema({

    
    suggestion:{
        required:true,
        type:String
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

    })

    contactInfoSchema.post("save", async function(doc){
        try
        {
            console.log("final Saved doc",doc);
            
            const token = doc.visitorToken;
            const visitorProfile = await visitorToken.findById(token).populate('visitorInfo');
            console.log("visitorProfile:::::::::",visitorProfile);
            var currHtml = `<h1>Contacted You From Portfolio</h1>
            <p>Recruiter's Name : <span>${visitorProfile.visitorInfo.firstName +" " + visitorProfile.visitorInfo.lastName}</span><p>
            <p>Comments : <span> ${doc.suggestion}</span><p>`
        
            const mailResponse = await mailSender('devsuthar777@gmail.com',"Contact Request from Portfolio",currHtml);
            
            console.log("Email send successfully", mailResponse);
        }
        catch(error)
        {
           console.log("error occured while sending mail:",error);
           throw error;
        }
        
        })
        

    module.exports = mongoose.model("contactInfo",contactInfoSchema);