import Item from "./Item.jsx";
import React from "react";

const ItemList = ({ productList }) => {
    return (
        <div>
            {productList.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};
// 
export default ItemList