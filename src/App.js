import React from 'react';
import logo from './logo.svg';
import './App.css';
import TraficLight from './components/TraficLight/TraficLight'

function App() {
  return (
    <div className="App">
      <TraficLight></TraficLight>
      <div className='axis'></div>
    </div>
  );
}

export default App;
