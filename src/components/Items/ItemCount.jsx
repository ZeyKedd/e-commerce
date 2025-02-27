// (-)5. Crear un componente ItemCount que debe estar compuesto de un botón y controles, para
// incrementar y decrementar la cantidad requerida de ítems.
import './ItemCount.Module.css'
import React, { useState } from "react";

const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);


    const Añadir = () => { count < stock ? setCount(count + 1) : alert('Maximo') }
    const Quitar = () => { count > initial ? setCount(count - 1) : alert('Minimo') }
    return (
        <div className='div-counter' >
            <p>{count}</p>
            <div className='button-layout'>
                <button className='button-counter' style={{borderRadius:"100px"}} onClick={Añadir}> + </button>
                <span className='buttonSpanSpace'></span>
                <button className='button-counter ' style={{borderRadius:"100px"}} onClick={Quitar}> - </button>
                <button className='buttonAddtoCart' onClick={() => onAdd(count)}>Añadir Al Carro</button> {/* onAdd es una funcion del padre para pasarle unformacion desde el hijo  */}
            </div>
        </div>
    )
}

export default ItemCounter