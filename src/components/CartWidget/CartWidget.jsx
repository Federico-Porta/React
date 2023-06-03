import logo from '../../assets/carro.svg'
import { ImCart } from "react-icons/im";
import "./CartWidget.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexto/CartContext';



const CartWidget = () => {
    
    const {totalCantidad} = useContext(CartContext)

    return (
        <Link to="/cart" className='carrito'>
            <ImCart/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}
export default CartWidget