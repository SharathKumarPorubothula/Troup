import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import BalancedLayout from './components/balance';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import SplitContentLayout from './components/content'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for necessary assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div id="preloader">
          <img src="../public/troupeX-logo.jpg" alt="TroupeX Logo" className="preloader-logo"/>
        </div>
      )}

      {/* Main content */}
      <div style={{ display: loading ? 'none' : 'block' }}>
        {/* Section with background video */}
        <div className="video-section">
          {/* <video className="background-video" autoPlay muted loop playsInline>
            <source src="/background.mp4" type="video/mp4" />
          </video> */}
          {/* <Navbar /> */}
          <HeroSection />
        </div>

        {/* Section without video */}
        <div className="cta-wrapper">
        </div>
        {/* <BalancedLayout/> */}
          <SplitContentLayout/>
          <CTASection />
        <Footer/>
      </div>
    </>
  );
}

export default App;