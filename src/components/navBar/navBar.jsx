import React, { useEffect } from 'react';
import { NavWrapper, NavList, NavListItem, NavLink } from "./styled"
import { Container } from "../../assets/container"

export const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('nav');
      const stickyOffset = header.offsetTop;
      const currentScrollPos = window.pageYOffset;
      
      if (currentScrollPos > stickyOffset) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
    return (
        <Container>
            <NavWrapper id="nav">
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
};