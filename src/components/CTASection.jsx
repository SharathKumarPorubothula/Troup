// import React from 'react';
// import './CTASection.css';
// import BalancedLayout from './balance'

// const CTASection = () => {
//   return (
//     <div className="cta-container">
//       <h1 className="cta-heading">Your next-gen creative infrastructure is here</h1>
//       <div className="main-container">
//   <button>
//     <div className="spinner-container">
//       <div className="spinner"></div>
//     </div>
//     <div className="front-layer">
//     </div>
//     <div className="text">
//       Download  now
//     </div>
//   </button>
// </div>

//       <div className="cta-waitlist">
//         <input
//           type="email"
//           placeholder="you@domain.com"
//           className="cta-input"
//         />
//         <button className="cta-join">JOIN WAITLIST</button>
//       </div>
//       {/* <BalancedLayout/> */}
//     </div>
//   );
// };

// export default CTASection;




import React from 'react';
import './CTASection.css';

const HeroSection = () => {
  return (
    <main className="hero-container" data-framer-name="Hero">
      {/* <div className="video-container">
        <video 
          src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4" 
          loop 
          preload="auto" 
          poster="https://framerusercontent.com/images/k0YzyGLlc2eBANPz0JGbtfvCdrU.png" 
          muted 
          playsInline 
          className="background-video"
          autoPlay
        ></video>
      </div> */}
      
      <div className="content-card" data-border="true" data-framer-name="Content">
        <div className="content-top">
          <div className="badge-container">
            <div className="soon-badge">
              <div className="badge-inner">
                <div className="badge-text" data-framer-component-type="RichTextContainer">
                  <p>Soon</p>
                </div>
              </div>
            </div>
            <div className="launch-text" data-framer-component-type="RichTextContainer">
              <p>
                <span className="gradient-text">Launch in feb 2025</span>
              </p>
            </div>
            <div className="badge-bg"></div>
          </div>
          
          <div className="text-content">
            <div className="heading-container" data-framer-component-type="RichTextContainer">
              <h1>Join the waitlist</h1>
            </div>
            <div className="description-container" data-framer-component-type="RichTextContainer">
              <p>
                Get exclusive early access to our software and stay updated on launch news.
              </p>
            </div>
          </div>
          
          <form className="waitlist-form">
            <label className="email-label">
              <div className="input-wrapper">
                <input 
                  type="email" 
                  required 
                  name="Email" 
                  placeholder="Your mailaddress" 
                  className="email-input" 
                />
              </div>
            </label>
            <div className="button-container">
              <button 
                type="submit" 
                className="submit-button" 
                data-border="true" 
                data-framer-name="Primary" 
                data-reset="button" 
                draggable="false" 
                tabIndex="0"
              >
                <div className="button-text" data-framer-component-type="RichTextContainer">
                  <p>Join waitlist</p>
                </div>
              </button>
            </div>
          </form>
        </div>
        
        {/* <div className="social-icons">
          <a className="twitter-icon" 
             data-framer-name="X" 
             href="https://x.com/kuipermarc" 
             target="_blank" 
             rel="noopener noreferrer">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
                <g weight="regular">
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </g>
              </svg>
            </div>
          </a>
        </div> */}
      </div>
    </main>
  );
};

export default HeroSection;