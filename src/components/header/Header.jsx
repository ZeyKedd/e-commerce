import React from 'react'
import Navbar from '../NavBar/NavBar'
import style from './Header.Module.css'
const Header = () => {
    return(
        <div className={style.header}>
            <Navbar isFooter={true}/>
        </div>
    )
}

export default Header