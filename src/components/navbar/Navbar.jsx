

import logo from '../../assets/react.svg'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/Zapatillas" className="nav-link">Zapatillas</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/Ropa" className="nav-link">Ropa</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/Accesorios" className="nav-link">Accesorios</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/Balones" className="nav-link">Balones</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/Coleccionables" className="nav-link">Coleccionables</Link>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    );
  }

export default Navbar;