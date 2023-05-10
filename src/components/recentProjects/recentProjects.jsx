import {
    ProjectsWrapper,
    GalleryWrapper,
    ProjectsTitle,
    ProjectsSybTitle,
    GalleryList,
    ListItem,
    ItemImg,
    HoverWrapper,
    HoverTitle,
    HoverBtn,
    HoverBtnSvg,
} from "./styled"
import { Button } from "../button/button";
import sprite from '../../images/sprite.svg';

import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';

const items = [ 
    { img: p1, title: 'Title' },
    { img: p2, title: 'Title' },
    { img: p3, title: 'Title' },
    { img: p4, title: 'Title' },
    { img: p5, title: 'Title' },
    { img: p6, title: 'Title' },
];

export const RecentProjects = () => {



    return (
        <ProjectsWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '120px' }} >
            <ProjectsTitle>Наші роботи</ProjectsTitle>
            <ProjectsSybTitle>Завдяки вам ми завжди в пошуках натхнення</ProjectsSybTitle>
            <GalleryWrapper>
                <GalleryList>
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ItemImg src={item.img} />
                            <HoverWrapper>
                                <HoverTitle>{item.title}</HoverTitle>
                                <HoverBtn>
                                    <HoverBtnSvg>
                                        <use  href={`${sprite}#glass`}/>
                                    </HoverBtnSvg>
                                </HoverBtn>
                            </HoverWrapper>
                        </ListItem>
                    ))}
                </GalleryList>
            </GalleryWrapper>
            <Button
                text='Показати більше'
            />
        </ProjectsWrapper>
    )
};
