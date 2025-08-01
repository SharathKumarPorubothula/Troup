// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">TroupeX</div>
//       <ul className="navbar-links">
//         <li><a href="#overview">Overview</a></li>
//         <li><a href="#how-it-works">How it works</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import './HeroSection.css';

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
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
      </nav>
    </header>
  );
};

export default Navbar;