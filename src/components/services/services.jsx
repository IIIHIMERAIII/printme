import {
    ServicesWrapper,
    ServicesTitle,
    FlexContainer,
    CategoryWrapper,
    MainImg,
    MainImgWrapper,
    MaingTitle,
    CategoryList,
    ListItem,
    ItemImg,
    ItemTitle,
} from "./styled";
import { Container } from "../../assets/container";
import testImage from '../../images/test.jpg';

export const Services = () => {
    return (
        <ServicesWrapper>
            <Container>
                <ServicesTitle>Наші послуги</ServicesTitle>
            <FlexContainer>
                <MainImgWrapper>
                    <MainImg src={testImage} />
                    <MaingTitle>Ми працюємо для вас</MaingTitle>
                </MainImgWrapper>
                <CategoryWrapper>
                    <CategoryList>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Інтер'єрна реклама</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Брендування авто</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Виготовлення печаток та штампів</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Виставкові стенди</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Герби та фірмова символіка</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Зовнішня реклама</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Оформлення композитом</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Створення логотипів</ItemTitle>
                        </ListItem>
                        <ListItem>
                            <ItemImg
                                src={testImage}
                            />
                            <ItemTitle>Сувенірна продукція та поліграфія</ItemTitle>
                        </ListItem>
                    </CategoryList>
                </CategoryWrapper>
            </FlexContainer>
            </Container>
        </ServicesWrapper>
    )
}