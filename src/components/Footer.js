import React from 'react';
import './Footer.css';
import '../App.css';

function Footer() {
    return (
        <footer className="grid">
            <div className="content-wrap">
                <h2>Follow our Social Medias!</h2>
                <table>
                    <tr>
                        <td>
                            <a href="https://www.instagram.com/mountiecaps/" target="_blank">
                                <img
                                    className="social-media-icons"
                                    src="glyph-logo_May2016.png"
                                    style={{
                                        height: 30,
                                        width: 30
                                    }}
                                />
                            </a>
                        </td>
                        <td>
                            <a href="https://discord.gg/KQ6f3xcJn9" target="_blank">
                                <img
                                    className="social-media-icons"
                                    src="discord.png"
                                    style={{
                                        height: 30,
                                        width: 30
                                    }}
                                />
                            </a>
                        </td>
                    </tr>
                </table>

                <div>
                    <p>Special thanks to Zambumom, Manzel, Biip, Kuuguya, 2Moons, Ulliam
                    </p>
                </div>
                <br></br>
                <br></br>
                <div className="social-media-icons-attribution">
                    Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel
                    perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div>
                <div className="social-media-icons-attribution">
                    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
