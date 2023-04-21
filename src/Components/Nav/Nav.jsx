import React from 'react'
import './Nav.css'
import logo from './../../Images/logo.png'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <img className='flash' src={logo} alt='logo' />
            <p className="flash-logo-text">Type Champ</p>
        </div>
        
    </div>
  )
}

export default Nav