import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Map from './Map';
import Faqs from './Faqs';
import Partners from './Partners';
import Teams from './Teams';
import Contact from './Contact';
import Newsletter from './Newsletter';

const Home = () => {
    return (
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
    );
};

export default Home;

