import { useState } from "react"
import { Link } from "react-router-dom"




    const ItemCount = ({stock, cantidad, setCantidad, agregar}) => {



const MenosCantidad = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
}

const MasCantidad = () => {
    cantidad < stock && setCantidad(cantidad + 1)
}



        return (
            <div className="item-count">
                <button onClick={MenosCantidad} className="btn btn-secondary">-</button>
                <span className="mx=2"> {cantidad}  </span>
                <button onClick={MasCantidad} className="btn btn-secondary">+</button>
                <br /><br />
                {cantidad <=0 ? (
                    <div> <p>No hay stock, imposible agregar al carro</p>
                    <Link className="btn btn-success" to="/" >Volver al inicio</Link></div>
                ) : (
                    cantidad >= 0 && <button onClick={agregar}  className="btn btn-success my-2">Agregar al carrito</button>
                )}

                
            </div>)
    }

/*




  

    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn mx-1 ${cantidad === 1 ? "boton" : ''} ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"}`}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btn mx-1 btn-danger" : "btn mx-1 btn-primary"}
                disabled={cantidad === stock}
            >
                +
            </button>
            <br/>
           
        </div>
    )*/


export default ItemCount