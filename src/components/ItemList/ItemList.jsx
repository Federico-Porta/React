import ItemCard from "../ItemCard/ItemCard"



const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>

            <div className="row">

                {
                    items.map((productos) => <ItemCard item={productos} key={productos.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList