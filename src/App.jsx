import React from 'react';
import { CounterByAmount, CounterByOne } from './features';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <CounterByOne/>
          <CounterByAmount/>
        </div>
        <p>
          Counter App with RTQ.
        </p>
      </header>
    </div>
  );
}

export default App;