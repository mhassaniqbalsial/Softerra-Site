import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Map from './components/Map';
import Faqs from './components/Faqs';
import Partners from './components/Partners';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() { 
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <Map />
        <Faqs />
        <Partners />
        <Teams />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
