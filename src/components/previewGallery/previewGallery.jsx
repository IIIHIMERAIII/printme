

import {
    GalleryWrapper,
    GalleryList,
    ListItem,
    ItemImg,
    HoverTitle,
    HoverBtn,
    HoverBtnSvg
} from './styled';
import sprite from '../../images/sprite.svg';

export const PreviewGallery = ({ items }) => {

    return (
        <GalleryWrapper>
            <GalleryList>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ItemImg src={item.img} />
                        <HoverBtn to={`/gallery/${item.id}`}>
                            <div>
                            <HoverTitle>{item.title}</HoverTitle>
                            </div>
                            <HoverBtnSvg>
                                <use href={`${sprite}#glass`} />
                            </HoverBtnSvg>
                        </HoverBtn>
                    </ListItem>
                ))}
            </GalleryList>
        </GalleryWrapper>
    )
};