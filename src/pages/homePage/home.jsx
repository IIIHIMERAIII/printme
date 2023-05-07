import {
    Background,
} from "./styled";

import { Hero } from "../../components/hero/hero";
import { Advantages } from "../../components/advantages/advantages";
import { Services } from "../../components/services/services";
import { About } from "../../components/about/about";

export const HomePage = () => {
    return (
        <>
        <Background>
            <Hero/>
        </Background>
        <Advantages/>
        <Services />
        <About/>    
        </>
    )
};