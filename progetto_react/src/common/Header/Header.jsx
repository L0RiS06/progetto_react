import React from 'react'
import logo from "../../label-2780146_1280.png"
import Menu from '../../pages/Menu/Menu'
import About from '../../pages/About/About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <header className='header-class'>
        <div className='wrapper'>
        <img src={logo} alt="logo" className='logo' />
        <nav>
            <ul className='menu'>
              <li><a href="/">Home</a></li>
              <li><a href="/Menu">Menu</a></li>
                <li><a href="/About">About</a></li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header