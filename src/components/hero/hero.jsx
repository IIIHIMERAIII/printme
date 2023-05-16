import React, { useState } from 'react';
import {
    Background,
    HeroWrapper,
    HeroTitle,
    HeroSlider,
    SliderImg,
    SliderBtn,
    SliderBtnSvg,
} from "./styled"
import { Button } from "../button/button"
import sprite from '../../images/sprite.svg';

import h1 from '../../images/h1.jpg';
import h2 from '../../images/h2.jpg';

const sliderItems = [
    { img: h1, title: 'Член Української Асоціації Візуальної Індустрії', link: 'http://uavi.com.ua/' },
    { img: h2, title: 'Виготовлення технічної документації на вивіску', link: '/products'  }
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
            <SliderBtn onClick={previousImage} style={{ left: '5px' }} > 
                <SliderBtnSvg>
                    <use  href={`${sprite}#circle_left`}/>
                </SliderBtnSvg>
            </SliderBtn>
            <SliderBtn onClick={nextImage} style={{ right: '5px' }}>
                <SliderBtnSvg>
                    <use  href={`${sprite}#circle_right`}/>
                </SliderBtnSvg>
            </SliderBtn>
        </Background>
    )
};