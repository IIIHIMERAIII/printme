import {
    HeaderContainer,
    HeaderWrapper,
    HoursWrapper,
    Text,
    TriColorLine,
    ContactsWrapper,
} from "./styled"
import { Container } from "../../assets/container"
import { Logo } from "../../components/logo/logo"
import { Contacts } from "../../components/contacts/contacts"
import { NavBar } from "../../components/navBar/navBar"
import { ModileNavBar } from "../../components/mobileNavBar/mobileNavBar"

export const Header = () => {
    return (
    <HeaderContainer>
        <HeaderWrapper>
            <HoursWrapper>
                <Container>
                    <Text>Ми працюємо: Понеділок - Пʼятниця з 9:00 до 17:00</Text>
                </Container>
            </HoursWrapper>
            <TriColorLine />
            <Container>
                <ContactsWrapper>
                    <Logo />
                    <Contacts />
                </ContactsWrapper>
            </Container>
            <NavBar />
        </HeaderWrapper>
        <ModileNavBar/>
    </HeaderContainer>
    )
};