import Review from "../models/Review.js"
import Product from "../models/Product.js"
import User from "../models/User.js"
import mongoose from "mongoose"
const addReview=async(req,res)=>{
    try{
        const {userId,productId}=req.params
        const {ratings,comment}=req.body
        if(!ratings||!comment)  return res.status(400).json({msg:"All Fields Are  Required"})
            if(ratings>5||ratings<1) return res.status(400).json({msg:"Rating must be between 1 & 5"})
        if(!productId||!userId) return res.status(400).json({msg:"All ID Fields Are  Required"})
            if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({msg:"User_ID Invalid"})
           if(!mongoose.Types.ObjectId.isValid(productId)) return res.status(400).json({msg:"Product_ID Invalid"})
            const productExist=await Product.findById(productId)
        if(!productExist) return res.status(404).json({msg:"Product_ID: "+productId+" Is Not Found"})
        const userExist=await User.findById(userId)
       if(!userExist) return res.status(404).json({msg:"User Not Found"}) 
        const reviewExist=await productExist.ratings.find(r=>r.userId===userId)
       if(!reviewExist){
        const review=await new Review({productId,userId,ratings,comment})
        // productExist.ratings.value=review.ratings
        productExist.ratings.push({
        value:ratings,
        comment,
        userId
        })
        await review.save()
        // productExist.ratings.comment=review.comment
        await productExist.save()
        return res.status(200).json({Success:true,msg:"Review Is Added!",data:productExist})
    }
    else{
        editReview
    }
}
    catch(error){
        return res.status(500).json({Success:false,error:error.message})
    }
}
const deleteReviewFromProduct=async(req,res)=>{
    try {
        const{userId,productId}=req.params
               if(!productId||!userId) return res.status(400).json({msg:"All ID Fields Are  Required"})
                if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({msg:"User_ID Invalid"})
               if(!mongoose.Types.ObjectId.isValid(productId)) return res.status(400).json({msg:"Product_ID Invalid"})
                const productExist=await Product.findById(productId)
            if(!productExist) return res.status(404).json({msg:"Product_ID: "+productId+" Is Not Found"})
            const userExist=await User.findById(userId)
           if(!userExist) return res.status(404).json({msg:"User Not Found"}) 
            const findUser=await productExist.ratings.find(n=>n.userId===userId)
            if(!findUser||findUser.length===0) return res.status(404).json({msg:"No Reviews To Delete"})
           productExist.ratings=await productExist.ratings.filter(n=>n.userId!==userId)
           await productExist.save()
           return res.status(200).json({Success:true,msg:"Review Deleted Successfully",Deleted_Review:findUser})
           
           
    } catch (error) {
        console.error("Delete_Review Error",error);
        return res.status(500)
        
        
    }
}
    const deleteReview=async(req,res)=>{
        try {
            const {reviewId}=req.params
            if(!reviewId) return res.status(400).json("Review_ID Required")
                if(!mongoose.Types.ObjectId.isValid(reviewId)) return res.status(400).json("Invalid Review_ID!")
                    const review=await Review.findOneAndDelete(reviewId)
                if(!review) return res.status(404).json("Review Not Found")
                    review.save()
                return res.status(200).json({Success:true,msg:"Review Deleted Successfully",Deleted_Review:review})
            
        } catch (error) {
        console.error("Delete_Review Error",error);
        return res.status(500)            
        }
    }

export const aggregateReview = async (req, res) => {
    try {
        const { productId } = req.params;
        
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: "Product Not Found"});
        }
        
        if (product.ratings || product.ratings.length !== 0) {
        let sum = 0;
        let validCount = 0;
        
        for (const rating of product.ratings) {
            if (typeof rating.value === 'number' && 
                rating.value >= 1 && 
                rating.value <= 5) {
                sum += rating.value;
                validCount++;
            }
        }
        
        const avgRating = validCount > 0 ? parseFloat((sum / validCount).toFixed(2)) : 0.0;
        
        await Product.findByIdAndUpdate(productId, {
            avgRatings: avgRating
        });
        
        return res.status(200).json({
            success: true,
            averageRatings: avgRating,
            totalRatings: validCount
        });
    }
    else{
        return res.status(404).json("Reviews Don't Exist")
    }
    } catch (error) {
        console.error("Aggregate_Review Error", error);
        return res.status(500).json({ msg: "Server Error", error: error.message });
    } }

    const editReview=async(req,res)=>{
        try {
            const{userId,productId}=req.params
            const{ratings,comment}=req.body
            if(!productId) return res.status(400).json("Product_ID Required")
                if(!mongoose.Types.ObjectId.isValid(productId)) return res.status(400).json("Invalid Product_ID!")
                    const product=await Product.findById(productId)
                if(!product) return res.status(404).json("Product Not Found")     
            if(!userId) return res.status(400).json("User_ID Required")
                if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json("Invalid User_ID!")
                    const user=await User.findById(userId)
                if(!user) return res.status(404).json("User Not Found")    
                    const reviewIndex= product.ratings.findIndex(r=>r.userId===userId)
                if(reviewIndex==-1) return res.status(404).json("No Review To Edit")
                    if(ratings!==undefined)product.ratings[reviewIndex].value=ratings
                    if(comment!==undefined)product.ratings[reviewIndex].comment=comment
                    await product.save()
                return res.status(200).json({Success:true,msg:"Review Edited Successfully!",Edited_Review:product.ratings[reviewIndex]})
                
        } catch (error) {
            console.error("Server Error",error);
            return res.status(500)
            
        }
    }       


export default{addReview,deleteReviewFromProduct,deleteReview,aggregateReview,editReview}