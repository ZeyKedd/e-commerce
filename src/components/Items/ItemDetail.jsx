import React from 'react';
import ItemCounter from './ItemCount';
import './ItemDetail.Module.css'

const ItemDetail = ({ item }) => {
    return (
        <div className='container-card'>

        <div className="card-container">
            <div className="card-info">
                <h3 className='h3'>{item.nombre}</h3>
                <img src={item.img} alt={item.nombre} />
                <p className='p'>{item.detalles}</p>
                <span className='span'>${item.precio}</span>
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
                <ItemCounter />
            </div>
            </div>
        </div>
    </div>

    )
}

export default ItemDetail