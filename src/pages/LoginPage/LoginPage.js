import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'

import './loginPage.styles.scss'

const LoginPage = () => {
  return (
    <div className='login-page'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default LoginPage
