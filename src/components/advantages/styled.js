import styled from "styled-components";
import { breackPoints } from "../../assets/theme";
import print from '../../images/print.jpg'

export const AdvantagesWrapper = styled.section`
padding-top: 120px;
padding-bottom: 80px;
background-image: url(${print});
background-position: center;
`;

export const AdvantagesTitle = styled.h2`
font-size: 35px;
text-align: end;
margin-bottom: 35px;

@media screen and (min-width: ${breackPoints.md}{
font-size: 50px;
}
`;
