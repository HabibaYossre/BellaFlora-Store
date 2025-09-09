import mongoose from "mongoose"
const WishlistSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
        unique:true
    },
    productsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
     }]
       
},{
timestamps:true
})
export default mongoose.model("Wishlist",WishlistSchema)