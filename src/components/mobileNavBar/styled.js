import styled from "styled-components";
import { colors, breackPoints} from "../../assets/theme";

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
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '65px' : '-100%')};
  left: 0;
  width: 100%;
  height: 70vh;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
  justify-content: center;
  display: flex;
  background: ${colors.primaryWhite};
`;
