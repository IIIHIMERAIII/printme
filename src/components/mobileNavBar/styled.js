import styled from "styled-components";
import { colors, breackPoints } from "../../assets/theme";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
z-index: 3;
padding-right: 20px;
padding-left: 20px;
position: relative;
align-items: center;
display: flex;
z-index: 2;
height: 65px;
background: ${colors.primaryGray};
justify-content: space-between;
width: 100%;
position: absolute;

&.sticky {
  position: fixed;
  top: 0;
  border-radius: 0;
}

@media screen and (min-width: ${breackPoints.sm}) {
    max-width: 600px;
}

@media screen and (min-width: ${breackPoints.md}) {
    display: none;
}
`; 

export const Logo = styled.img`
height: 50px;
cursor: pointer;
`;

export const BurgerBtn = styled.button`
padding: 8px;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: transparent;
cursor: pointer;
border: none;
fill:white;
transition: all 0.7s ease-in-out;

&:hover, &:focus {
    transform: scale(1.1);
    fill: ${colors.orange};
}
`;

export const BurgerSvg = styled.svg`
width: 100%;
height: 100%;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '65px' : '-100%')};
  left: 0;
  left: 0px;
  width: 100%;
  height: 40vh;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
  justify-content: center;
  display: flex;
  background: ${colors.primaryWhite};
  border-bottom: 2px solid ${colors.orange};
`;

export const NavList = styled.ul`
width: 100%;
`;

export const NavListItem = styled.li`
padding: 15px;
`;

export const NavLink = styled(Link)`
width: 100%;
display: inherit;
color: ${colors.primaryBlack};
font-size: 20px;
padding: 17px;
box-shadow: inset 0 0 0 0 ${colors.orange};
padding: 8px 0.5rem;;
margin: 0 -0.5rem;
transition: all 0.8s ease-in-out, box-shadow .3s ease-in-out;
border-radius: 8px;
font-size: 20px;
font-weight: 600;

&:hover,
&.active {
  color: #fff;
  box-shadow: inset 700px 0 0 0 ${colors.orange};
  transition-duration: 0.8s;
}
`;