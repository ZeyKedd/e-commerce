// (-)4. Crear un componente contenedor ItemListContainer con una prop greeting y muestra el mensaje
// dentro del contenedor con el styling integrado

import { React, useState, useEffect } from "react"
import ItemList from "./ItemList"
import products from "./products"
import { PacmanLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'

const ItemlistContainer = () => {
    const [productList, setProductList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { categoryName } = useParams()

    useEffect(() => {
        const getProducts = () => new Promise((resolve, reject) => {
            const productFiltrado = products.filter((item) =>
                item.category === categoryName
            )
            setTimeout(() => {
                resolve(categoryName ? productFiltrado : products)
            }, 1000)

        })
        getProducts()
            .then(arg => {setProductList(arg); setIsLoading(false)})
            .catch(error => console.log("error: ", error),)
        return () => { setIsLoading(true) }

    }, [categoryName])


    return (
        <div style={{display:"flex", justifyContent:"center"}} >
            {
                isLoading ? (
                        <PacmanLoader />
                ) : (
                    <div>
                        <ItemList productList={productList} />
                    </div>
                )
            }
        </div>
    )
}

export default ItemlistContainer