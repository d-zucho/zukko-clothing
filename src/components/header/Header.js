import React from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} alt='crown clothing' />
      </Link>

      <div className='options-container'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header
