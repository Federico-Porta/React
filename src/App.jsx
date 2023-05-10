import { useState } from 'react';
import { Navbar } from "./components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/productos/:categoriaID' element={ <ItemListContainer />} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path='*' element={ <Navigate to={"/"} /> }/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
