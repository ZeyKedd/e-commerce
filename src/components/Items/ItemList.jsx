import ProductCard from "./CardProduct";
import React from "react";

const ItemList = ({ productList }) => {
    return (
        <div>
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
// 
export default ItemList