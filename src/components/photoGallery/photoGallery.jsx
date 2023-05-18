import ImageGallery from 'react-image-gallery';
import sprite from '../../images/sprite.svg';

import {
    GalleryWrapper,
} from './styled';
import { Container } from '../../assets/container';


export const PhotoGallery = ({ items }) => {  
    return (
        <GalleryWrapper>
            <Container>
                <ImageGallery items={items} />
            </Container>
        </GalleryWrapper>
);
};