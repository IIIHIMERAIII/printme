import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import { Gallery } from "../../components/gallery/gallery"
import { servicesItems } from "../../assets/arrays"


export const ProductsPage = () => {
    const { pathname } = useLocation();
        
    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
        <Gallery
            title='Наші послуги'
            array={servicesItems}
        />
        </>
    )
}