import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Counter } from './features';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Counter App with RTQ.
        </p>
      </header>
    </div>
  );
}

export default App;