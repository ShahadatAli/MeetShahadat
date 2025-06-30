import React, { useEffect, useState } from 'react';
import '../styling/Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" onClick={() => handleLinkClick("/")}>Home</Link>
        <Link to="/projects" onClick={() => handleLinkClick("/projects")}>Work</Link>
        <Link to="/contact" onClick={() => handleLinkClick("/contact")}>Contact</Link>
        <Link to="/about" onClick={() => handleLinkClick("/about")}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
