// (-)5. Crear un componente ItemCount que debe estar compuesto de un botón y controles, para
// incrementar y decrementar la cantidad requerida de ítems.
import './ItemCount.Module.css'
import React, { useState } from "react";
import AddItemCart from '../cart/AddItemCart';

const ItemCounter = () => {
    const [count, setCount] = useState(1);
    

    const Añadir = () => {count < 30 ? setCount (count + 1):alert('Maximo')}
    const Quitar = () => {count > 1 ? setCount (count - 1):alert('Minimo')}
    return (
        <div className='div-counter' >
            <p>{count}</p>
            <div className='button-layout'>
            <button className='button-counter' onClick={Añadir}> Agregar </button>
            <span className='buttonSpanSpace'></span>
            <button className='button-counter' onClick={Quitar}> Quitar </button>
            </div>
            <AddItemCart hideparrafo={true} amount={count} />
        </div>
    )
}

export default ItemCounter