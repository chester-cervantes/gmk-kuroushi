import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>

            <section className="hero">
                <div className="hero-inner">
                    <div id="intro">
                        <h1>GMK Kuroge Wagyū</h1>
                        <p>Inspired by the Japanese Black Cow
                        </p>
                    </div>
                    <br/>
                    <button className="learn-more">Learn More</button>
                </div>
            </section>
        </header>
    );
}

export default Header;
