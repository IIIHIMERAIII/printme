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
import { TriColorLine } from "../header/styled";
import { Container } from '../../assets/container';
import { colors } from "../../assets/theme";
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.png'

import { navItems } from "../../assets/arrays";
import { servicesItems } from "../../assets/arrays";



const contactsItems = ['+380504049636', '+380684049636', 'exgrafika17@gmail.com'];

export const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <TriColorLine style={{margin: '0'}}/>
                <FooterContainer >
                    <SectionWrapper>
                        <SectionList>
                            <SectionTitle style={{borderBottom: `2px solid ${colors.blue}`}}>Завітайте до нас</SectionTitle>
                            <SectionListItem>
                                <SectionText>м. Полтава <br /> вул. Пушкіна, 53, оф. 11 </SectionText>
                            </SectionListItem>
                            <SectionListItem style={{marginTop: '50px'}}>
                                <SectionText>Будні дні: 8:00 - 17:00 <br /> Вихідні: Cуббота, Неділя</SectionText>
                            </SectionListItem>
                        </SectionList>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionList>
                            <SectionTitle style={{borderBottom: `2px solid ${colors.pink}`}}>Послуги</SectionTitle>
                            {servicesItems.map((item, index) => (
                               <SectionListItem key={index}>
                                     <SectionLink to={`/product/${item.id}`}>{item.title}</SectionLink>
                               </SectionListItem>
                               ))}
                        </SectionList>
                    </SectionWrapper>
                    <SectionWrapper>
                            <SectionList>
                            <SectionTitle style={{borderBottom: `2px solid ${colors.orange}`}}>Навігація</SectionTitle>
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
