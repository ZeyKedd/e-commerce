import React, { useRef, useEffect } from 'react';
import ItemListContainer from '../Items/ItemListContainer';
import './productos.Module.css';
import { Link } from "react-router-dom";

//Dropdown Adaptado con Chatgpt

const Productos = () => {
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const buttonElement = buttonRef.current;
        const toggleDropdown = () => {
            if (dropdownRef.current) {
                dropdownRef.current.style.display = dropdownRef.current.style.display === "block" ? "none" : "block";
            }
        };

        const handleClickOutside = (event) => {
            if (
                buttonElement &&
                dropdownRef.current &&
                !buttonElement.contains(event.target) &&
                !dropdownRef.current.contains(event.target)
            ) {
                dropdownRef.current.style.display = "none";
            }
        };

        buttonElement?.addEventListener("click", toggleDropdown);
        document.addEventListener("click", handleClickOutside);

        return () => {
            buttonElement?.removeEventListener("click", toggleDropdown);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <section>
            <div className='productos-dropdown'>
                <h1>PRODUCTOS</h1>
                <div className="select-menu">
                    <button ref={buttonRef} className="buttonDrop">Categorias</button>
                    <ul ref={dropdownRef} className="dropdown">
                        <li className='dropdownLi'><Link style={{color:"white"}} to="/category/remeras">Remeras</Link></li>
                        <li className='dropdownLi'><Link style={{color:"white"}} to="/category/camisas">Camisas</Link></li>
                        <li className='dropdownLi'><Link style={{color:"white"}} to="/category/gorras">Gorras</Link></li>
                    </ul>
                </div>
            </div>
            <ItemListContainer />
        </section>
    );
};

export default Productos;
