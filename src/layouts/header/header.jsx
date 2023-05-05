import {
    HeaderWrapper,
    HoursWrapper,
    Text,
    TriColorLine,
    ContactsWrapper,
} from "./styled"
import { Container } from "../../assets/styled"
import { Logo } from "../../components/logo/logo"
import { Contacts } from "../../components/contacts/contacts"
import { NavBar } from "../../components/navBar/navBar"

export const Header = () => {
    return (
        <HeaderWrapper>
            <HoursWrapper>
                <Text>Ми працюємо: Понеділок - Пʼятниця з 8:00 до 19:00</Text>
            </HoursWrapper>
            <TriColorLine />
            <Container>
                <ContactsWrapper>
                    <Logo />
                    <Contacts/>
                </ContactsWrapper>
            </Container>
            <NavBar/>
        </HeaderWrapper>
    )
}