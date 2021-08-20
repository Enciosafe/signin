import React from 'react';
import s from './Hero.module.css'
import SimpleImageSlider from "react-simple-image-slider";

import firstSlide from '../../images/slides/first.png'
import secondSlide from '../../images/slides/second.png'
import thirdSlide from '../../images/slides/third.png'

const images = [
    { url: [firstSlide] },
    { url: [secondSlide] },
    { url: [thirdSlide] },
];


let widerScreenWidth = window.matchMedia("(max-width: 450px)");


const Hero = () => {
    return (
        <div className={s.container}>
            <div className={s.slider}>
                {!widerScreenWidth.matches && <SimpleImageSlider
                    width={800}
                    height={860}
                    images={images}
                    showNavs={true}
                    showBullets={true}
                /> }
            </div>
        </div>
    );
};

export default Hero;