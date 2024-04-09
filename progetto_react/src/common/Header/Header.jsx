import React from 'react'
import logo from "../../label-2780146_1280.png"
import './Header.css'


const Header = () => {
  return (
    <header className='header-class'>
        <div className='wrapper'>
        <img src={logo} alt="logo" className='logo' />
        <nav>
            <ul className='menu'>
            <li>Menu</li>
                <li>About</li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header