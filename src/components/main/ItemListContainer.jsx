import { useEffect, useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer() {

    const[products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celular')
            .then(request => {
                return request.json()
            })
            .then(json => {
                setProducts(json.results) // depende la api el 'results' varia puede ser otra palabra o ninguna
            })        
    },[])


console.log(products)
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer