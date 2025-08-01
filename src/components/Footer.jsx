// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import './footer.css'

// const Footer = () => {
//   return (
//     <footer className="footer-wrapper">
//       {/* Main Top Footer */}
//       <div className="footer-top">
//         {/* Left Side */}
//         <div className="footer-left">
//           <h2 className="footer-logo">TROUPEx</h2>
//           <p className="footer-connect">LET'S CONNECT</p>
//           <a
//             href="https://www.linkedin.com/company/troupex"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-linkedin"
//           >
//             <FaLinkedin size={24} />
//             <span>LinkedIn</span>
//           </a>
//         </div>

//         {/* Right Side */}
//         <div className="footer-right">
//           <p><strong>Email:</strong> support@troupex.com</p>
//           <p><strong>Phone:</strong> +91 70751 90397</p>
//           <p><strong>Location:</strong> Hyderabad, India</p>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>© 2025 Troupex Networks Private Limited, All rights reserved.</p>
//         <div className="footer-policies">
//           <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo">TROUPEx</h2>
            <p className="tagline">Innovating creative collaboration</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">API Docs</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="contact-info">
            <div className="contact-item">
              <FiMail />
              <span>support@troupex.com</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>+91 70751 90397</span>
            </div>
            <div className="contact-item">
              <FiMapPin />
              <span>Hyderabad, India</span>
            </div>
          </div>

          <div className="copyright">
            <p>© {new Date().getFullYear()} Troupex Networks Private Limited</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f0f0f;
          color: #fff;
          padding: 60px 0 30px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255,255,255,0.1), 
            transparent);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand {
          flex: 1;
          min-width: 250px;
        }

        .logo {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }

        .tagline {
          color: rgba(255,255,255,0.7);
          margin-bottom: 20px;
          font-size: 15px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          color: rgba(255,255,255,0.7);
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: #3b82f6;
          transform: translateY(-2px);
        }

        .footer-links {
          flex: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .link-group {
          min-width: 150px;
        }

        .link-group h3 {
          font-size: 16px;
          margin-bottom: 20px;
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .link-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-group li {
          margin-bottom: 12px;
        }

        .link-group a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .link-group a:hover {
          color: #3b82f6;
          padding-left: 5px;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
        }

        .contact-item svg {
          color: #3b82f6;
        }

        .copyright {
          color: rgba(255,255,255,0.4);
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 40px;
          }
          
          .footer-links {
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .contact-info {
            gap: 15px 25px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;