import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products");
                const data = await response.json();
                const filteredProducts = categoryName
                    ? data.filter(item => item.category === categoryName)
                    : data;

                setProductList(filteredProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getProducts();
    }, [categoryName]);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {isLoading ? <ScaleLoader /> : <ItemList productList={productList} />}
        </div>
    );
};

export default ItemListContainer;