import React from 'react';
import './Header.css';


function Header() {
    const executeScroll = () => document.getElementById('scroll-here').scrollIntoView()
    return (
        <header>
            <section className="hero">
                <div className="hero-inner">
                    <div id="intro">
                        <h1>GMK Kuroge Wagyū</h1>
                        <p id="text">WoB Hiragana Sublegends with a side of wagyū
                        </p>
                    </div>
                    <br/>
                    <button className="learn-more" onClick={executeScroll}>Learn More</button>
                </div>
            </section>
        </header>
    );
}

export default Header;
