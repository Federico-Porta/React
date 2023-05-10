

import logo from '../../assets/react.svg'
import CartWidget from '../carro/carro'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
          
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                    <img src={logo} alt='LOGO'/>
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/Zapatillas' className="navbar__link">Zapatillas</Link>
                    <Link to='/productos/Ropa' className="navbar__link">Ropa</Link>
                    <Link to='/productos/Accesorios' className="navbar__link">Accesorios</Link>
                    <Link to='/productos/Balones' className="navbar__link">Balones</Link>
                    <Link to='/productos/Coleccionables' className="navbar__link">Coleccionables</Link>
                        </div>
                   
                    <CartWidget />
                  
                </nav>
             
            </div>
        </header>
    )
}


export default Navbar;