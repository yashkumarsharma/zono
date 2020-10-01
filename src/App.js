import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  Cart,
  Checkout,
  ProductCatalog,
} from './containers'

import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link className='App-link' to='/'> Products </Link>
          <Link className='App-link' to='/cart'> Cart </Link>
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <ProductCatalog />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
