import {
    Background,
    HeroWrapper,
    HeroTitle,
    AdvantagesWrapper,
    AdvantagesTitle,
    ServicesWrapper,
} from "./styledHome";
import { Button } from "../../components/button/button";
import { Container } from "../../assets/styled";
import { AdvantagesScrollBox } from "../../components/advantagesScrollBox/advantagesScrollBox";
import { Services } from "../../components/services/services";


export const HomePage = () => {
    return (
        <>
        <Background>
            <Container>
                <HeroWrapper>
                    <HeroTitle>Вся Україна <br /> співпрацює з нами  </HeroTitle>
                    <Button
                        Text='Дізнатися більше'
                    />
                </HeroWrapper>
            </Container>
        </Background>
        <AdvantagesWrapper>
            <Container>
                    <AdvantagesTitle>Чому обирають саме нас</AdvantagesTitle>
                    <AdvantagesScrollBox/>
            </Container>
        </AdvantagesWrapper>
        <ServicesWrapper>
            <Services/>
        </ServicesWrapper>    
        </>
    )
};