import styled from "styled-components";
import { breakpoints } from "../../assets/theme";
import flag from '../../images/flag.webp';

export const Background = styled.div`
background-image: url(${flag});
height: 300px;
background-size: cover;
background-position-y: center;
justify-content: center;
align-items: center;
display: flex;

`;

export const Title = styled.p`
font-size: 30px;
color: white;

@media screen and (min-width: ${breakpoints.md}) {
font-size: 60px;
}

`;