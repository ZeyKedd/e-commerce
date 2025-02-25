import React from 'react';
import img from '../img/foto-recortada.png';

const Contacto = () => {
    return (
        <section
        style={{ 
            display:"flex",
            justifyContent: "center", 
            alignItems:"center",
            textAlign: "center",
            margin:"50px",
        }}>
            <div 
                style={{ 
                    width: "40rem", 
                    padding: "20px", 
                    backgroundColor: "black", 
                    borderRadius: "10px", 
                    boxShadow: "2px 2px 10px rgba(255, 255, 255, 0.1)", 
                    textAlign: "center" 
                }}
            >
                <img 
                    src={img} 
                    style={{ 
                        width: "150px", 
                        height: "150px", 
                        borderRadius: "50%", 
                        objectFit: "cover", 
                        border: "3px solid #ddd", 
                        marginBottom: "10px" 
                    }} 
                    alt="Profile" 
                />
                <h1 style={{ margin: "5px 0", color: "white", fontWeight: "bold" }}>SEBASTIAN HERNANDEZ</h1>
                <h4 style={{ margin: "5px 0", color: "white", fontWeight: "bold" }}>CALI - COLOMBIA</h4>
                <h4 style={{ margin: "5px 0", color: "white", fontWeight: "bold" }}>+57 311 234567</h4>
                <h4 style={{ margin: "5px 0", color: "white", fontWeight: "bold" }}>correo.busines@gmail.com</h4>

            </div>
        </section>
    );
};

export default Contacto;