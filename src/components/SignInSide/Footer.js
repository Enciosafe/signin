import React from 'react';
import s from './SignIn.module.css'

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
        </div>
    );
};

export default Footer;