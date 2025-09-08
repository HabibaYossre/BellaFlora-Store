import React from "react";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";

function Invoice() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) return <p>No order found</p>;

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
    order.items.forEach(i => {
      doc.text(i.name || "Product", 20, y);
      doc.text(`$${i.price.toFixed(2)}`, 150, y);
      y += 10;
    });

    const total = order.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    doc.text(`Total: $${total.toFixed(2)}`, 20, y + 20);
    doc.save("invoice.pdf");
  };

  return (
    <div>
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
              <td>{i.name || "Product"}</td>
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
  );
}

export default Invoice;
