import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    // Verify product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.calculateTotal();
    await cart.save();

    // Populate product details before sending response
    const populatedCart = await Cart.findById(cart._id)
      .populate("items.productId", "name description images price");

    res.status(200).json({
      message: "Product added to cart",
      cart: {
        items: populatedCart.items.map(item => ({
          productId: item.productId._id,
          quantity: item.quantity,
          product: {
            _id: item.productId._id,
            name: item.productId.name,
            description: item.productId.description,
            images: item.productId.images,
            price: item.productId.price
          }
        })),
        subtotal: populatedCart.subtotal,
        tax: populatedCart.tax,
        shipping: populatedCart.shipping,
        totalPrice: populatedCart.totalPrice,
      },
    });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Update quantity
export const updateQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (!item) return res.status(404).json({ message: "Item not in cart" });

    item.quantity = quantity;

    await cart.calculateTotal();
    await cart.save();

    // Populate product details before sending response
    const populatedCart = await Cart.findById(cart._id)
      .populate("items.productId", "name description images price");

    res.json({
      message: "Cart updated",
      cart: {
        items: populatedCart.items.map(item => ({
          productId: item.productId._id,
          quantity: item.quantity,
          product: {
            _id: item.productId._id,
            name: item.productId.name,
            description: item.productId.description,
            images: item.productId.images,
            price: item.productId.price
          }
        })),
        subtotal: populatedCart.subtotal,
        tax: populatedCart.tax,
        shipping: populatedCart.shipping,
        totalPrice: populatedCart.totalPrice,
      },
    });
  } catch (err) {
    console.error("Update quantity error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Remove product
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.calculateTotal();
    await cart.save();

    // Populate product details before sending response
    const populatedCart = await Cart.findById(cart._id)
      .populate("items.productId", "name description images price");

    res.json({
      message: "Item removed",
      cart: {
        items: populatedCart.items.map(item => ({
          productId: item.productId._id,
          quantity: item.quantity,
          product: {
            _id: item.productId._id,
            name: item.productId.name,
            description: item.productId.description,
            images: item.productId.images,
            price: item.productId.price
          }
        })),
        subtotal: populatedCart.subtotal,
        tax: populatedCart.tax,
        shipping: populatedCart.shipping,
        totalPrice: populatedCart.totalPrice,
      },
    });
  } catch (err) {
    console.error("Remove from cart error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Clear cart
export const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = [];
    cart.subtotal = 0;
    cart.tax = 0;
    cart.shipping = 0;
    cart.totalPrice = 0;

    await cart.save();
    
    res.json({ 
      message: "Cart cleared", 
      cart: {
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        totalPrice: 0,
      }
    });
  } catch (err) {
    console.error("Clear cart error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get user cart
export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId }).populate("items.productId", "name description images price");

    if (!cart) {
      return res.json({
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        totalPrice: 0,
      });
    }

    res.json({
      items: cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
        product: {
          _id: item.productId._id,
          name: item.productId.name,
          description: item.productId.description,
          images: item.productId.images,
          price: item.productId.price
        }
      })),
      subtotal: cart.subtotal,
      tax: cart.tax,
      shipping: cart.shipping,
      totalPrice: cart.totalPrice,
    });
  } catch (err) {
    console.error("Get cart error:", err);
    res.status(500).json({ error: err.message });
  }
};
