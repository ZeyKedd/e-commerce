import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    // ----------- Estados
    const [cart, setCart] = useState([])

    // ----------- Funciones

    //(1)Adiccionar al carrito
    const addToCart = (item, cantidad) => {
        //(2)verifica si ya esta para ver si lo agrega desde 0 o le suma la cantidad

        if (isInCart(item.id)) { //(5)Si esta en el carrito (isInCart)=true suma la cantidad si es false pasa al else y añade desde nuevo
            totalQuantitySingleProduct(item, cantidad)

        } else {
            setCart([...cart, { ...item, cantidad }]) //esos ... es como decir que se mantenga el estado anterior y se agrege uno nuevo es el .push pero sin serlo
        }

    }

    //(3)Verificar si esta en el carrito el prodcuto o no
    const isInCart = (id) => {
        //(4)Some revisa a producto (producto) y miras los id de los productos(product.id) y si dentro de cart hay un id estrictamente igual devuelve un true
        return cart.some((singleProduct) => singleProduct.id === id)
    }

    //(6)Sumar las cantidades del mismo producto

    const totalQuantitySingleProduct = (item, cantidad) => {
        const updateProduct = cart.map((producto) => {
            if (producto.id === item.id) {
                const productoUpdate = { ...producto, cantidad: producto.cantidad + cantidad }
                return productoUpdate
            } else {
                return producto
            }
        })
        setCart(updateProduct)
    }

    // calcular el total de los hay en el carrito

    const totalQuantity = () => {
        return cart.reduce((acumuladorTotal, prod) => acumuladorTotal + prod.cantidad, 0);
        //se aplica la misma logica del totalPrice pero solo suma las cantidades en el cart con el acumulador
    }

    //Precio total del carrito
    const totalPrice = () => {
        return cart.reduce((acumuladorTotal, prod) => acumuladorTotal + prod.precio * prod.cantidad, 0);
        //reduce guarda en acumuladortotal los datos que se saquen de la multiplicaion entre el precio y la cantidad
        //reduce vuelve todo en un unico elemento
    };
    
        // eliminar un solo producto

        const deleteOne = (id) => {
            const productoEliminar = cart.filter(prod => prod.id !== id)
            setCart(productoEliminar)
        }

        // Vaciar el carrito

        const clearCart = () => {
            setCart([])
        }


        //FALTA REVISAR getProductQuantity

        //Funcion que permita traer de la cantidad
        //de cada producto que esta en la cart hacia itemDetail
        const getProductQuantity = (id) => {
            const productQuantity = cart.find(prod => prod.id === id)
            return productQuantity?.cantidad //el ? es basicamente si el prod es undefined o null devuelve un fall si no devuelve  el .cantidad (optional chaining)
            //osea por ejemplo si se intenta usar el id:3 pero en el array no se ha metido el id:3 simplemente sera false
        }

        return (
            <CartContext.Provider value={{ cart, addToCart, clearCart, deleteOne, getProductQuantity, totalPrice, totalQuantity }}>
                {children}
            </CartContext.Provider>
        )
    }
export default CartProvider
