
import { Hero } from "../../components/hero/hero";
import { Advantages } from "../../components/advantages/advantages";
import { Services } from "../../components/services/services";
import { About } from "../../components/about/about";
import { RecentProjects } from "../../components/recentProjects/recentProjects";

export const HomePage = () => {
    return (
        <>
        <Hero/>
        <Advantages/>
        <Services />
        <About />
        <RecentProjects/>    
        </>
    )
};