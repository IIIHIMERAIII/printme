import styled from "styled-components";
import { breakpoints } from "../../assets/theme";

export const DocPageWrapper = styled.main`
padding-top: 120px;
padding-bottom: 120px;
`;

export const PageTitle = styled.h1`
font-size: 35px;
text-align: center;
margin-bottom: 35px;

@media screen and (min-width: ${breakpoints.md}){
font-size: 50px;
}
`;