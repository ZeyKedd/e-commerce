import { createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    // ----------- Estados


    // ----------- Funciones

    //Adiccionar al carrito
    const addToCart = () => { }

    //Verificar si esta en el carrito el prodcuto o no
    const isInCart = () => { }

    // Sumar las cantidades del mismo producto

    const totalQuantitySingleProduct = () => { }

    // calcular el total de los hay en el carrito

    const totalQuantity = () => { }

    //Precio total del carrito

    const totalPrice = () => { }

    // eliminar un solo producto

    const deleteOne = () => { }

    // Vaciar el carrito

    const clearCart = () => { }


    return (

        <CartContext.Provider value={{ addToCart, clearCart }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider
