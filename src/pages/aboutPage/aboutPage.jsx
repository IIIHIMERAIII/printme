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

import sprite from '../../images/sprite.svg';




export const AboutPage = () => {
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
                            <ContactSubTitle>{`+38 (050) 404 96 36`}</ContactSubTitle>
                            <ContactSubTitle>{`+38 (068) 404 96 36`}</ContactSubTitle>
                        </ContactsListItem>
                        <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#location`} />
                                </ContactsIcon>
                                <ContactsTitle>Адреса</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle>м. Полтава</ContactSubTitle>
                            <ContactSubTitle>вул. Пушкіна, 53, оф. 11</ContactSubTitle>
                        </ContactsListItem>
                        <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#leter`} />
                                </ContactsIcon>
                                <ContactsTitle>Пошта</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle>exgrafika17@gmail.com</ContactSubTitle>
                        </ContactsListItem>
                          <ContactsListItem>
                            <TitleWrapper>
                                <ContactsIcon>
                                    <use href={`${sprite}#viber`} />
                                </ContactsIcon>
                                <ContactsTitle>Viber</ContactsTitle>
                            </TitleWrapper>
                            <ContactSubTitle>{`+38 (068) 404 96 36`}</ContactSubTitle>
                        </ContactsListItem>
                    </ContactsList>
                    <Map />
                    <PageSubTitle>До зустрічі в нашому офісі</PageSubTitle>
                </ContactsWrapper>
            </Container>
        </AboutWrapper>
    )
};