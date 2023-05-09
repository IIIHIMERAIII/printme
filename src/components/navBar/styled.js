import styled from "styled-components";
import { colors} from "../../assets/theme";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
padding-right: 20px;
padding-left: 20px;
position: relative;
align-items: center;
display: flex;
top: 33px;
z-index: 2;
height: 65px;
background: ${colors.primaryGray};
border-radius: 30px;
justify-content: center;

&.sticky {
  position: fixed;
  top: 0;
  width: 100vw;
  left: 0;
  border-radius: 0;

}
`; 

export const NavList = styled.ul`
display: flex;
width: 100%;
justify-content: space-around;
`;

export const NavListItem = styled.li`
color: ${colors.primaryWhite};
`;

export const NavLink = styled(Link)`
padding: 17px;
color: ${colors.primaryWhite};
transition: color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover,
  &:focus,
  &:active {
    color: ${colors.orange};
    border-bottom: 5px solid ${colors.orange}; 
    transition: color 0.3s ease, border-bottom-color 0.3s ease;
  }
`;