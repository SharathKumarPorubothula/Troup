import React, { useEffect } from 'react';
import './HeroSection.css';

const LetterRevealSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll('.line');
      if (!lines.length) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      lines.forEach((line) => {
        const lineTop = line.getBoundingClientRect().top + scrollTop;
        const lineHeight = line.offsetHeight;
        const lineCenter = lineTop + (lineHeight / 2);
        
        const triggerTop = scrollTop + (windowHeight * 0.3);
        const triggerBottom = scrollTop + (windowHeight * 0.7);
        
        if (lineCenter >= triggerTop && lineCenter <= triggerBottom) {
          line.classList.add('is-active');
        } else {
          line.classList.remove('is-active');
        }
      });
    };

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

    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
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
  );
};

export default LetterRevealSection;