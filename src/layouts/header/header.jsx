import {
    HeaderContainer,
    HeaderWrapper,
    HoursWrapper,
    Text,
    TriColorLine,
    ContactsWrapper,
} from "./styled"
import { Container } from "../../assets/container";
import { Logo } from "../../components/logo/logo";
import { Contacts } from "../../components/contacts/contacts";
import { NavBar } from "../../components/navBar/navBar";
import { ModileNavBar } from "../../components/mobileNavBar/mobileNavBar";
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.webp';

export const Header = () => {
    return (
    <HeaderContainer>
        <HeaderWrapper>
            <HoursWrapper>
                <Container>
                    <Text>Ми працюємо: Понеділок - Пʼятниця з 8:00 до 17:00</Text>
                </Container>
            </HoursWrapper>
            <TriColorLine />
            <Container>
                <ContactsWrapper>
                        <Logo
                            src={logo}
                        />
                        <Contacts />
                        <Logo
                            src={logo2}
                        />
                </ContactsWrapper>
            </Container>
            <NavBar />
        </HeaderWrapper>
        <ModileNavBar/>
    </HeaderContainer>
    )
};