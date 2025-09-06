import React from "react";
import "./ContactUs.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import { MapPin, Phone, Mail } from "lucide-react"; // icons


function ContactUs() {
  return (
    <div className="contact-us-container">

         {/* <div className='order-container'>
        <h2>Contact Us</h2> <br />
        <span className='cart-items'>Home / Contact Us</span>
        </div> */}
        <div className="line">
        <img src="../../../public/images/contact.png" alt="Contact Us" className="contact-us-image" />
      
      <form className="contact-form">
        <label htmlFor="f-name">First Name*</label>
        <input type="text" id="f-name" name="f-name" required />
        <label htmlFor="l-name">Last Name*</label>
        <input type="text" id="l-name" name="l-name" required />
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Phone*</label>
        <input type="tel" id="phone" name="phone" required />
        <label htmlFor="subject">Subject*</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Your Message*</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send a Message</button>
        </form>
        </div>
         <section className="contact-section">
      <div className="contact-info">
        <div className="info-box">
          <div className="icon">
            <MapPin size={28} />
          </div>
          <h3>Address</h3>
          <p>8502 Preston Rd. Inglewood, Maine 98380</p>
        </div>

        <div className="info-box">
          <div className="icon">
            <Phone size={28} />
          </div>
          <h3>Phone</h3>
          <p>+0123-456-789</p>
        </div>

        <div className="info-box">
          <div className="icon">
            <Mail size={28} />
          </div>
          <h3>Email</h3>
          <p>example@gmail.com</p>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093725!2d144.95373531590405!3d-37.816279742021955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE5LjQiRQ!5e0!3m2!1sen!2s!4v1611275279987!5m2!1sen!2s"
         
          loading="lazy"
        ></iframe>
      </div>
    </section>
        <Shipping />
        <Subscribe />
        
    </div>
  );
}
export default ContactUs;