import React from 'react';
import logo from './logo.svg';

import {
  ProductCatalog,
} from './containers'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <ProductCatalog />
      </div>
    </div>
  );
}

export default App;
