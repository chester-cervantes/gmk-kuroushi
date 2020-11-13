import React from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <SimpleReactLightbox>
                <Body />
            </SimpleReactLightbox>
            <Footer/>
        </div>
    );
}

export default App;
