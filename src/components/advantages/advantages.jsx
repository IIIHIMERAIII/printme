import { AdvantagesWrapper, ContentWrapper, AdvantagesTitle, AdvantagesSubTitle } from "./styled";
import { Container } from "../../assets/container";
import { text } from '../../assets/text';

export const Advantages = () => {
    return (
        <AdvantagesWrapper>
            <Container>
                <ContentWrapper>
                    <AdvantagesTitle>Чому обирають саме нас</AdvantagesTitle>
                    <AdvantagesSubTitle>{text.advantages}</AdvantagesSubTitle>
                </ContentWrapper>
            </Container>
        </AdvantagesWrapper>
    )
};