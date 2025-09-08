import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Invoice() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get("http://localhost:3000/order/myOrder", {
          withCredentials: true, // important for cookies
        });
        if (res.data && res.data.length > 0) {
          setOrder(res.data[0]); // latest order
        }
      } catch (err) {
        console.error("Error fetching order:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, []);

  if (loading) return <p>Loading order...</p>;
  if (!order) return <p>No order found.</p>;

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(`Payment Method: ${order.billingDetails?.paymentMethod || "N/A"}`, 20, 50);
    doc.text(`Transaction ID: ${order._id}`, 20, 60);
    doc.text(`Delivery Date: ${new Date(order.createdAt).toLocaleDateString()}`, 20, 70);

    let y = 90;
    order.items.forEach((i) => {
      const productName = i.productId?.name || "Product";
      doc.text(productName, 20, y);
      doc.text(`$${i.price.toFixed(2)}`, 150, y);
      y += 10;
    });

    const total = order.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    doc.text(`Total: $${total.toFixed(2)}`, 20, y + 20);
    doc.save("invoice.pdf");
  };

  return (
    <>
   
      <div className="invoice-container">
        <h2>Invoice</h2>
        <p>Order ID: {order._id}</p>
        <p>Payment Method: {order.billingDetails?.paymentMethod || "N/A"}</p>
        <p>Delivery Date: {new Date(order.createdAt).toLocaleDateString()}</p>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((i, idx) => (
              <tr key={idx}>
                <td>{i.productId?.name || "Product"}</td>
                <td>{i.quantity}</td>
                <td>${i.price.toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">Total</td>
              <td>${order.items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={handleDownload}>Download PDF</button>
      </div>
      <Shipping />
      <Subscribe />
     
    </>
  );
}

export default Invoice;
