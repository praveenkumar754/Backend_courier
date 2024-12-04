import Addform from "../model/courier_model.js";

export const addtask=async(req,res)=>{
    try{
        
        console.log(req.body,"user","add")
        const{data}=req.body
        const resdata=await new Addform({TrackingID:data}).save();

            
        console.log(resdata)
    res.send({message:"successfully saved"});

    }
    catch(err){
       console.log(err); 

    }
}