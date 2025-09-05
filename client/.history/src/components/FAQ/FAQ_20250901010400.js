import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  { question: "What types of flowers do you offer?", answer: "We offer roses, lilies, tulips, orchids, and seasonal flowers." },
  { question: "Do you offer same-day delivery?", answer: "Yes! Orders placed before 2 PM are eligible for same-day delivery." },
  { question: "Do you deliver outside your local area?", answer: "We deliver nationwide with partner couriers." },
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and cash on delivery." },
  { question: "Do you deliver to offices or event venues?", answer: "Yes, we deliver to offices, event venues, and custom addresses." }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="FAQs">
      <h2 className='faq'>FAQs</h2>
      <p className='look'>Question?<span>Look here.</span></p>
       </div>
    <div className="faq-container">
    
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Us Card */}
      {/* <div className="contact-card">
        <div className="icon"></div>
        <h2>You have different questions?</h2>
        <p>Our team will answer all your questions. We ensure a quick response.</p>
        <button>Contact Us</button>
      </div> */}
    </div>
  );
}

export default FAQ;
