import s from './Slider.module.scss'
import React, {useRef, useState} from 'react';
import cn from 'classnames'

import firstSlide from '../../images/slides/firstSlide.png'
import secondSlide from '../../images/slides/secondSlide.png'
import thirdSlide from '../../images/slides/thirdSlide.png'


const images = [firstSlide, secondSlide, thirdSlide];

const Slider = () => {


    const [items, setItems] = useState(images)
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const slider = useRef(null)
    let position = 0


    const prevHandler = () => {
        position += 798
        setPrev(false)
        slider.current.childNodes.forEach((item) => {
            item.style = `transform: translateX(${position}px)`
        })
    }

    const nextHandler = () => {
        if (position === (items.length - 3) * 100 + 100) {
            setNext(true)
            setPrev(false)
        } else {
            setPrev(false)
            position -= 798
            slider.current.childNodes.forEach((item) => {
                item.style = `transform: translateX(${position}px)`
            })
        }
    }

    return (
        <div className={s.Container}>
            <div className={s.Slider}>
                <div className={s.Slider__track} ref={slider}>
                    {items.map((item) => {
                        return (
                            <div className={s.Slider__item}>
                                {/*<img className={s.Img} src={item} alt=""/>*/}
                            </div>
                        )
                    })}
                </div>
                <button className={cn(s.Slider__button, s.Slider__button_prev)} onClick={prevHandler}>{'<'}</button>
                <button className={cn(s.Slider__button, s.Slider__button_next)} onClick={nextHandler}>{'>'}</button>
            </div>
        </div>

    );
};

export default Slider;