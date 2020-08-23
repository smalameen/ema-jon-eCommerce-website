import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';



function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <Shop></Shop>
        
      </header>
    </div>
  );
}

export default App;
