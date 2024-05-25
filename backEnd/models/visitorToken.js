const mongoose = require('mongoose');

const visitorTokenSchema =  new mongoose.Schema(
    {
        
        count:
        {
            type:Number,
            default: 1
        },
        visitedAt:
        {
            requird:true,
            type:Date,
            default: Date.now()
        },
        lastVisitedAt:
        {
            required: true,
            type:Date,
            default: Date.now()
        },
        visitorInfo:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'visitorInfo',
            default: null
        },
        visitLocalDate:{
            type: String,
        }
    }
)

module.exports = mongoose.model("visitorToken",visitorTokenSchema);