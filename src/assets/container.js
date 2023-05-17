import styled from "styled-components"; 

import { breackPoints } from "./theme";

export const Container = styled.div`
margin-right: auto;
margin-left: auto;
padding-right: 15px;
padding-left: 15px;
@media screen and (min-width: ${breackPoints.md}) {
    max-width: ${breackPoints.md};
}


@media screen and (min-width: ${breackPoints.xl}) {
    max-width: ${breackPoints.xl};
}

@media screen and (min-width: ${breackPoints.xxxl}) {
    max-width: ${breackPoints.xxxl};
}
`;


export const RootContainer = styled.div`
max-width: 600px;
margin-right: auto;
margin-left: auto;

@media screen and (min-width: ${breackPoints.md}) {
    max-width: ${breackPoints.md};
}


@media screen and (min-width: ${breackPoints.xl}) {
    max-width: ${breackPoints.xxxl};
}
`;