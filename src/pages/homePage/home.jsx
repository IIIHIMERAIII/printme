
import { Hero } from "../../components/hero/hero";
import { Advantages } from "../../components/advantages/advantages";
import { About } from "../../components/about/about";
import { RecentProjects } from "../../components/recentProjects/recentProjects";
import { Gallery } from "../../components/gallery/gallery";
import { servicesItems } from "../../assets/arrays";

export const HomePage = () => {
    return (
        <>
        <Hero/>
        <Advantages/>
        <Gallery
                title='Наші послуги'
                array={servicesItems}
        />
        <About />
        <RecentProjects/>    
        </>
    )
};