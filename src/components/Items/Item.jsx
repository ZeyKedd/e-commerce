import React from "react";
// import ItemCounter from "./ItemCount";
import './Item.Module.css';
import {Link} from 'react-router-dom'


const Item = ({ product }) => {
    if (!product) return null; //Esta parte evita que se renderize el resto del codigo sin agarra informacion que le llega tarde    
    return (
        <section className="section-cards">
            <div className="product-card">
                <div>
                <h3>{product.nombre}</h3>
                <img className="imgs" src={product.img} alt="imagen Del Producto" />
                <p>{product.detalles}</p>
                <span>${product.precio} COP</span>
                <p>Stock: {product.stock}</p>
                <Link to={`/detalles/${product.id}`}>
                <button>Ver Detalles</button>
                </Link> 
                </div>
            </div>
        </section>
    );
};

export default Item;
