import React from 'react'
import logo from './../../Images/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <img className='logo' src={logo} alt='logo' />
            <p className='logo-text'>Type Champ</p>
        </div>
        <div>
            <p className='copyright'>Copyrigth ©, 2023</p>
        </div>
    </div>
  )
}

export default Footer