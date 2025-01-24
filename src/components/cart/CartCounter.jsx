import React, { useState, useEffect } from 'react';
// COMPONENTE NO FUNCIONA CORRECTAMENTE TODAVIA
const CartCounter = ({ data, hideparrafo }) => {
    const [totalAmount, SetTotalAmount] = useState(0);
    
    useEffect(() => {   
        if (!data) return;
        SetTotalAmount(data); //Esto usa el ultimo numero que se almaceno en totalamount (esto para evitar usar a totalamount como una dependencia y que genere bucles)
    }, [data]); // Solo se ejecuta cuando data cambia
    console.log('Componente Hijo Data ='+data)
    console.log("total amounte = "+totalAmount)
    return (
        <div>
            <p style={{ display: hideparrafo ? 'block' : 'none' }}>{totalAmount}</p>
        </div>
    );
};

export default CartCounter;
