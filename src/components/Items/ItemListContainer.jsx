// (-)4. Crear un componente contenedor ItemListContainer con una prop greeting y muestra el mensaje
// dentro del contenedor con el styling integrado
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import products from "./products"

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products); 
            }, 2000);
        });
    };

    useEffect(() => {
        getProducts()
            .then((data) => setProductList(data)) 
            .catch((error) => console.error("Error al obtener los productos:", error));
    },[]);
    return(
    <section >       
        <ItemList productList={productList} />
    </section>        
    )
}

export default ItemListContainer