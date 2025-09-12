
import "./Footer.css";
import { LuFlower } from "react-icons/lu";



function Footer() {
    
  return (

      <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon"><LuFlower /></span>
            <h2>Flower Shop.</h2>
          </div>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna namn Fatma.
          </p>
         <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="footer-section">
          <h3>Customer Services</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Our Information */}
        <div className="footer-section">
          <h3>Our Information</h3>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">User Terms & Condition</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Site Map</a></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>+0123-456-789</li>
            <li>example@gmail.com</li>
            <li>8502 Preston Rd. <br/> Inglewood, Maine 98380</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2024 <b>Flower Shop Website</b>. All Rights Reserved.</p>
        <div className="footer-lang">
          <span>English </span>
          <span>USD </span>
        </div>
      </div>
    </footer>
      );
};

    
 

export default Footer;