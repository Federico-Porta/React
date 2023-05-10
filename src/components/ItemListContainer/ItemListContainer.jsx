import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams, useSearchParams } from 'react-router-dom'

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const buscar = searchParams.get('search')

    const { categoriaID } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {console.log(data)
                if (!categoriaID) {
                    setProductos(data)
                } else {
                    setProductos( data.filter((el) => el.categoria === categoriaID) )
                    console.log(data.categoria)
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaID])

    const listado = buscar
                        ? productos.filter((el) => el.nombre.toLowerCase().includes(buscar.toLowerCase())) 
                        : productos

    console.log(listado)

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado}/>
            }
        </div>
    )
}










