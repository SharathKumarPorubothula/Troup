// import React from 'react';
// import './HeroSection.css';
// import CTASection from './CTASection'

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-heading">
//         Built for the<br />Originals
//       </div>
//       <div className="hero-subtext">
//         Troupe is an end-to-end ecosystem to find work, upskill, collaborate and grow for the project-based world
//       </div>
//       {/* <CTASection /> */}
//     </div>
//   );
// };

// export default HeroSection;




// import React from 'react';
// import './HeroSection.css';
// import CTASection from './CTASection'

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-heading">
//         Built for the<br />Originals
//       </div>
//       <div className="hero-subtext">
//         Troupe is an end-to-end ecosystem to find work, upskill, collaborate and grow for the project-based world
//       </div>
//       {/* <CTASection /> */}
//     </div>
//   );
// };

// export default HeroSection;



  import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import MenuItem from './CircularMenu'

const MainContent = () => {
  const [typingDone, setTypingDone] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const typingRef = useRef(null);
  const text = "BUILT FOR ORIGINALS";
  // const [displayText, setDisplayText] = useState('');

   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    // Typing animation
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        // setDisplayText(prev => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 100); // Adjust speed here
      } else {
        setTypingDone(true);
      }
    };

    typeWriter();

    // Scroll-based text animation
    const handleScroll = () => {
      const lines = document.querySelectorAll('.line');
      if (!lines.length) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      lines.forEach((line) => {
        const lineTop = line.getBoundingClientRect().top + scrollTop;
        const lineHeight = line.offsetHeight;
        const lineCenter = lineTop + (lineHeight / 2);
        
        // Check if line should be active based on scroll position
        const triggerTop = scrollTop + (windowHeight * 0.3);
        const triggerBottom = scrollTop + (windowHeight * 0.7);
        
        if (lineCenter >= triggerTop && lineCenter <= triggerBottom) {
          line.classList.add('is-active');
        } else {
          line.classList.remove('is-active');
        }
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', throttledScroll);
    
    // Initial call to set up the initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <div id="main-content" className={isLoaded ? 'loaded' : ''}>
      {/* <MenuItem /> */}

      <div className="app-container">
        <div className="main-bar">
          <div className="troupex" onClick={toggleMenu}>
            Troupex
            <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▼</span>
          </div>
          <div className={`bottom-panel ${isOpen ? 'open' : ''} options`}>
            <p className="options-p">Overview</p>
            <p className="options-p">How it works</p>
            <p className="options-p">About</p>
          </div>
        </div>
      </div>

      <section id="hero-section">
      
        <video autoPlay loop muted playsInline className="hero-video">
          {/* <source src="../../public/bg.mp4" type="video/mp4" /> */}
          <source src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
         

        <header>
          {/* <nav className="nav-container">
            <a href="#">
              <img src="/troupeX-logo2.jpg" alt="TroupeX Logo" className="logo" />
            </a>
            <ul className="nav-links">
              <li><a href="#" className="nav-link">Overview</a></li>
              <li><a href="#" className="nav-link">How it works</a></li>
              <li><a href="#" className="nav-link">About</a></li>
              <li>
                <a href="#" className="contact-btn" style={{textDecoration: "none"}}>
                  <span className="contact-btn-text" style={{color: 'black'}}>Contact</span>
                </a>
              </li>
            </ul>
            <button className="mobile-menu-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

           
           </nav> */}


           
        </header>

{/* <MenuItem />  */}

        <main className="hero-main">
          <div className="hero-content">
            <h1 id="typing-headline" ref={typingRef} className="typing">BUILT FOR ORIGINALS</h1>
            <p className={`hero-subtitle ${typingDone ? 'animate-fadeInUp' : ''}`}>
              Troupe is an end-to-end ecosystem to find work, upskill, collaborate and grow for the project-based world.
            </p>
          </div>
        </main>
      </section>

      <section id="letter-reveal-section">
        <div className="letter-container">
          <p className="section-subtitle">Take the future into your own hands.</p>
          <div className="letter-content">
            {[
              "No more waiting.",
              "No more gatekeepers.",
              "Get access. for yourself,",
              "Be bold.",
              "Be raw.",
              "Be real.",
              "Troupe in to shape the",
              "human-led world ahead."
            ].map((line, lineIndex) => (
              <p
                key={lineIndex}
                className="line"
                data-line={lineIndex}
              >
                {line.split('').map((char, charIndex) => (
                  <span 
                    key={charIndex} 
                    className="char"
                    style={{ '--char-index': charIndex }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;