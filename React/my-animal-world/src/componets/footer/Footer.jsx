import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white py-5">
      <div className="wrapper">
        <h1>© 2024 Animal World</h1>
      </div>
      <div className="text-center mt-4">
         <Link className="text-white" to="/privacy-policy">Política de Privacidade</Link>
      </div>
    </footer>
  );
}

export default Footer;
