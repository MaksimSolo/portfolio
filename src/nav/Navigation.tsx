import React from 'react';
import style from './Nav.module.css';

function Navigation() {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Portfolio</a>
            <a href="">Contacts</a>

        </div>
    );
}

export default Navigation;
