import React from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import LoginPage from './pages/LoginPage/LoginPage'
import { auth } from './assets/firebaseConfig'

const HatsPage = () => (
  <div className='example'>
    <h1>hats page</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default App
