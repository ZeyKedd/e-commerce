import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.Module.css'

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice, totalQuantity } = useContext(CartContext)
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "20px" }}>
            {
                cart.map((item) => (
                    <div key={item.id}
                        style={{
                            border: '1px solid black',
                            margin:'2px',
                            borderRadius: '10px',
                            padding: '10px',
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        <h3> {item.nombre} </h3>
                        <h3>{item.cantidad}</h3>
                        <h3>${item.precio} COP</h3>
                        <button className="buttonEliminar" onClick={() => deleteOne(item.id)}>Eliminar</button> {/* --{() => deleteOne(producto.id)}-- == Esto se hace cuando la funcion neceista un parametro en el hijo se pone en callback */}
                    </div>
                ))
            }
            <button className="buttonEliminar" style={{margin:"5px"}} onClick={clearCart}>Limpiar Carrito</button>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className="buttonEliminar">COMPRAR</button>
            <h3 style={{margin:"0px 40px"}} >Subtotal ({totalQuantity()} Productos): ${totalPrice()} COP</h3>
            </div>
        </div>
    )
}

export default Cart