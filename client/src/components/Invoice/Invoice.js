import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import { useParams } from "react-router-dom";
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import { CartContext } from "../../context/CartContext";
import "./Invoice.css";

function Invoice() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/order/${orderId}`,
          { withCredentials: true }
        );
        setOrder(res.data);
      } catch (err) {
        console.error("Error fetching order:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  if (loading) return <p>Loading order...</p>;
  if (!order) return <p>No order found.</p>;

  // ✅ Generate PDF dynamically with discount
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(
      `Payment Method: ${order.billingDetails?.paymentMethod || "Debit Card"}`,
      20,
      50
    );
    doc.text(`Transaction ID: ${order._id}`, 20, 60);
    doc.text(
      `Delivery Date: ${new Date(order.createdAt).toLocaleDateString()}`,
      20,
      70
    );

    let y = 90;

    // Order items
    order.items.forEach((i) => {
      const productName = i.productId?.name || "Product";
      const itemTotal = i.price * i.quantity;
      doc.text(productName, 20, y);
      doc.text(`$${itemTotal.toFixed(2)}`, 150, y);
      y += 10;
    });

    // Subtotal
    const subTotal = order.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );

    // Extras
    const shipping = cart.shipping || 0;
    const taxes = cart.tax || 0;
    const discount = cart.discount || 0; // ✅ dynamic discount

    // Final total
    const finalTotal = subTotal + shipping + taxes - discount;

    // Add to PDF
    y += 10;
    doc.text(`Shipping: $${shipping.toFixed(2)}`, 20, y);
    y += 10;
    doc.text(`Taxes: $${taxes.toFixed(2)}`, 20, y);
    if (discount > 0) {
      y += 10;
      doc.text(`Coupon Discount: -$${discount.toFixed(2)}`, 20, y);
    }
    y += 20;
    doc.setFontSize(14);
    doc.text(`Total: $${finalTotal.toFixed(2)}`, 20, y);

    doc.save("invoice.pdf");
  };

  return (
    <>
      <div className="order-completed">
        <div className="order-header">
          <div className="checkmark">✔</div>
          <h2>Your order is completed!</h2>
          <p>Thank you. Your Order has been received.</p>
        </div>

        {/* Order info section */}
        <div className="order-info-box">
          <div className="order-item">
            <span>Order ID</span>
            <p>{order._id}</p>
          </div>

          <div className="order-item">
            <span>Payment Method</span>
            <p>{order.billingDetails?.paymentMethod || "Debit Card"}</p>
          </div>

          <div className="order-item">
            <span>Transaction ID</span>
            <p>{order._id}</p>
          </div>

          <div className="order-item">
            <span>Estimated Delivery Date</span>
            <p>{new Date(order.createdAt).toLocaleDateString()}</p>
          </div>

          <button className="invoice-btn" onClick={handleDownload}>
            Download Invoice
          </button>
        </div>

        {/* Order details section */}
        <div className="order-details">
          <h3>Order Details</h3>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((i, idx) => (
                <tr key={idx}>
                  <td className="product-info">
                    {i.productId?.images[0] && (
                      <img src={i.productId.images[0]} alt="product" />
                    )}

                    <div>
                      <p className="product-name">
                        {i.productId?.name || "Product"}
                      </p>
                      <span className="product-type">Qty: {i.quantity}</span>
                    </div>
                  </td>
                  <td>${(i.price * i.quantity).toFixed(2)}</td>
                </tr>
              ))}

              <tr>
                <td>Shipping</td>
                <td>${(cart.shipping || 0).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Taxes</td>
                <td>${(cart.tax || 0).toFixed(2)}</td>
              </tr>

              {/* ✅ Dynamic discount row */}
              {cart.discount > 0 && (
                <tr>
                  <td>Coupon Discount</td>
                  <td>- ${cart.discount.toFixed(2)}</td>
                </tr>
              )}

              <tr className="total-row">
                <td>Total</td>
                <td>${(cart.totalPrice || 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Shipping />
      <Subscribe />
    </>
  );
}

export default Invoice;
