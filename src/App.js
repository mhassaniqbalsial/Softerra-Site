import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Portfolio />
        <Services />
        <Map />
      </main>
    </div>
  );
}

export default App;
