import React, { useState } from 'react';
import {
    Background,
    HeroWrapper,
    HeroTitle,
    HeroSlider,
    SliderImg,
    SliderBtn
} from "./styled"
import { Button } from "../button/button"

import h1 from '../../images/h1.jpg';
import h2 from '../../images/h2.jpg';

const sliderItems = [
    { img: h1, title: 'Якась крута фраза номер 1 ' },
    { img: h2, title: 'Якась крута фраза номер 2 ' }
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
                <HeroTitle>{currentSliderItem.title}</HeroTitle>
                <Button
                    text='Дізнатись більше'
                />
            </HeroWrapper>
            <HeroSlider>
                <SliderImg src={currentSliderItem.img} alt="Slider Image" />
            </HeroSlider>
                <SliderBtn onClick={previousImage} style={{left: '3px'}}>{`<`}</SliderBtn>
            <SliderBtn onClick={nextImage} style={{ right: '3px' }}>{`>`}</SliderBtn>
        </Background>
    )
};