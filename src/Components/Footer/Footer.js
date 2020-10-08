import React, {useState, useEffect} from 'react';
import './Footer.css'

function Footer(props){
    const year = new Date().getFullYear();

    return <div className="footer">Copyright © Mallory Dalley {year}</div>;
}

export default Footer;