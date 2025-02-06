import React, { useContext, useState, useEffect } from 'react';
import ItemCounter from './ItemCount';
import './ItemDetail.Module.css'
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0)

    const {cart, addToCart, getProductQuantity} = useContext(CartContext) //Recibe parametro y funcion del contexto


    //NO ESTA FUNCIONANDO, ATENTO POR REVISAR (SE CAMBIA EL INITIAL={cantidad} por ahora se dejara en 1)

useEffect(() => {
    // Cuando el componente se renderiza o cambia el carrito, actualiza la cantidad
    const currentQuantity = getProductQuantity(item.id);
    if (currentQuantity) {
        setCantidad(currentQuantity); // Actualiza la cantidad con el valor actual del carrito
    }
}, [cart, item.id, getProductQuantity]); // Dependencias para que se ejecute cuando el carrito cambie


    // Funcion para recibir data del hijo (ItemCount)
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
        addToCart(item,cantidadItem) // Aqui se usa la funcion y le pasa la informacion recibida a la funcion en el contexto
    }

    return (
        <div className='container-card'>

            <div className="card-container">
                <div className="card-info">
                    <h3 className='h3'>{item.nombre}</h3>
                    <img src={item.img} alt={item.nombre} />
                    <p className='p'>{item.detalles}</p>
                    <span className='span'>${item.precio} COP</span>
                    <p>Stock: {item.stock}</p>
                </div>
                <div>
                    <h3 className='h3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Velit autem perferendis nihil molestiae, quaerat error enim alias similique
                        libero unde minus. Quaerat nemo corrupti incidunt reiciendis expedita,
                        accusantium maiores tenetur.
                    </h3>
                    <div className='card-counter' >
                        <ItemCounter stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail