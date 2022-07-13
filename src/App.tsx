import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import {Home, Game, NotFound404} from './pages'

function App() {
  return (
    <Router>
      <div className='App'>
      <header className="App-header">
        <nav>
          <Link to="/" className='navlink'>主页</Link>
          <Link to="/game" className='navlink'>石头剪刀布</Link>
          <Link to="/foo" className='navlink'>其他</Link>
          {/* <Link to="/bar">Bar</Link> */}
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/game" element={<Game/>} />
          <Route  path="/foo" element={<NotFound404/>} />
          <Route  path="*" element={<NotFound404/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
