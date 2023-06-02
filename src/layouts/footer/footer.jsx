import {
    FooterWrapper,
    FooterContainer,
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
import { Container } from '../../assets/container';
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.png'

import { navItems } from "../../assets/arrays";
import { servicesItems } from "../../assets/arrays";



const contactsItems = [
    { target: '+380504049636', href: 'tel:+380504049636' },
    { target: '+380684049636', href: 'tel:+380684049636' },
    { target: 'exgrafika17@gmail.com', href: 'mailto:exgrafika17@gmail.com' }
];

export const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <FooterContainer >
                    <SectionWrapper>
                        <SectionList>
                            <SectionTitle>Завітайте до нас</SectionTitle>
                            <SectionListItem>
                                <SectionText>м. Полтава <br /> вул. Пушкіна, 53, оф. 11 </SectionText>
                            </SectionListItem>
                            <SectionListItem style={{marginTop: '50px'}}>
                                <SectionText>Будні дні: 9:00 - 17:00 <br /> Вихідні: Cуббота, Неділя</SectionText>
                            </SectionListItem>
                        </SectionList>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionList>
                            <SectionTitle>Послуги</SectionTitle>
                            {servicesItems.map((item, index) => (
                               <SectionListItem key={index}>
                                     <SectionLink to={`/product/${item.id}`}>{item.title}</SectionLink>
                               </SectionListItem>
                               ))}
                        </SectionList>
                    </SectionWrapper>
                    <SectionWrapper>
                            <SectionList>
                            <SectionTitle>Навігація</SectionTitle>
                             {navItems.map((item, index) => (
                               <SectionListItem key={index}>
                                     <SectionLink to={item.redirect}>{item.title}</SectionLink>
                               </SectionListItem>
                               ))}
                            </SectionList>
                    </SectionWrapper>
                </FooterContainer>
                <SubFooter>
                    <Container>
                        <SocialWrapper>
                            <SocialList>
                                <a href='https://www.facebook.com/exgrafika/' target='_blank' rel="noreferrer">
                                    <SocialSvg>
                                        <use  href={`${sprite}#facebook`}/>
                                    </SocialSvg>
                                </a>
                                <a href="https://instagram.com/exgrafika_m?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer">
                                    <SocialSvg>
                                        <use  href={`${sprite}#instagram`}/>
                                    </SocialSvg>
                                </a>
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
                                  <ContactsLink href={item.href}>{item.target}</ContactsLink>
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
