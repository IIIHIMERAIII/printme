import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    NavWrapper,
    BurgerBtn,
    BurgerSvg,
    MenuWrapper,
    Logo,
    NavList,
    NavListItem,
    NavLink,
    LogoWrapper,
} from "./styled";
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png';

import { navItems } from '../../assets/arrays';

export const ModileNavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const onPress = () => {
        navigate('/');
    };
  
    useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('mobileNav');
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
    
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isMenuOpen]);
    
    const handleToggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    return (
            <NavWrapper id="mobileNav">
                <BurgerBtn aria-label="Open nav menu">
                    <BurgerSvg onClick={handleToggleMenu}>
                         {isMenuOpen ? (
                               <use href={`${sprite}#menu_close`}/>
                             ) : (
                               <use href={`${sprite}#menu`}/>
                        )}
                    </BurgerSvg>
                </BurgerBtn>
                <LogoWrapper>
                  <Logo
                      src={logo}
                      onClick={onPress}
                  />
                  <Logo
                      src={logo2}
                      onClick={onPress}
                  />
                </LogoWrapper>
                <MenuWrapper isOpen={isMenuOpen}>
                    <NavList>
                    {navItems.map((items, index) => (
                            <NavListItem key={index}>
                                <NavLink to={items.redirect}>{items.title}</NavLink>
                            </NavListItem>
                        ))}
                    </NavList>
                </MenuWrapper>
            </NavWrapper>
    )
};