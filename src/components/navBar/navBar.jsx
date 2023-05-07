import { NavWrapper, NavList, NavListItem, NavLink} from "./styled"
import { Container } from "../../assets/container"

export const NavBar = () => {
    return (
        <Container>
            <NavWrapper>
                <NavList>
                    <NavListItem><NavLink to='/'>Головна</NavLink></NavListItem>
                    <NavListItem><NavLink to='/products'>Продукція</NavLink></NavListItem>
                    <NavListItem><NavLink>Клієнти</NavLink></NavListItem>
                    <NavListItem><NavLink>Фотогалерея</NavLink></NavListItem>
                    <NavListItem><NavLink>Про нас</NavLink></NavListItem>
                    <NavListItem><NavLink>Контакти</NavLink></NavListItem>
                </NavList>
            </NavWrapper>
        </Container>
    )
}