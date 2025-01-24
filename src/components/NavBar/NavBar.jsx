import React from "react"
import './NavBar.Module.css'
import CartWidget from "./CartWidget.jsx"
import { Link } from "react-router-dom"; 


const Navbar = (props) => {
    if (props.isFooter) {
        return (
            <nav className={"nav"}>
                <h1>ZK SHOP</h1>
                <ul>
                    <li>
                        <Link to="/inicio">Inicio</Link> 
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        )
    } else {
        return (
            <nav className={"nav"}>
                <h1>Componente NAVBAR FOOTER</h1>
                <a href="/Facebook">Facebook</a>
                <a href="/instagram">Instagram</a>
                <a href="/Twitter">Twitter/X</a> 
            </nav>
        )
    }
}


//Se hace una condicional para que si la props nombrada isfooter es false para else y me muestra la variante de la navbar

export default Navbar