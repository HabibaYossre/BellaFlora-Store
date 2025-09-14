import mongoose from "mongoose";
import Order from "../models/Order.js";

// Create new order
export const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress} = req.body;
    console.log("items",items)
    console.log("shippingAddress",shippingAddress)
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Order must contain at least one item" });
    }

    const newOrder = new Order({
      userId: req.user.id, // req.user comes from auth middleware
      items,
      shippingAddress,

    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
};

// Get single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, userId: req.user.id })
      .populate("items.productId", "name price images");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });
  }
};


// Get user order history
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.getUserOrders(req.user.id);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};
export const paymentMethod = async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) return res.status(400).json("Order_ID Is Required!");
    if (!mongoose.Types.ObjectId.isValid(orderId)) return res.status(400).json("Invalid Order_ID!");

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json("Order Not Found!");

    const { paymentMethod, nameOnCard, cardNumber, ExpMonth, ExpYear, CVV } = req.body;

    let result;

    switch (paymentMethod) {
      case "Visa":
      case "CreditCard":
        if (!nameOnCard || !cardNumber || !ExpMonth || !ExpYear || !CVV)
          return res.status(400).json("Missing Credit Card Details");

        order.billingDetails = {
          paymentMethod,
          nameOnCard,
          cardNumber,
          ExpMonth,
          ExpYear,
          CVV
        };

        result = await processVisa(nameOnCard, cardNumber, ExpMonth, ExpYear, CVV);
        break;

      case "GooglePay":
        if (!nameOnCard || !cardNumber)
          return res.status(400).json("Missing Google Pay Details");

        order.billingDetails = {
          paymentMethod,
          nameOnCard,
          cardNumber
        };
        result = await processGooglePay(nameOnCard, cardNumber);
        break;
      case "PayPal":
        if (!nameOnCard || !cardNumber)
          return res.status(400).json("Missing PayPal Details");
        order.billingDetails = {
          paymentMethod,
          nameOnCard,
          cardNumber
        };
        result = await processPaypal(nameOnCard, cardNumber);
        break;
      default:
        return res.status(400).json({ Success: false, msg: "Invalid Payment Method!" });
    }
    await order.save();
    return res.status(200).json({ Success: true, Result: result });

  } catch (error) {
    return res.status(500).json({ Success: false, error: error.message });
  }
};



 export const processGooglePay = async (nameOnCard, cardNumber) => {

  const transactionId = `mock-googlepay-${Date.now()}`;

  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    method: "GooglePay",
    status: "success",
    transactionId,
    name: nameOnCard,
    last4: cardNumber?.slice(-4),
    message: "✅ Payment Process Done!"
  };
};

export const processPaypal = async (nameOnCard, cardNumber) => {

 const transactionId = `mock-paypal-${Date.now()}`;

  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    method: "PayPal",
    status: "success",
    transactionId,
    name: nameOnCard,
    last4: cardNumber?.slice(-4),
    message: "✅ Payment Process Done!"
  };
};

export const processVisa = async (nameOnCard, cardNumber,ExpMonth,ExpYear,CVV) => {

const transactionId = `mock-visa-${Date.now()}`;

  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    method: "Visa",
    status: "success",
    transactionId,
    name: nameOnCard,
    last4: cardNumber?.slice(-4),
    message: "✅ Payment Process Done!"
  };
};




