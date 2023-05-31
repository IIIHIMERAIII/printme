import styled from "styled-components";
import { colors, breakpoints} from "../../assets/theme";
import { NavLink as Link } from "react-router-dom";

export const NavWrapper = styled.nav`
z-index: 10;
padding-right: 20px;
padding-left: 20px;
position: relative;
align-items: center;
display: flex;
top: 33px;
height: 65px;
background: ${colors.primaryGray};
border-radius: 30px;
justify-content: center;
transition: top 0.5s ease-in-out, max-height 0.5s ease-in-out;


&.sticky {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 768px;
  border-radius: 0;
  max-height: 65px;
}

@media screen and (min-width: ${breakpoints.xl}) {
    &.sticky {
      width: 100vw;
}
  
@media screen and (min-width: ${breakpoints.xxl}) {
  &.sticky {
    width: 1600px;
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
  box-shadow: inset 200px 0 0 0 ${colors.orange};
  transition-duration: 0.8s;
}

@media screen and (min-width: ${breakpoints.xl}) {
  font-size: 28px;
}
`;