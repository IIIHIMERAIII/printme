import styled from "styled-components";

import { breakpoints } from "../../assets/theme";

export const PageWrapper = styled.section`
padding-top: 120px;
padding-bottom: 120px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h1`
text-align: center;
`;

export const ErrorImg = styled.img`
height: 200px;

@media screen and (min-width: ${breakpoints.sm}) {
    height: 400px;
}
;`

