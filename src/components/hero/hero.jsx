import { HeroWrapper, HeroTitle } from "./styled"
import { Button } from "../button/button"
import { Container } from "../../assets/container"


export const Hero = () => {
    return (
            <Container>
                <HeroWrapper>
                    <HeroTitle>Вся Україна <br /> співпрацює з нами  </HeroTitle>
                    <Button
                        text='Дізнатися більше'
                    />
                </HeroWrapper>
            </Container>
    )
}