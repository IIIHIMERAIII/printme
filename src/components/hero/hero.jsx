import React, { useState } from 'react';
import {
    Background,
    HeroWrapper,
    HeroTitle,
    HeroSlider,
    SliderImg,
} from "./styled"
import { Button } from "../button/button"
import { SliderButton } from '../sliderButton/sliderButton';

import sprite from '../../images/sprite.svg';

import h1 from '../../images/h1.webp';
import h2 from '../../images/h2.webp';

const sliderItems = [
    { img: h1, title: 'Член Української Асоціації Візуальної Індустрії', link: 'http://uavi.com.ua/' },
    { img: h2, title: 'Оформлення технічної документації на спеціальні рекламні конструкції', link: '/documentation'  }
];

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    const currentSliderItem = sliderItems[currentImageIndex];

    return (
        <Background>
            <HeroWrapper>
                <HeroTitle >{currentSliderItem.title}</HeroTitle>
                <Button
                    text='Дізнатись більше'
                    link={currentSliderItem.link}
                />
            </HeroWrapper>
            <HeroSlider>
                 {sliderItems.map((item, index) => (
                    <SliderImg
                      key={index}
                      src={item.img}
                      alt="Slider Image"
                      className={index === currentImageIndex ? "image-enter" : "image-exit"}
                    />
                 ))}
            </HeroSlider>
            <div className='leftSliderBtn' style={{position: 'absolute'}}>
                <SliderButton
                    onClick={previousImage}
                    icon={`${sprite}#circle_left`}
                    label='move left'
                />
            </div>
            <div className='rightSliderBtn' style={{position: 'absolute'}}>
                <SliderButton
                    onClick={nextImage}
                    icon={`${sprite}#circle_right`}
                    label='move right'
                />
            </div>

        </Background>
    )
};