import React from "react"
import './NavBar.Module.css'
import CartWidget from "./CartWidget.jsx"
import { Link } from "react-router-dom";
import Logo from "../img/zkd.jpg"
//
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = (props) => {
    if (props.isFooter) {
        return (
            <nav className={"nav"}>
                <img className="logo-nav" src={Logo} alt="ZK SHOP" />
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/Contacto">Contacto</Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        )
    } else {
        return (
            <nav className={"nav-footer"}>
                <img className="logo-nav" src={Logo} alt="ZK SHOP" />
                <h4>SEBASTIAN HERNANDEZ</h4> <h4>
                    POLITECNICO PIO</h4>
                <div className="container">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="https://www.x.com/"><BsTwitterX /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


//Se hace una condicional para que si la props nombrada isfooter es false para else y me muestra la variante de la navbar

export default Navbar