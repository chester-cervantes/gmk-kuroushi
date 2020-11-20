import React, {useRef} from 'react';
import './Header.css';


function Header() {
    const myRef = useRef(null);

    const executeScroll = () => document.getElementById('scroll-here').scrollIntoView()
    return (
        <header>
            <section className="hero">
                <div className="hero-inner">
                    <div id="intro">
                        <h1>GMK Kuroge Wagyū</h1>
                        <p>A GMK keycap set based on the Japanese black cow featuring WoB Hiragana sublegends.
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
