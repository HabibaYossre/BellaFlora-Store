import mongoose from "mongoose"
const reviewSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product"
    },
    userId:{
     type:mongoose.Schema.ObjectId,
     required:true,
     ref:"User"
    },
    ratings:{
        type:Number,
        required:true
    },
    comment :{
        type:String,
        required:true
    }
})
{
    timestamps:true
}
export default mongoose.model("Review",reviewSchema)

