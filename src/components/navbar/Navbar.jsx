

import logo from '../../assets/react.svg'
import CartWidget from '../carro/carro'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
          
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                    <img src={logo} alt='LOGO'/>

                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Featuressss</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div> 
                    <CartWidget />
                  
                </nav>
             
            </div>
        </header>
    )
}


export default Navbar