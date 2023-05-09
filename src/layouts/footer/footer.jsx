import {
    FooterWrapper,
    VisitUsWrapper,
    VisitUsTitle,
    InfoList,
    InfoListItem,
    InfoText,
    NavWrapper,
    ListsWrapper,
    NavTitle,
    NavList,
    NavListItem,
    NavLink,
    ContactsTitle,
    ContactsWrapper,
    ContactsList,
    ContactsListItem,
    ContactsLink,
    SubFooter,
} from "./styled"
import {Container} from '../../assets/container'
import { TriColorLine } from "../header/styled"


const navItems = ['Головна', 'Продукція', 'Клієнти', 'Фотогалерея', 'Про нас', 'Контакти'];
const productsItems = [
    `Інтер'єрна реклама`,
    'Брендування авто',
    'Виготовлення печаток',
    'Виставкові стенди',
    'Герби та фірмова символіка',
    'Зовнішня реклама',
    'Оформлення композитом',
    'Вигтовлення технічної документації',
    'Сувенірна продукція та поліграфія',
];
const contactsItems = ['+380504049636', '+380684049636', 'exgrafika17@gmail.com'];

export const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <TriColorLine />
                <Container style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '60px', paddingTop: '60px'}}>
                    <VisitUsWrapper>
                        <VisitUsTitle>Завітайте до нас</VisitUsTitle>
                        <InfoList>
                            <InfoListItem>
                                <InfoText>м. Полтава <br /> вул. Пушкіна, 53, оф. 11 </InfoText>
                            </InfoListItem>
                            <InfoListItem>
                                <InfoText>Будні дні: 8:00 - 19:00 <br /> Вихідні: 10:00 - 15:00</InfoText>
                            </InfoListItem>
                        </InfoList>
                    </VisitUsWrapper>
                    <NavWrapper>
                        <NavTitle>Навігація</NavTitle>
                        <ListsWrapper>
                            <NavList>
                             {navItems.map((item, index) => (
                               <NavListItem key={index}>
                                     <NavLink>{item}</NavLink>
                               </NavListItem>
                               ))}
                            </NavList>
                            <NavList>
                             {productsItems.map((item, index) => (
                               <NavListItem key={index}>
                                     <NavLink>{item}</NavLink>
                               </NavListItem>
                               ))}
                            </NavList>
                        </ListsWrapper>
                    </NavWrapper>
                    <ContactsWrapper>
                        <ContactsTitle>Контакти</ContactsTitle>
                        <ContactsList>
                        {contactsItems.map((item, index) => (
                            <ContactsListItem key={index}>
                                  <ContactsLink>{item}</ContactsLink>
                            </ContactsListItem>
                        ))}
                        </ContactsList>
                    </ContactsWrapper>
                </Container>
                <SubFooter>

                </SubFooter>
            </FooterWrapper>
        </>
    )
};
