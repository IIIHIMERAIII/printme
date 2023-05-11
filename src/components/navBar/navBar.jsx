import React, { useEffect } from 'react';
import { NavWrapper, NavList, NavListItem, NavLink } from "./styled"
import { Container } from "../../assets/container"

const navItems = [
  { redirect: '/', title: 'Головна' },
  { redirect: '/products', title: 'Продукція' },
  { redirect: '/gallery', title: 'Фотогалерея' },
  { redirect: '/about', title: 'Контакти' },
  
];

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
        <Container style={{height: '65px'}}>
            <NavWrapper id="nav">
                <NavList>
                  {navItems.map((item, index) => (
                    <NavListItem key={index}>
                          <NavLink to={item.redirect}>{item.title}</NavLink>
                    </NavListItem>
                    ))}
                </NavList>
            </NavWrapper>
        </Container>
    )
};