import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import {Game, NotFound404} from './pages'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <nav>
          <Link to="/">Game</Link>
          <Link to="/foo">Foo</Link>
          <Link to="/bar">Bar</Link>
        </nav>
        <Routes>
          <Route  path="/" element={<Game/>} />
          <Route  path="/foo" element={<NotFound404/>} />
          <Route  path="/bar" element={<NotFound404/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
