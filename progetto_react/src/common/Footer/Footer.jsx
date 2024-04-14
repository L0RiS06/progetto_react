import React from 'react'
import './Footer.css'
import logo1 from '../../facebook-770688_1280.png'
import logo2 from '../../instagram-1581266_1280.jpg'

const Footer = () => {
  return (
    <footer id="footer">
        <div className='footer'>
            <img src={logo1} alt="logo1" className='logo'/>
            <img src={logo2} alt="logo2" className='logo'/>
        </div>
    </footer>
  )
}

export default Footer