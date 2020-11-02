import React from 'react';

import './Header.css'

import foto from '../../assets/images/fernando.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={foto} alt="foto" />
            <div className="title">
                <h1>FERNANDO <br /> MARCA MAGALHÃES</h1>
                <h3>Full-Stack Developer</h3>
                <h4>Software Engineer</h4>
            </div>
        </div >
    )
}

export default Header;