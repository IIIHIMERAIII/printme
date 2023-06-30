import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    AboutWrapper,
    PageTitle,
    PageDescr,
    ContactsWrapper,
    ContactsList,
    ContactsListItem,
    ContactsTitle,
    ContactSubTitle,
    ContactsIcon,
    TitleWrapper,
    PageSubTitle
} from "./styledAbout";
import { Container } from '../../assets/container';
import { text } from "../../assets/text";
import { Map } from "../../components/map/map";

import { links } from "../../assets/roots";

import sprite from '../../images/sprite.svg';




export const AboutPage = () => {
    const { pathname } = useLocation();
        
    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);
    
    
    return (
        <AboutWrapper>
            <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <PageTitle>Рекламно Виробнича Компанія <br /> ТОВ “Ексграфіка-М”</PageTitle>
                <PageDescr>{text.about}</PageDescr>
                <ContactsWrapper>
                    <ContactsList>
                        <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#phone`} />
                                </ContactsIcon>
                                <ContactsTitle>Телефон</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle href='tel:+380504049636'>{`+38 (050) 404 96 36`}</ContactSubTitle>
                            <ContactSubTitle href= 'tel:+380684049636'> {`+38 (068) 404 96 36`}</ContactSubTitle>
                        </ContactsListItem>
                        <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#location`} />
                                </ContactsIcon>
                                <ContactsTitle>Адреса</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle
                                href={links.googleMaps}
                                target='_blank'
                                rel="noreferrer"
                                style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
                                <p>м. Полтава </p> <p>вул. Пушкіна, 53, оф. 11 </p>
                            </ContactSubTitle>
                        </ContactsListItem>
                        <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#leter`} />
                                </ContactsIcon>
                                <ContactsTitle>Пошта</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle href='mailto:exgrafika17@gmail.com'>exgrafika17@gmail.com</ContactSubTitle>
                        </ContactsListItem>
                          <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#viber`} />
                                </ContactsIcon>
                                <ContactsTitle>Viber</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle href="viber://add?number=+380684049636">{`+38 (068) 404 96 36`}</ContactSubTitle>
                        </ContactsListItem>
                    </ContactsList>
                    <Map />
                    <PageSubTitle>До зустрічі в нашому офісі !</PageSubTitle>
                </ContactsWrapper>
            </Container>
        </AboutWrapper>
    )
};