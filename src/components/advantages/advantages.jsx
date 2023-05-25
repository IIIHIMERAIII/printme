import {
    AdvantagesWrapper,
    ContentWrapper,
    Img,
    AdvantagesTitle,
    AdvantagesSubTitle,
    TextWrapper
} from "./styled";
import { Container } from "../../assets/container";
import { text } from '../../assets/text';
import print from '../../images/print.jpg';

export const Advantages = () => {
    return (
        <AdvantagesWrapper>
            <Container>
                <ContentWrapper>
                        <Img src={print}/>
                    <TextWrapper>
                        <AdvantagesTitle>Чому обирають саме нас</AdvantagesTitle>
                        <AdvantagesSubTitle>{text.advantages}</AdvantagesSubTitle>
                    </TextWrapper>
                </ContentWrapper>
            </Container>
        </AdvantagesWrapper>
    )
};