import React from 'react';
import s from './Hero.module.css'
import firstSlide from '../../images/slides/first.png'
import secondSlide from '../../images/slides/second.png'
import thirdSlide from '../../images/slides/third.png'
import Slider from "../Slider/Slider";

const images = [
    { url: [firstSlide] },
    { url: [secondSlide] },
    { url: [thirdSlide] },
];



const Hero = () => {
    return <div className={s.container}>
        <Slider/>
    </div>
};

export default Hero;