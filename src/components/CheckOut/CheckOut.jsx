import { useContext, useState } from "react"
import { CartContext } from "../contexto/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import "./CheckOut.css"
import { Link } from "react-router-dom"



const CheckOut =() => {

    const {cart, totalCompra, vaciarCarrito}=useContext (CartContext)
    const [orderid, setOrderId] = useState(null)

    const[values, setValues] = useState({
        nombre:'',
        direccion:'',
        email:'',
        telefono:'',
        pais:'',
        ciudad:''
    })

 

    const handleimput = (e) =>{
        setValues({...values, 
                [e.target.name]: e.target.value})
    }

    const handlesumbit = (e) => {
        e.preventDefault()

        const compra ={
            client:values,
            items:cart,
            total: totalCompra()

        }
       
        compra.items.forEach((item) =>
        {
            const itemref = doc(db,"Productos", item.id)

            getDoc(itemref)
            .then((doc) => {

                if(doc.data().stock>= item.cantidad){
                   updateDoc(itemref,{
                    
                    stock: doc.data().stock - item.cantidad
                    })   
                }else{ alert("no hay mas stock del producto que deseas" + item.nombre+" solo quedan" +doc.data.stock())}
                 
            })           
        })

        const ordencompra = collection(db, "compras")
       
        addDoc(ordencompra, compra)
        .then((doc) =>
        setOrderId(doc.id))
        
      
    }

    if(orderid){
        return (
            <div className="factura">
                <div className="listado">
                    <h2>Su compra se registró con éxito</h2>
              
          
              <ul>
                <li>Cliente: {values.nombre}</li>
                <li>Email: {values.email}</li>
                <li>Teléfono: {values.telefono}</li>
              </ul>
          
              <h4>Detalles de la compra:</h4>
              <ul >_________ <b>Su ID de orden es: {orderid}</b> _________ <br />
            
              
                {cart.map((item) => ( 
                  <li  className="listafactura" key={item.id}>
                    <li> <b>Producto: {item.nombre}</b> </li>
                    <li>Cantidad: {item.cantidad}</li> <li>Precio unitario: {item.precio}</li> --------------------------------------------------------
                  </li>
                ))}
              </ul>
          
              <p>Total de la compra: {totalCompra()}</p>
          
              <Link className="btn btn-success" to="/" onClick={vaciarCarrito}>Volver al inicio</Link>
            </div></div>
              
          );
        
      
    }

   
    return(
        <div className="check-container">
            <h2>CheckOut</h2>
            
           
            
            <hr /><br />
            <form onSubmit={handlesumbit}>
            <input className="datos-compra my-2" onChange={handleimput} value={values.nombre} type="text"  placeholder="nombre" name="nombre"/>
            <input className="datos-compra my-2" onChange={handleimput} value={values.direccion} type="text"  placeholder="direccion" name="direccion"/>
            <input className="datos-compra my-2" onChange={handleimput} value={values.email} type="email" placeholder="email" name="email" id="email" />
            <input className="datos-compra my-2" onChange={handleimput} value={values.telefono} type="text" placeholder="telefono" name="telefono"  />
            <input className="datos-compra my-2" onChange={handleimput} value={values.pais} type="text" placeholder="pais" name="pais"  />
            <input className="datos-compra my-2" onChange={handleimput} value={values.ciudad} type="text" placeholder="ciudad" name="ciudad" />

            
        <button type="submit" className="btn btn-success">Finalizar</button>
        </form>

        </div>
        
    )




}
export default CheckOut