import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/navbar';
import Lista from './components/ItemListContainer/lista';





function App() {
  const [count, setCount] = useState(0)
  return (

    
    <div>

      <Navbar/>
      <Lista/>
    </div>
  );
}

export default App
