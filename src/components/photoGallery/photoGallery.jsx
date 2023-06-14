import ImageGallery from 'react-image-gallery';
import { ReactComponent as ArrowLeftIcon } from '../../images/circle-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/circle-right.svg';


import {
  GalleryWrapper,
  GalleryButton,
} from './styled';
import { Container } from '../../assets/container';



export const PhotoGallery = ({ items }) => {  
    return (
        <GalleryWrapper>
            <Container>
                <ImageGallery
                    items={items}
                    renderLeftNav={(onClick, disabled) => (
                      <GalleryButton
                        type="button"
                        className={`image-gallery-icon image-gallery-left-nav ${disabled ? 'disabled' : ''}`}
                        disabled={disabled}
                        onClick={onClick}
                        style={{boxShadow: 'none', animation: 'none', transition: 'none', backgroundColor:`trasparent`}}
                      >
                        <ArrowLeftIcon />
                      </GalleryButton>
                    )}
                    renderRightNav={(onClick, disabled) => (
                    <GalleryButton
                        type="button"
                        className={`image-gallery-icon image-gallery-right-nav ${disabled ? 'disabled' : ''}`}
                        disabled={disabled}
                        onClick={onClick}
                        style={{boxShadow: 'none', animation: 'none', transition: 'none', backgroundColor:`trasparent`}}    
                      >
                        <ArrowRightIcon />
                      </GalleryButton>
                    )}
                    />
            </Container>
        </GalleryWrapper>
);
};