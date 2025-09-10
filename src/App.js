import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Map from './components/Map';
import Faqs from './components/Faqs';
import Partners from './components/Partners';

function App() { 
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Portfolio />
        <Services />
        <Map />
        <Faqs />
        <Partners />
      </main>
    </div>
  );
}

export default App;
