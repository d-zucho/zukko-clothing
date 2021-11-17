import React from 'react'
import './header.styles.scss'
import { auth } from '../../assets/firebaseConfig'
import { Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg'
// import { signOut } from '@firebase/auth'

const Header = ({ currentUser }) => {
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

        {currentUser ? (
          <div className='option signOut' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/login' className='option'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
