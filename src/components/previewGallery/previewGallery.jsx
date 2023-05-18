

import {
    GalleryWrapper,
    GalleryList,
    ListItem,
    ItemImg,
    HoverWrapper,
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
                        <HoverWrapper>
                            <div>
                            <HoverTitle>{item.title}</HoverTitle>
                            </div>
                            <HoverBtn
                                to={`/gallery/${item.id}`}
                            >
                                <HoverBtnSvg>
                                    <use href={`${sprite}#glass`} />
                                </HoverBtnSvg>
                            </HoverBtn>
                        </HoverWrapper>
                    </ListItem>
                ))}
            </GalleryList>
        </GalleryWrapper>
    )
};