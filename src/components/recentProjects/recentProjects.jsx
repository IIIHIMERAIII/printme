import {
    ProjectsWrapper,
    GalleryWrapper,
    ProjectsTitle,
    ProjectsSybTitle,
    GalleryList,
    ListItem,
    ItemImg
} from "./styled"
import { Button } from "../button/button";

import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';

const items = [p1, p2, p3, p4, p5, p6];

export const RecentProjects = () => {



    return (
        <ProjectsWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '120px' }} >
            <ProjectsTitle>Наші роботи</ProjectsTitle>
            <ProjectsSybTitle>Завдяки вам ми завжди в пошуках натхнення</ProjectsSybTitle>
            <GalleryWrapper>
                <GalleryList>
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ItemImg src={item} />
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
