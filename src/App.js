import React from 'react'
import './App.css'
import { onSnapshot, doc } from 'firebase/firestore'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import LoginPage from './pages/LoginPage/LoginPage'
import { auth, db, createUserProfileDoc } from './assets/firebaseConfig'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        await createUserProfileDoc(userAuth)

        onSnapshot(doc(db, 'users', userAuth.uid), (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data(),
            },
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
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
