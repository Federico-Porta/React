import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
 

  const AgregarAlCarrito = (item) => {
    setCart ([...cart,item])
  }

  const estaencarro = (id) =>{
    return cart.some((item) => item.id === id)
  }

  const vaciarCarrito = () =>{
    setCart([])
  }

  const totalCantidad = () =>{
    return cart.reduce((acc,item) => acc + item.cantidad,0)
  }

  const totalCompra = () =>{
    return cart.reduce((acc,item) => acc + item.precio*item.cantidad,0)
  }

const eliminaritem = (id) =>{
    setCart(cart.filter((item) => item.id !== id))
}



return (
    <CartContext.Provider value={{cart, AgregarAlCarrito, estaencarro, vaciarCarrito,totalCantidad,totalCompra,eliminaritem}}>
        {children}

    </CartContext.Provider>
)}