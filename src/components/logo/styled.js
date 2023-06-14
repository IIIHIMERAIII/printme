import styled from "styled-components";
import { breakpoints } from "../../assets/theme";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
display: flex;
align-items: center;
`;

export const LogoIcon = styled.img`
width: 220px;
height: 150px;
cursor: pointer;

@media screen and (min-width: ${breakpoints.md}) {
    width: 180px;
    height: 120px;
}

@media screen and (min-width: ${breakpoints.xl}) {
    width: 220px;
    height: 150px;
}
`;

