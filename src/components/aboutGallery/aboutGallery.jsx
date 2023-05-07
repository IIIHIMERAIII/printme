import { useState } from "react";
import { GalleryList, GalleryWrapper, ListItem, MainImg } from "./styled"
import ex1 from '../../images/ex1.jpg';
import ex2 from '../../images/ex2.jpg';
import ex3 from '../../images/ex3.jpg';
import ex4 from '../../images/ex4.jpg';

const items = [ex1, ex2, ex3, ex4];

export const AboutGallery = () => {
    const [currentImg, setCurrentImg] = useState(ex1)
    
    const onClick = (imgNumber) => {
        setCurrentImg(imgNumber)
    };


    return (
        <GalleryWrapper>
            <MainImg
                src={currentImg}
            />
            <GalleryList>
          {items.map((item, index) => (
              <ListItem key={index} src={item}
              onClick={() => onClick(item)}
              />
            ))}
            </GalleryList>
        </GalleryWrapper>
    )
}