/*import mongoose from "mongoose" 
import Wishlist from "../models/Wishlist.js"
import Product from "../models/Product.js"
import User from "../models/User.js"

const AddProduct = async (req, res) => {
    try {
      const userId = req.user._id; // ✅ from auth middleware
      const { productsId } = req.body;
  
      if (!productsId || productsId.length === 0) {
        return res.status(400).json({ Success: false, msg: "Products are required" });
      }
  
      const userExist = await User.findById(userId);
      if (!userExist) return res.status(404).json({ msg: "User Not Found" });
  
      for (const productId of productsId) {
        if (!mongoose.Types.ObjectId.isValid(productId)) {
          return res.status(400).json({ msg: `Product_ID: ${productId} Invalid` });
        }
        const productExist = await Product.findById(productId);
        if (!productExist) {
          return res.status(404).json({ msg: `Product_ID: ${productId} Not Found` });
        }
      }
  
      let wishlist = await Wishlist.findOne({ userId });
      if (!wishlist) {
        wishlist = new Wishlist({ userId, productsId });
      } else {
        for (const productId of productsId) {
          if (!wishlist.productsId.includes(productId)) {
            wishlist.productsId.push(productId);
          }
        }
      }
  
      const savedWishlist = await wishlist.save();
      return res.status(200).json({
        Success: true,
        msg: "Added Products To Wishlist Successfully!",
        Wishlist: savedWishlist,
      });
    } catch (error) {
      res.status(500).json({ Success: false, error: error.message });
    }
  };


const removeFromeWishlist = async (req, res) => {
    try {
      const userId = req.user._id; // ✅ from auth middleware
      const { productId } = req.params;
  
      if (!productId) return res.status(400).json({ msg: "Product_ID Is Required" });
  
      let wishlist = await Wishlist.findOne({ userId });
      if (!wishlist) return res.status(400).json({ msg: "Wishlist Not Found!" });
  
      if (!wishlist.productsId.includes(productId)) {
        return res.status(400).json({ msg: "Product Not Found In The Wishlist" });
      }
  
      wishlist.productsId = wishlist.productsId.filter((id) => id.toString() !== productId);
      await wishlist.save();
  
      return res.status(200).json({
        Success: true,
        msg: "Product Deleted From Wishlist Successfully!",
        New_Wishlist: wishlist,
      });
    } catch (error) {
      return res.status(500).json({ Success: false, error: error.message });
    }
  };
  
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
const clearWishlist = async (req, res) => {
    try {
      const userId = req.user._id;
      let wishlist = await Wishlist.findOne({ userId });
      if (!wishlist) return res.status(404).json({ msg: "Wishlist Not Found" });
  
      wishlist.productsId = []; // clear array
      await wishlist.save();
  
      return res.status(200).json({
        Success: true,
        msg: "Wishlist cleared successfully!",
        Wishlist: wishlist,
      });
    } catch (error) {
      return res.status(500).json({ Success: false, error: error.message });
    }
  };
*/


/*import Wishlist from "../models/Wishlist.js";

// ✅ Add product to wishlist
export const addToWishlist = async (req, res) => {
    try {
      const userId = req.user._id;
      const { productId } = req.body;
  
      console.log("📥 Add to wishlist:", { userId, productId });
  
      let wishlist = await Wishlist.findOne({ userId });
      if (!wishlist) {
        wishlist = new Wishlist({ userId, productsId: [] });
      }
  
      if (wishlist.productsId.includes(productId)) {
        return res.status(400).json({ Success: false, msg: "Product already in wishlist" });
      }
  
      wishlist.productsId.push(productId);
      await wishlist.save();
  
      await wishlist.populate("productsId", "_id name description images price");
  
      return res.status(200).json({
        Success: true,
        msg: "Product added to wishlist",
        Wishlist: wishlist,
      });
    } catch (error) {
      console.error("❌ Add to wishlist server error:", error);
      return res.status(500).json({ Success: false, error: error.message });
    }
  };
  

// ✅ Get user wishlist
export const getWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    const wishlist = await Wishlist.findOne({ userId })
      .populate("productsId", "_id name description images price");

    if (!wishlist) {
      return res.status(404).json({ Success: false, msg: "Wishlist not found" });
    }

    return res.status(200).json({
      Success: true,
      Wishlist: wishlist,
    });
  } catch (error) {
    return res.status(500).json({ Success: false, error: error.message });
  }
};

// ✅ Remove product from wishlist
export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ Success: false, msg: "Wishlist not found" });
    }

    wishlist.productsId = wishlist.productsId.filter(
      (id) => id.toString() !== productId
    );

    await wishlist.save();

    await wishlist.populate("productsId", "_id name description images price");

    return res.status(200).json({
      Success: true,
      msg: "Product removed from wishlist",
      Wishlist: wishlist,
    });
  } catch (error) {
    return res.status(500).json({ Success: false, error: error.message });
  }
};

// ✅ Clear wishlist
export const clearWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ Success: false, msg: "Wishlist not found" });
    }

    wishlist.productsId = [];
    await wishlist.save();

    return res.status(200).json({
      Success: true,
      msg: "Wishlist cleared successfully!",
      Wishlist: wishlist,
    });
  } catch (error) {
    return res.status(500).json({ Success: false, error: error.message });
  }
};

export default {addToWishlist,removeFromWishlist,clearWishlist,getWishlist}*/


import Wishlist from "../models/Wishlist.js";
import Product from "../models/Product.js";

//  Add to wishlist
export const addToWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    // Ensure product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, msg: "Product not found" });
    }

    // Find or create wishlist
    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, productsId: [] });
    }

    // Prevent duplicates
    /*if (wishlist.productsId.includes(productId)) {
      return res
        .status(400)
        .json({ success: false, msg: "Product already in wishlist" });
    }*/

    // Push only ObjectId
    wishlist.productsId.push(productId);
    await wishlist.save();

    // Populate product details for frontend
    await wishlist.populate("productsId");

    res.json({ success: true, Wishlist: wishlist });
  } catch (err) {
    console.error("❌ Add to wishlist server error:", err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

// Get wishlist
export const getWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const wishlist = await Wishlist.findOne({ userId }).populate("productsId");

    if (!wishlist) {
      return res.json({
        success: true,
        Wishlist: { userId, productsId: [] },
      });
    }

    res.json({ success: true, Wishlist: wishlist });
  } catch (err) {
    console.error("❌ Get wishlist error:", err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

// Remove item from wishlist
export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.params;

    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      return res.status(404).json({ success: false, msg: "Wishlist not found" });
    }

    wishlist.productsId = wishlist.productsId.filter(
      (id) => id.toString() !== productId
    );
    await wishlist.save();
    await wishlist.populate("productsId");

    res.json({ success: true, Wishlist: wishlist });
  } catch (err) {
    console.error("❌ Remove from wishlist error:", err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};


// Clear wishlist route
export const clearWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find wishlist for user
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ success: false, message: "Wishlist not found" });
    }

    // Clear products array instead of messing with productId
    wishlist.products = [];
    await wishlist.save();

    res.json({ success: true, message: "Wishlist cleared" });
  } catch (error) {
    console.error("❌ Error clearing wishlist:", error);
    res.status(500).json({ success: false, message: "Failed to clear wishlist" });
  }
};

export default {addToWishlist,removeFromWishlist,clearWishlist,getWishlist}