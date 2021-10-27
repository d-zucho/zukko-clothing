import React from 'react'
import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      Confirmpassword: '',
      displayName: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ email: '', password: '', displayName: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='display-name'
            type='text'
            handleChange={this.handleChange}
            label='Display Name'
            value={this.state.displayName}
            required
          />

          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            name='confirm password'
            type='password'
            value={this.state.Confirmpassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
