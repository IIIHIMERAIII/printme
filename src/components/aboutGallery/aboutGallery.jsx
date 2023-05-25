import { useState, useEffect} from "react";
import {
  GalleryWrapper,
  MainImg,
  GalleryList,
  ListItem,
  ItemImg,
} from "./styled"
import ex1 from '../../images/g24.webp';
import ex2 from '../../images/g29.webp';
import ex3 from '../../images/g3.webp';
import ex4 from '../../images/g26.webp';

const items = [ex1, ex2, ex3, ex4];
const transitionDuration = 200;

export const AboutGallery = () => {
    const [currentImg, setCurrentImg] = useState(ex1);
    const [selectedItem, setSelectedItem] = useState(ex1);
    const [isTransitioning, setIsTransitioning] = useState(false);

  const onClick = (imgNumber) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImg(imgNumber);
        setIsTransitioning(false);
      }, transitionDuration);
      }
    setSelectedItem(imgNumber);
  };
    
    useEffect(() => {
    setIsTransitioning(false);
  }, [currentImg]);

    return (
        <GalleryWrapper>
            <MainImg
                src={currentImg}
                transitionDuration={transitionDuration}
                isTransitioning={isTransitioning}
            />
            <GalleryList>
          {items.map((item, index) => (
            <ListItem key={index}>
                <ItemImg  src={item}
                  onClick={() => onClick(item)}
                  isSelected={selectedItem === item}
              />
            </ListItem>
            ))}
            </GalleryList>
        </GalleryWrapper>
    )
}