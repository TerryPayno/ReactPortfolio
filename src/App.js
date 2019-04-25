import React from 'react';
import './App.css';
import Nav from './Nav/Nav.js';
import './Nav/Nav.css';
import Home from './Home/Home';
import './Home/Home.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
