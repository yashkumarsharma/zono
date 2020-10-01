import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
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

import reducer from './reducers'
import sagas from './sagas'
import './App.css'

// create our store
const sagaMiddleware = createSagaMiddleware()
const configureStore = (() => {
  let store
  return {
    create() {
      if (!store) {
        store = createStore(
          combineReducers(reducer),
          compose(applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ))
      }
      return store
    },
  }
})()

export const store = configureStore.create()
sagaMiddleware.run(sagas)

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
