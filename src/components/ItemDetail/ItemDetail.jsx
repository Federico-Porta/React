



const ItemDetail = ({producto}) => {

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre}/>
            <p>{producto.descripcion}</p>
            <p>Categoria {producto.categoria}</p>
            <p><strong>Precio: ${producto.precio}</strong></p>

            <button className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}
export default ItemDetail