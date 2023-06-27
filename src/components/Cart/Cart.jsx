import { useContext } from "react"
import { CartContext } from "../contexto/CartContext"
import "./Cart.css"
import { ImBin } from "react-icons/im"
import { Link } from "react-router-dom"



const Cart = () => {

    const {cart, vaciarCarrito, totalCompra, eliminaritem} = useContext(CartContext)
  

    return (
        <div className="cart-container">
        
          {
          cart.length===0
          ?<><h2>Tu carro aun esta vacio</h2><Link to="/" className="btn btn-primary">Volver al catalogo</Link></>      
          :<>   <h2>Tu Compra</h2>
          <br />
            {cart.map((item) => (
            <div className="cart-detail" key={item.id}>
              <p className="nombre-detail">{item.nombre}</p>
              <img src={item.imagen} alt={item.imagen} className="cart-image" />
              <p className="cart-desc-detail">Precio: {item.precio}</p>
              <p className="cart-desc-detail">Cantidad: {item.cantidad}</p>
              <p className="cart-desc-detail">subtotal: {item.cantidad * item.precio}</p>
              <button onClick={() => eliminaritem(item.id)}className="btn btn-danger" ><ImBin/></button>
              
            </div>
          ))}
          <div className="total">
            <h2>Total: {totalCompra()}</h2>
            <button onClick={vaciarCarrito} className="btn btn-danger">
              Vaciar
            </button>
            <Link to="/checkout" className="btn btn-success">Finalizar mi compra</Link>  
          </div></>}
        
        </div>
      );
      
      
                                        
    
}

export default Cart