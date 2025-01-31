import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemlistContainer from '../Items/ItemListContainer'
import ItemDetailContainer from '../Items/ItemDetailContainer'
import Contacto from '../routes/Contacto.jsx';
import Inicio from '../routes/Inicio.jsx';
import Productos from '../routes/Productos.jsx';
import Cart from '../routes/Cart.jsx'
import Perfil from '../routes/Perfil.jsx';


const Main = () => {
    return (
        <main>
            <Routes>

                {/* Rutas Predeterminadas */}


                <Route path="/"
                    element={<Inicio />}
                />

                <Route path="/contacto"
                    element={<Contacto />}
                />
                
                <Route path="/productos"
                    element={<Productos />}
                />
                <Route
                    path='/category/:categoryName'
                    element={<ItemlistContainer />}
                />
                <Route
                    path='/detalles/:idProduct'
                    element={<ItemDetailContainer />}
                />

                {/* Rutas Widgets */}

                <Route path="/perfil"
                    element={<Perfil />} />

                <Route path="/cart"
                    element={<Cart />} />

            </Routes>
        </main >
    )
}

export default Main