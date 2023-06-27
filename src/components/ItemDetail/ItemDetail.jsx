import { useContext, useMemo, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import './ItemDetail.css'
import SelectTalle from "../SetTalle/SetTalle"
import { CartContext } from "../contexto/CartContext"



const ItemDetail = ({item}) => {
   
  const {AgregarAlCarrito, estaencarro } = useContext(CartContext)

           
  const [cantidad, setCantidad,] = useState(item.stock > 0 ? 1 : 0)
  const [talle, setTalle,] = useState(null)

  const AgregarAlCarro = () =>{
    const agregado= {

    ...item,cantidad,talle} 
    
   AgregarAlCarrito(agregado)
  }

 

    
    return (
        
        <div className="product-container">
        <img className="product-image" src={item.imagen} alt={item.nombre} />
        <div className="product-details">
        <h3 className="product-title">{item.nombre}</h3>
        <p className="product-description">{item.descripcion}</p>
        <p className="product-category">Categoría: {item.categoria}</p>
        <p className="product-price">${item.precio} </p> 
         
        <div> <SelectTalle setTalle={setTalle}/></div>

        <p className="product-subtotal">SubTotal: {item.precio * cantidad}</p>

            
             
        {estaencarro(item.id)
        ?<Link className="btn btn-success" to="/cart">Ir al carrito</Link>
        :<ItemCount stock={item.stock}
          setCantidad={setCantidad} 
          cantidad={cantidad}
          agregar={AgregarAlCarro} />
        }
       
    
       
      </div>
        </div>
    )
}

export default ItemDetail