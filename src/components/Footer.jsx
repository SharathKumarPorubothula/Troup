import React from "react";
import { FaLinkedin } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* Main Top Footer */}
      <div className="footer-top">
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="footer-logo">TROUPEx</h2>
          <p className="footer-connect">LET'S CONNECT</p>
          <a
            href="https://www.linkedin.com/company/troupex"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-linkedin"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <p><strong>Email:</strong> support@troupex.com</p>
          <p><strong>Phone:</strong> +91 70751 90397</p>
          <p><strong>Location:</strong> Hyderabad, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Troupex Networks Private Limited, All rights reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
