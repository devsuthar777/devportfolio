
const visitorToken = require('../models/visitorToken');

exports.createVisitorToken = async (req,res) => {
  try
  {
        const {token} = req.body;
        var finalToken = "";
        if(token != null && token != "")
        {
            finalToken = token.replace("TKNPORT","");
        }
        console.log("finalToken",finalToken);
        if(!finalToken){
            const newToken = await visitorToken.create({});
            console.log(newToken);
            
             res.status(200).json({
                success: true,
                visitorToken: newToken._id,
                message: "Token created successfully",
                resType: "CREATE"
            })
        }
        else
        {
            const currToken = await visitorToken.findById(finalToken);
            if(currToken)
            {
                const updatedToken = await visitorToken.findByIdAndUpdate({_id:finalToken},{"count": currToken.count+1,"lastVisitedAt": Date.now()},{new:true});
                console.log("Updated::",updatedToken);
                return res.status(200).json(
                    {
                        success:true,
                        visitorToken:updatedToken,
                        message: "Token updated successfully",
                        resType: "UPDATE"
                    }
                )
            }
        }

  }
  catch(error)
  {
    console.log(error);
       res.status(500).json(
        {
            success:false,
            message: "Something went wrong while create token",
            resType:"ERROR"
        }
       )
  }
}