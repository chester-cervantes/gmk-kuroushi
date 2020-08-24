import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            Follow Us
            <table>
                <tr>
                    <td>
                        <a href="https://www.instagram.com/chester.cervantes/">
                            <img 
                                src="glyph-logo_May2016.png"           
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                        </a>
                    </td>
                    <td>
                        <a href="https://www.instagram.com/chester.cervantes/">
                            <img 
                                src="glyph-logo_May2016.png"           
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Footer;
