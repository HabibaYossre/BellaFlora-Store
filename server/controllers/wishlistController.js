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
    console.error("Add to wishlist server error:", err);
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
    console.error("Get wishlist error:", err);
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
    console.error("Remove from wishlist error:", err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};


// Clear wishlist route
export const clearWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find and delete wishlist for user
    const deletedWishlist = await Wishlist.findOneAndDelete({ userId });

    if (!deletedWishlist) {
      return res.status(404).json({ success: false, message: "Wishlist not found" });
    }

    res.json({ success: true, message: "Wishlist cleared and removed from database" });
  } catch (error) {
    console.error("Error clearing wishlist:", error);
    res.status(500).json({ success: false, message: "Failed to clear wishlist" });
  }
};


export default {addToWishlist,removeFromWishlist,clearWishlist,getWishlist}