import React from 'react';

const BalancedLayout = () => {
  return (
    <div style={{position:"relative", backgroundColor: "#000"}}>
      <style>{`
        .balanced-layout * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .balanced-layout {
          background-color: #000;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: white;
          padding: 60px 40px;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .balanced-layout .top-row,
        .balanced-layout .bottom-row {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .balanced-layout .top-row {
          margin-bottom: 24px;
        }

        .balanced-layout .top-row .box.small {
          width: 22%;
          min-width: 240px;
          height: 50vh;
          flex-shrink: 0;
        }

        .balanced-layout .top-row .box.large {
          flex-grow: 1;
          max-width: 52%;
          min-width: 300px;
          height: 50vh;
        }

        .balanced-layout .bottom-row .box {
          width: calc(25% - 18px);
          min-width: 240px;
          height: 40vh;
          flex-shrink: 0;
        }

        .balanced-layout .box {
          background-color: #111;
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .balanced-layout .box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #fff, #aaa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .balanced-layout .box:hover::after {
          opacity: 1;
        }

        .balanced-layout .box:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .balanced-layout .box.large {
          background: linear-gradient(135deg, #111, #1a1a1a);
          position: relative;
          overflow: hidden;
        }

        .balanced-layout .box.large::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, 
                      rgba(255, 255, 255, 0.04) 0%, 
                      transparent 70%);
          animation: rotate 20s linear infinite;
          z-index: 0;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .balanced-layout .box-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .balanced-layout h2 {
          margin-bottom: 16px;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          position: relative;
          display: inline-block;
        }

        .balanced-layout h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #fff, #aaa);
          border-radius: 3px;
        }

        .balanced-layout p {
          color: #aaa;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 auto 20px;
        }

        .balanced-layout .features-list {
          list-style: none;
          text-align: left;
          margin: 20px 0;
          padding: 0 20px;
        }

        .balanced-layout .features-list li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 12px;
          color: #ddd;
          font-size: 0.9rem;
        }

        .balanced-layout .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #fff;
          font-weight: bold;
        }

        .balanced-layout .icon-wrapper {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .balanced-layout .box-footer {
          margin-top: auto;
          padding-top: 20px;
        }

        .balanced-layout .box-footer a {
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(90deg, #fff, #aaa);
          color: #000;
          text-decoration: none;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .balanced-layout .box-footer a:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
        }

        .atom-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 0 40px rgba(59, 130, 246, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.05),
    0 0 60px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  animation: pulse 6s infinite ease-in-out;
  overflow: hidden;
  backdrop-filter: blur(4px);
}

@keyframes pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 
      0 0 40px rgba(59, 130, 246, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.05);
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.03);
    box-shadow: 
      0 0 60px rgba(59, 130, 246, 0.3),
      inset 0 0 30px rgba(255, 255, 255, 0.08);
  }
}

.atom-container::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 70%
  );
  z-index: -1;
}

.atom-container video {
  border-radius: 50%;
  width: 82%;
  height: 82%;
  object-fit: cover;
  filter: 
    brightness(1.15) 
    contrast(1.1) 
    drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
  z-index: 10;
  transition: all 0.5s ease;
}

.atom-container:hover video {
  filter: 
    brightness(1.25) 
    contrast(1.15) 
    drop-shadow(0 0 12px rgba(59, 130, 246, 0.4));
  transform: scale(1.02);
}

@media (max-width: 1024px) {
  .atom-container {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .atom-container {
    width: 160px;
    height: 160px;
    animation: pulse-mobile 6s infinite ease-in-out;
  }

  @keyframes pulse-mobile {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.02); }
  }
  
  .atom-container video {
    width: 85%;
    height: 85%;
  }
}

@media (max-width: 480px) {
  .atom-container {
    width: 140px;
    height: 140px;
  }
}

        @media (max-width: 640px) {
          .balanced-layout {
            padding: 32px 16px;
          }
          
          .balanced-layout .top-row .box.small,
          .balanced-layout .top-row .box.large,
          .balanced-layout .bottom-row .box {
            width: 100%;
            height: auto;
            min-height: 300px;
          }

          .atom-container {
            width: 140px;
            height: 140px;
            position: relative;
            margin: 24px auto;
            top: auto;
            left: auto;
            transform: none;
          }
        }

        .atom-container {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.7);
          width: 240px;
          height: 240px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 40px rgba(59, 130, 246, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.05),
            0 0 60px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10; /* Increased z-index to ensure visibility */
          animation: pulse 6s infinite ease-in-out;
          overflow: hidden;
          backdrop-filter: blur(4px);
        }
      `}</style>

      <div className="balanced-layout">
        {/* Top Row */}
        <div className="top-row">
          <div className="box small">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">📁</div>
                <h2>Create Your Portfolio</h2>
                <p>Showcase your best work in our sleek, minimalist interface designed to highlight your creativity.</p>
                <ul className="features-list">
                  <li>Drag-and-drop interface</li>
                  <li>Customizable templates</li>
                  <li>Client testimonials</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box large">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">👥</div>
                <h2>Creative Community</h2>
                <p>Join thousands of designers, developers, and artists collaborating on amazing projects.</p>
                <ul className="features-list">
                  <li>Real-time messaging</li>
                  <li>Project management tools</li>
                  <li>Secure file sharing</li>
                  <li>Skill matching</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box small">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">🚀</div>
                <h2>Share Projects</h2>
                <p>Get feedback and exposure by sharing your work with our engaged creative community.</p>
                <ul className="features-list">
                  <li>Smart tagging system</li>
                  <li>Analytics dashboard</li>
                  <li>Community voting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bottom-row">
          <div className="box">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">🌐</div>
                <h2>Grow Network</h2>
                <p>Connect with industry professionals and potential clients through our intelligent platform.</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">🧠</div>
                <h2>AI Skill Builder</h2>
                <p>Our AI analyzes your work and suggests targeted learning to keep you ahead.</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">✨</div>
                <h2>Smart Matching</h2>
                <p>Find the perfect collaborators or team members with our advanced matching system.</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <div>
                <div className="icon-wrapper">🔍</div>
                <h2>Discover Talent</h2>
                <p>Browse curated collections of exceptional creatives across all disciplines.</p>
              </div>
            </div>
          </div>
        </div>

         <div className="atom-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="atom-video"
            preload="auto"
            aria-label="Atomic structure animation"
          >
            <source 
              src="/10848-226632930_small.mp4" 
              type="video/mp4" 
            />
            {/* Fallback if video can't load */}
            <img 
              src="/atom-poster.jpg" 
              alt="Atomic structure"
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default BalancedLayout;