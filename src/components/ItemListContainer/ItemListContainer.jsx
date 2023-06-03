import { useEffect } from 'react'
import './ItemListContainer.css'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Loader from '../Loader/Loader'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
  
    const { categoriaID } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "Productos")
        const q = categoriaID
                    ? query(productosRef, where("categoria", "==", categoriaID))
                    : productosRef
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
              
                setProductos(docs)
            })
            .catch()
            .finally(() => setLoading(false))

    }, [categoriaID])

    return (
        <div className="container my-5">
            {loading 
                ? <Loader />
                : <ItemList items={productos}/>
            }
        </div>
    )
}