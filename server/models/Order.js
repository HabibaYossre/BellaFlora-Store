import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: {
      type: [orderItemSchema],
      required: true,
    },

    shippingAddress: {
      fullName: { type: String, required: true },
      addressLine: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
    },

    billingDetails: {
      nameOnCard: { type: String },
      cardNumber: { type: String },
      ExpMonth: { type: String },
      ExpYear: { type: String },
      CVV: { type: String },
      paymentMethod: { type: String, enum: ["GooglePay", "PayPal", "CreditCard","Visa"] },
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered"],
      default: "processing",
    },

    trackingId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// Helper methods
orderSchema.methods.updatePaymentStatus = function (status) {
  this.paymentStatus = status;
  return this.save();
};

orderSchema.methods.updateOrderStatus = function (status) {
  this.orderStatus = status;
  return this.save();
};

orderSchema.statics.getUserOrders = function (userId) {
  return this.find({ userId }).sort({ createdAt: -1 });
};

const Order = mongoose.model("Order", orderSchema);
export default Order;
