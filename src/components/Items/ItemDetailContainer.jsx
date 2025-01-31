import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import products from './products'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { idProduct } = useParams()
    const idProductNumber = Number(idProduct)


    useEffect(() => {
        const getProduct = () => new Promise((resolve, reject) => {
            const unicoProducto = products.find(
                (producto) => producto.id === idProductNumber
            )
            resolve(unicoProducto)
        })
        getProduct()
            .then((arg) => setItem(arg))
            .catch(() => { })
    }, [idProductNumber])


    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer