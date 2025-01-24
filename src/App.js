
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Tu componente Header
import Header from './components/header/Header.jsx'; 
//COMPONENTES ROUTES
import Contacto from './components/routes/Contacto.jsx';
import Inicio from './components/routes/Inicio.jsx';
import Productos from './components/routes/Productos.jsx';
import Cart from './components/routes/Cart.jsx';
import Perfil from './components/routes/Perfil.jsx';

function App() {
  return (

    <Router>  {/* Envolvemos la aplicación con BrowserRouter */}
      <Header />

      {/* Define las rutas */}
      <Routes>

        {/* Rutas NavBar */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />

        {/* Rutas Widgets */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>

  );
}

export default App;


