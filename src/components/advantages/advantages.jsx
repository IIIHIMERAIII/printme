import { AdvantagesWrapper, AdvantagesTitle } from "./styled"
import { Container } from "../../assets/container"
import { ScrollBox } from "../scrollBox/scrollBox"

export const Advantages = () => {
    return (
        <AdvantagesWrapper>
            <Container>
                <AdvantagesTitle>Чому обирають саме нас</AdvantagesTitle>
                <ScrollBox />
            </Container>
        </AdvantagesWrapper>
    )
};