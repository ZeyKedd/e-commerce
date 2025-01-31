// (-)4. Crear un componente contenedor ItemListContainer con una prop greeting y muestra el mensaje
// dentro del contenedor con el styling integrado

import { React, useState, useEffect } from "react"
import ItemList from "./ItemList"
import products from "./products"
import { useParams } from 'react-router-dom'

const ItemlistContainer = () => {
    const [productList, setProductList] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        const getProducts = () => new Promise((resolve, reject) => {
            const productFiltrado = products.filter((product) =>
                product.category === categoryName
            )
            setTimeout(() => {

                resolve(categoryName ? productFiltrado : products)
            }, 1000)

        })
        getProducts()
            .then(products => setProductList(products))
            .catch(error => console.log("error: ", error))

    }, [categoryName])


    return (
        <div>
            <ItemList productList={productList} />
        </div>  
    )
}

export default ItemlistContainer