import React, { useState } from 'react'
import './AddItemCart.Module.css'
import CartCounter from './CartCounter';
const AddItemCart = ({ amount }) => {
    const [added, setAdded] = useState(0);


    function add() {
        // actualizamos el estado 'added' con el valor de 'amount'
        setAdded(prevAdded => prevAdded + amount);
        alert(`Se Añadio ${amount} elementos`)

    }
    return (
        <div className='AddButton'>
            <button onClick={add}>Añadir Al Carro</button>
            <p>{added} En Carrito</p> {/* Por ahora no hay cart asi que se deja nomas esto para visualizar su correcta suma local*/}
        <section >
        <CartCounter hideparrafo={false} data={added} />
        </section>
        </div>

    )
}

export default AddItemCart