import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { idProduct } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const idProductNumber = Number(idProduct);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products");
                const data = await response.json();
                const unicoProducto = idProductNumber
                    ? data.find(producto => producto.id === idProductNumber)
                    : data;

                setItem(unicoProducto);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getProducts();
        return () => {
            setIsLoading(true);
        };
    }, [idProductNumber]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;