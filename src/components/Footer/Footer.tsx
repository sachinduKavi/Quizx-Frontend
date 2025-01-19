
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className=" d-flex justify-content-between align-items-center">
       
        <div className="footer-brand ">
          <h4>QUIZX</h4>
        </div>

       
        <nav>
          <ul className="list-unstyled text-center d-flex gap-4 mb-0 ">
            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
            <li><a href="#" className="text-light text-decoration-none">About</a></li>
            <li><a href="#" className="text-light text-decoration-none">Terms and Conditions</a></li>
          </ul>
        </nav>

        
        <div className="social-icons d-flex gap-3">
          <a href="#" className="text-light"><FaTwitter size={20} /></a>
          <a href="#" className="text-light"><FaFacebook size={20} /></a>
          <a href="#" className="text-light"><FaYoutube size={20} /></a>
        </div>
      </div>

     
      <div className="text-center mt-3 copyright">
        <small>© 2025 QUIZX. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
