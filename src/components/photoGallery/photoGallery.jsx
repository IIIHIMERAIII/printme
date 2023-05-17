
import { useState } from 'react';
import {
    GalleryWrapper,
    GalleryList,
    ListItem,
    ItemImg,
    HoverWrapper,
    HoverTitle,
    HoverBtn,
    HoverBtnSvg,
    Img,
} from './styled';
import sprite from '../../images/sprite.svg';


export const PhotoGallery = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [imgId, setImgId] = useState('none')

    const openPhoto = (id) => {
        let img = items.find(item => item.id === id);
        setImgId(img.img)
        setIsOpen(true);
    };

    const closePhoto = () => {
        setIsOpen(false);
    }
    
    
    return (
        <GalleryWrapper>
            <GalleryList>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ItemImg src={item.img} />
                        <HoverWrapper>
                            <HoverTitle>{item.title}</HoverTitle>
                            <HoverBtn onClick={() => openPhoto(item.id)}>
                                <HoverBtnSvg>
                                    <use href={`${sprite}#glass`} />
                                </HoverBtnSvg>
                            </HoverBtn>
                        </HoverWrapper>
                    </ListItem>
                ))}
            </GalleryList>
            <Img
                isOpen={isOpen}
                src={imgId}
                onClick={() => closePhoto()}
            />
        </GalleryWrapper>
    )
};