import React from 'react';
import Umi from '../Images/Umi-Logo-PSD-blue.png';
import '../App.css'

function Footer() {
    return (
        <footer style={footerStyle}>
            <a href="https://umidigital.co.uk/" target="_blank">
                <img src={Umi} alt="Umi Logo" style={imageStyle}/>
            </a>
        </footer>
    )
}

const footerStyle = {
    background: '#bdfcff',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    width: '350px',
    height: '80px',
}

const imageStyle = {
    width: '20%',
    height: '20%',
}

export default Footer;