import {
    ServicesWrapper,
    ServicesTitle,
    FlexContainer,
    CategoryWrapper,
    CategoryList,
    ListItem,
    ItemImg,
    ItemTitle,
} from "./styled";
import { Container } from "../../assets/container";
import s1 from '../../images/s1.jpg';
import s2 from '../../images/s2.jpg';
import s3 from '../../images/s3.jpg';
import s4 from '../../images/s4.jpg';
import s5 from '../../images/s5.jpg';

const servicesItems = [
    { img: s2, title: 'Зовнішня реклама' },
    { img: s3, title: 'Брендування авто' },
    { img: s4, title: 'Виставкові стенди' },
    { img: s5, title: `Інтер'єрна реклама` },
    { img: s2, title: `Хтось десь` },
    { img: s4, title: `Десь хтось` },
    { img: s1, title: `Десь хтось` },
    { img: s3, title: `Десь хтось` },
];

export const Services = () => {  
    return (
        <ServicesWrapper>
            <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <ServicesTitle>Наші послуги</ServicesTitle>
                <FlexContainer>
                    <CategoryWrapper>
                        <CategoryList>
                            {servicesItems.map((item, index) => (
                                <ListItem key={index}>
                                    <ItemImg
                                        src={item.img}
                                    />
                                    <ItemTitle>{item.title}</ItemTitle>
                                </ListItem>
                            ))}
                        </CategoryList>
                    </CategoryWrapper>
                </FlexContainer>
            </Container>
        </ServicesWrapper>
    )
};