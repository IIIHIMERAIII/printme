import ImageGallery from 'react-image-gallery';
import { ReactComponent as ArrowLeftIcon } from '../../images/circle-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/circle-right.svg';
import { SliderBtn } from '../sliderButton/styled';
import { colors } from '../../assets/theme';

import {
    GalleryWrapper,
} from './styled';
import { Container } from '../../assets/container';



export const PhotoGallery = ({ items }) => {  
    return (
        <GalleryWrapper>
            <Container>
                <ImageGallery
                    items={items}
                    renderLeftNav={(onClick, disabled) => (
                      <SliderBtn
                        type="button"
                        className={`image-gallery-icon image-gallery-left-nav ${disabled ? 'disabled' : ''}`}
                        disabled={disabled}
                        onClick={onClick}
                        style={{boxShadow: 'none', animation: 'none', transition: 'none', backgroundColor:`${colors.orange}`}}
                      >
                        <ArrowLeftIcon />
                      </SliderBtn>
                    )}
                    renderRightNav={(onClick, disabled) => (
                    <SliderBtn
                        type="button"
                        className={`image-gallery-icon image-gallery-right-nav ${disabled ? 'disabled' : ''}`}
                        disabled={disabled}
                        onClick={onClick}
                        style={{boxShadow: 'none', animation: 'none', transition: 'none', backgroundColor:`${colors.orange}`}}    
                      >
                        <ArrowRightIcon />
                      </SliderBtn>
                    )}
                    />
            </Container>
        </GalleryWrapper>
);
};