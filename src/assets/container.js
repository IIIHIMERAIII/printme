import styled from "styled-components"; 

import { breakpoints } from "./theme";

export const Container = styled.div`
margin-right: auto;
margin-left: auto;
padding-right: 15px;
padding-left: 15px;
@media screen and (min-width: ${breakpoints.md}) {
    max-width: ${breakpoints.md};
}


@media screen and (min-width: ${breakpoints.xl}) {
    max-width: ${breakpoints.xl};
}

@media screen and (min-width: ${breakpoints.xxxl}) {
    max-width: ${breakpoints.xxxl};
}
`;


export const RootContainer = styled.div`
max-width: 600px;
margin-right: auto;
margin-left: auto;

@media screen and (min-width: ${breakpoints.md}) {
    max-width: ${breakpoints.md};
}


@media screen and (min-width: ${breakpoints.xl}) {
    max-width: ${breakpoints.xxxl};
}
`;