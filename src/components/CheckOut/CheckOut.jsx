import { useContext, useState } from "react"
import { CartContext } from "../contexto/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc,writeBatch, getDoc, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
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

    const handlesumbit = async (e) => {
        e.preventDefault()


        if (!values.nombre || values.nombre.length < 3 || values.nombre.length > 12) {
            alert("El campo nombre es obligatorio y debe tener entre 3 y 12 caracteres.");
            return;
          }
        
          if (!values.direccion || values.direccion.length < 3 || values.direccion.length > 12) {
            alert("El campo dirección es obligatorio y debe tener entre 3 y 12 caracteres.");
            return;
          }
        
          if (!values.email || values.email.length < 3 ) {
            alert("El campo email es obligatorio para poder enviar los datos de facturacion");
            return;
          }
        
          if (!values.telefono || !/^\d+$/.test(values.telefono)) {
            alert("El campo teléfono es obligatorio y debe contener solo números.");
            return;
          }
        
          if (!values.pais || values.pais.length < 3 || values.pais.length > 20) {
            alert("El campo país es obligatorio y debe tener entre 3 y 20 caracteres.");
            return;
          }
        
          if (!values.ciudad || values.ciudad.length < 3 || values.ciudad.length > 20) {
            alert("El campo ciudad es obligatorio y debe tener entre 3 y 20 caracteres.");
            return;
          }
        

        const compra ={
            client:values,
            items:cart,
            total: totalCompra()

        }
       
        const batch = writeBatch(db)
        const prodref = collection (db, "Productos")
        const orderref = collection(db,"compras")
        const sinstock = []

        const q = query(prodref, where(documentId(), "in", cart.map (item => item.id)))
       
            const prod = await getDocs(q)
            prod.docs.forEach((doc) => {
                const item = cart.find((i) => i.id === doc.id)
                
                const stock = doc.data().stock
                if(stock>= item.cantidad){
                    batch.update(doc.ref, {
                        stock: stock - item.cantidad
                    })
                }else { sinstock.push(item)

                }
            })

                if (sinstock.length ===0){
                    addDoc(orderref, compra)
                    .then((doc) => {
                        batch.commit()
                        setOrderId(doc.id)
                    })
                 
                    
                }else{
                    const prodsinstock = sinstock.map((producto) => producto.nombre);
                    alert("No hay stock de los siguientes productos: " + prodsinstock.join(", "));
                    
                }



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