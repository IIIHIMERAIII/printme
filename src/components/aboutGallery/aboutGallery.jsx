import { useState, useEffect} from "react";
import {
  GalleryWrapper,
  MainImg,
  GalleryList,
  ListItem,
  ItemImg,
} from "./styled"
import ex1 from '../../images/test1.jpg';
import ex2 from '../../images/test2.jpg';
import ex3 from '../../images/test3.jpg';
import ex4 from '../../images/test4.jpg';

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