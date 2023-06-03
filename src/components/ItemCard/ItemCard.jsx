import { Link } from "react-router-dom"
import './ItemCard.css'


const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2 product-card'> <Link to={`/detail/${item.id}`} className="cont" >
        <h3>{item.nombre}</h3>
        <img src={item.imagen} alt={item.nombre} />
        <p><strong>Precio: ${item.precio}</strong></p>
        {item.stock <= 10 && <p className="low-stock">¡Quedan pocas unidades!</p>}
       </Link>
      </div>
      
    )
}

export default ItemCard