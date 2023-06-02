import { Container } from "../../assets/container"
import { LouderWrapper, Spiner } from "./styled"

export const Loader = () => {
    return (
        <LouderWrapper>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Spiner/>
            </Container>
        </LouderWrapper>
    )
}