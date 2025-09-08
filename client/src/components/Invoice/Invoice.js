import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

function Invoice() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/order/getOrder", {
          withCredentials: true, // send cookies automatically
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDownload = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(`Payment Method: ${order.billingDetails?.paymentMethod || "N/A"}`, 20, 50);
    doc.text(`Delivery Date: ${new Date(order.createdAt).toLocaleDateString()}`, 20, 60);

    let y = 80;
    order.items.forEach((i) => {
      doc.text(i.name || "Product", 20, y);
      doc.text(`$${i.price.toFixed(2)}`, 150, y);
      y += 10;
    });

    const total = order.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    doc.text(`Total: $${total.toFixed(2)}`, 20, y + 20);
    doc.save(`invoice_${order._id}.pdf`);
  };

  if (loading) return <p>Loading orders...</p>;
  if (orders.length === 0) return <p>No orders found</p>;

  return (
    <div>
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div key={order._id} style={{ border: "1px solid #ccc", marginBottom: "20px", padding: "10px" }}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Payment Method:</strong> {order.billingDetails?.paymentMethod || "N/A"}</p>
          <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>

          <table border="1" cellPadding="5" style={{ width: "100%", marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name || "Product"}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2"><strong>Total</strong></td>
                <td>${order.items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => handleDownload(order)} style={{ marginTop: "10px" }}>
            Download PDF
          </button>
        </div>
      ))}
    </div>
  );
}

export default Invoice;
