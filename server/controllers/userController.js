import User from "../models/User.js"
import mongoose from "mongoose"
const updateUser=async(req,res)=>{
    try {
        const {userId}=req.params
        const {name,phone,image}=req.body
        if(!name&&!phone&&!image) return res.status(400).json("NO Field Fill To Update!")
        if(!userId) return res.status(400).json("User_ID Is Required")
        if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json("Invalid User_ID")
            const user=await User.findById(userId)
             if(name!==undefined) user.name=name
             if(phone!==undefined)user.phone=phone
             if(image!==undefined) user.image=image
        //  const user=await User.findByIdAndUpdate(userId,{name,phone,image})   
        await user.save()
        return res.status(200).json({Success:true,msg:"User_Data Updated Successfully",User:user})

    } catch (error) {
        console.error("User_Update Failed",error);
        return res.status(500).json({Success:false,error:error.message})
        
    }
}
export default{updateUser}