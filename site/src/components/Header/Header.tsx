import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <nav className="header-nav">
                <ul>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Experiência</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Formação</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Serviços-PJ</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;