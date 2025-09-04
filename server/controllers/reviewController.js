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

// const aggregateReview = async (req, res) => {
//     try {
//         const { productId } = req.params;
        
//         // Validation
//         if (!productId) {
//             return res.status(400).json({ msg: "All ID Fields Are Required" });
        
//         }
//         if (!mongoose.Types.ObjectId.isValid(productId)) {
//             return res.status(400).json({ msg: "Product_ID Invalid" });
//         }
//         // Check if product and user exist
//         const productExist = await Product.findById(productId);
//         if (!productExist) {
//             return res.status(404).json({ msg: "Product_ID: " + productId + " Is Not Found" });
//         }
        
//         // Check if ratings array exists and has values
//         if (!productExist.ratings || productExist.ratings.length === 0) {
//             return res.status(404).json({ msg: "No Reviews Exist" });
//         }
        
//         // Calculate average rating (FIXED)
//         let sum = productExist.ratings.reduce((total, value) => total + value, 0);
//         let avg = sum / productExist.ratings.length;
//                 for (const rating of productExist.ratings) {
//             // تأكد أن قيمة التقييم رقم صحيح بين 1 و 5
//             if (typeof rating.value === 'number' && 
//                 rating.value >= 1 && 
//                 rating.value <= 5) {
//                 sum += rating.value;
//                 validCount++;
//             }
//         }
        
//         // Update product with average rating
//         await Product.findByIdAndUpdate(productId,{avgRatings:avg})
//         await productExist.save();
        
//         return res.status(200).json({
//             Success: true,
//             msg: "Average Ratings Added Successfully",
//             Average_Ratings: productExist.avgRatings
//         });
        
//     } catch (error) {
//         console.error("Aggregate_Review Error", error);
//         return res.status(500).json({ msg: "Server Error", error: error.message });
//     }
// };


export const aggregateReview = async (req, res) => {
    try {
        const { productId } = req.params;
        
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: "Product Not Found"});
        }
        
        if (!product.ratings || product.ratings.length === 0) {
            return res.status(200).json({
                success: true,
                averageRatings: 0.0,
                totalRatings: 0
            });
        }
        
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
    } catch (error) {
        console.error("Aggregate_Review Error", error);
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }        

};
export default{addReview,deleteReviewFromProduct,deleteReview,aggregateReview}