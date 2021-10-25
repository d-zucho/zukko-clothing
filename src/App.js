import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => (
  <div className='example'>
    <h1>hats page</h1>
  </div>
)

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
