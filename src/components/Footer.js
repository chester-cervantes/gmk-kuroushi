import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">

            <h2>Follow Our Social Medias!</h2>
            <table>
                <tr>
                    <td>
                        <a href="https://www.instagram.com/chester.cervantes/">
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
                        <a href="https://discord.gg/PbvMNrr">
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
            <div className="social-media-icons-attribution">
                Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
            <div className="social-media-icons-attribution">
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
        </div>
    );
}

export default Footer;
