import {
    FooterWrapper,
    ContactsList,
    ContactsListItem,
    ContactsLink,
    SubFooter,
    SocialList,
    SocialSvg,
    SocialWrapper,
    RightsWrapper,
    Logo,
    RightsTitle,
    SectionWrapper,
    SectionList,
    SectionTitle,
    SectionListItem,
    SectionText,
    SectionLink,
} from "./styled"
import {Container} from '../../assets/container'
import { TriColorLine } from "../header/styled"
import { colors } from "../../assets/theme";
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.png'

const navItems = ['Головна', 'Продукція', 'Клієнти', 'Фотогалерея', 'Про нас', 'Контакти'];
const servicesItems = [
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
                <Container style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '60px', paddingTop: '60px', alignItems: 'center'}}>
                    <SectionWrapper>
                        <SectionList>
                            <SectionTitle style={{borderBottom: `2px solid ${colors.blue}`}}>Завітайте до нас</SectionTitle>
                            <SectionListItem>
                                <SectionText>м. Полтава <br /> вул. Пушкіна, 53, оф. 11 </SectionText>
                            </SectionListItem>
                            <SectionListItem style={{marginTop: '50px'}}>
                                <SectionText>Будні дні: 8:00 - 19:00 <br /> Вихідні: 10:00 - 15:00</SectionText>
                            </SectionListItem>
                        </SectionList>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionList>
                            <SectionTitle style={{borderBottom: `2px solid ${colors.pink}`}}>Послуги</SectionTitle>
                            {servicesItems.map((item, index) => (
                               <SectionListItem key={index}>
                                     <SectionLink>{item}</SectionLink>
                               </SectionListItem>
                               ))}
                        </SectionList>
                    </SectionWrapper>
                    <SectionWrapper>
                            <SectionList>
                            <SectionTitle style={{borderBottom: `2px solid ${colors.orange}`}}>Навігація</SectionTitle>
                             {navItems.map((item, index) => (
                               <SectionListItem key={index}>
                                     <SectionLink>{item}</SectionLink>
                               </SectionListItem>
                               ))}
                            </SectionList>
                    </SectionWrapper>
                </Container>
                <SubFooter>
                    <Container>
                        <SocialWrapper>
                            <SocialList>
                                <SocialSvg>
                                    <use  href={`${sprite}#facebook`}/>
                                </SocialSvg>
                                <SocialSvg>
                                    <use  href={`${sprite}#instagram`}/>
                                </SocialSvg>
                            </SocialList>
                            <RightsWrapper>
                                <Logo
                                    src={logo}
                                />
                                <RightsTitle>Copyright all rights reserved Exgrafika®</RightsTitle>
                            </RightsWrapper> 
                            <ContactsList>
                        {contactsItems.map((item, index) => (
                            <ContactsListItem key={index}>
                                  <ContactsLink>{item}</ContactsLink>
                            </ContactsListItem>
                        ))}
                        </ContactsList>
                        </SocialWrapper>
                    </Container>
                </SubFooter>
            </FooterWrapper>
        </>
    )
};
