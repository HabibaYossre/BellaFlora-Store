import mongoose from "mongoose";
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
});

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // one cart per user
    },
    items: [cartItemSchema],
    subtotal: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    shipping: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Dynamic total calculation
cartSchema.methods.calculateTotal = async function () {
  const Product = mongoose.model("Product");
  let subtotal = 0;

  for (let item of this.items) {
    const product = await Product.findById(item.productId);
    if (product) {
      subtotal += product.price * item.quantity;
    }
  }

  // Example: tax = 10%, shipping = flat $5
  const TAX_RATE = 0.1;
  const SHIPPING_COST = subtotal > 0 ? 5 : 0;

  this.subtotal = subtotal;
  this.tax = +(subtotal * TAX_RATE).toFixed(2);
  this.shipping = SHIPPING_COST;
  this.totalPrice = this.subtotal + this.tax + this.shipping;

  return this.totalPrice;
};


const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
