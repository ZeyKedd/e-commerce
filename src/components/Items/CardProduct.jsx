import React from "react";
import ItemCounter from "./ItemCount";
import './ProductCard.css';

const ProductCard = ({ product }) => {
    if (!product) return null; //ESta parte evita que se renderize el resto del codigo sin agarra informacion que le llega tarde
    return (
        <section className="section-cards">
            <div className="product-card">
                <h3>{product.nombre}</h3>
                <img className="imgs" src={product.img} alt="hola" />
                <p>{product.detalles}</p>
                <span>${product.precio}</span>
                <p>Stock: {product.stock}</p>
                <button>Ver Detalles</button>
                <section>
                    <ItemCounter />
                </section>
            </div>
        </section>
    );
};

export default ProductCard;
