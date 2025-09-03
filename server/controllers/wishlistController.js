import mongoose from "mongoose" 
import Wishlist from "../models/Wishlist.js"
import Product from "../models/Product.js"
import User from "../models/User.js"
const AddProduct=async(req,res)=>{
    try{
        const {userId}=req.params
       const { productsId} =req.body
       if(!userId||productsId.length===0) return res.status(400).json({Success:false,msg:"All Fields Are Required"})
       if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({msg:"UserId Invalid"})
        const userExist=await User.findById(userId)
       if(!userExist) return res.status(404).json({msg:"User Not Found"})
        for(const productId of productsId){
           if(!mongoose.Types.ObjectId.isValid(productId)) return res.status(400).json({msg:"product_ID: "+productId+" Invalid"})
        const productExist=await Product.findById(productId)
        if(!productExist) return res.status(404).json({msg:"Product_ID: "+productId+" Not Found"})
        }
        const wishlist=await  Wishlist.findOne({userId})
        if(!wishlist){
        wishlist =  new Wishlist({userId,productsId})
    }
    else{
        for(const productId of productsId){
            if(!wishlist.productsId.includes(productId)){
                wishlist.productsId.push(productId)
            }
        }
    }
        const savedWishlist=await wishlist.save()
        return res.status(200).json({Success:true,msg:"Added Products To Wishlist Successfully!"
         , Wishlist:savedWishlist
        })
    }
    catch(error){
        res.status(500).json({Success:false,error:error.message})
    }
}

const removeFromeWishlist=async(req,res)=>{
    try{
        const{userId,productId}=req.params
        if(!productId) return res.status(400).json({msg:"Product_ID Is Required"})
            if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({msg:"UserId Invalid"})
            const productExist=await Product.findById(productId)
        if(!productExist) return res.status(400).json({msg:"Product_ID: "+productId+" Is Not Exist"})
        const userExist=await User.findById(userId)
       if(!userExist) return res.status(400).json({msg:"User Not Found"})  
        let wishlist=await Wishlist.findOne({userId}) 
       if(!wishlist) return res.status(400).json({msg:"Wishlist Not Found!"})
        if(!wishlist.productsId.includes(productId)) return res.status(400).json({msg:"Product Not Found In The Wishlist"}) 
            wishlist.productsId=wishlist.productsId.filter(id=>id.toString()!==productId)    
        await wishlist.save()
        return res.status(200).json({Success:true,msg:"Product Deleted From Wishlist Successfully!",New_Wishlist:wishlist})
    }
    catch(error){
        return res.status(500).json({Success:false,error:error.message})
    }
}
const moveProductToCart=async(req,res)=>{
    try{
        const{userId}=req.params
        const {productId}=req.body
        if(!userId||!productId) return res.status(400).json({msg:"All Fields Are Required"})
            if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({msg:"User_ID Invalid!"})
        const userExist=await User.findById(userId)
        if(!userExist) return res.status(404).json({msg:"User Not Found"})   
                 if(!mongoose.Types.ObjectId.isValid(productId)) return res.status(400).json({msg:"Product_ID Invalid!"})
        const productExist=await User.findById(productId)
        if(!userExist) return res.status(404).json({msg:"Product Not Found"})  
            return res.status(200).json("Success")

    }catch(error){
     return res.status(500).json({Success:false,error:error.message})
    }
}

export default {AddProduct,removeFromeWishlist,moveProductToCart}