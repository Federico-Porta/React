
import { Navbar } from "./components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./components/contexto/CartContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {

  

  return (

   <CartProvider>

     <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/productos/:categoriaID' element={ <ItemListContainer />} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/checkout' element={ <CheckOut/> }/>
          <Route path='*' element={ <Navigate to={"/"} /> }/>
        </Routes>

    </BrowserRouter>
   </CartProvider>
      
  
   
  );
}

export default App;
