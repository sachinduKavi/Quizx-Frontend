import { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItem';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`NavbarItem ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="navbar-logo">
        QUIZ<span>X</span>
      </h1>
      <button className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.className}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
