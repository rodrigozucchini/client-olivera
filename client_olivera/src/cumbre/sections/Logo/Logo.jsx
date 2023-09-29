import React from 'react'
import CumbreLogo from './../../../assets/cumbre-logo.png'
import './Logo.css';

export const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='img-cumbre' src={CumbreLogo} alt="Cumbre Logo" />
    </div>
  )
}
