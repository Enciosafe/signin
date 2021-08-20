import React from 'react';
import logo from "../../images/Logotype/WhiteLogo.png"
import s from "./SignIn.module.css"


const Logo = () => {
    return (
        <div>
            <img className={s.img} src={logo} alt="logotype Merge Development"/>
        </div>
    );
};

export default Logo;