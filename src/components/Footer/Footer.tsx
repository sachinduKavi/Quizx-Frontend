import './Footer.css'; 
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h4>QUIZX</h4>
        </div>

        <nav>
          <ul className="footer-nav">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Terms and Conditions</a></li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="#" className="social-link"><FaTwitter size={20} /></a>
          <a href="#" className="social-link"><FaFacebook size={20} /></a>
          <a href="#" className="social-link"><FaYoutube size={20} /></a>
        </div>
      </div>

      <div className="footer-copyright">
        <small>© 2025 QUIZX. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
