// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from './screen/login';
// import Home from './screen/home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
