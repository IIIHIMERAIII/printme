import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { galleryiesItems} from '../../assets/arrays';
import { PhotoGallery } from "../../components/photoGallery/photoGallery";

export const GalleriesPage = () => {
    const { pathname } = useLocation();
        
    let galleryiesImg = [];


    galleryiesItems.forEach(item => {
        galleryiesImg = galleryiesImg.concat(item.imgSet);
    });

    console.log(galleryiesImg)

    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
        <PhotoGallery
            items={galleryiesImg}
        />
        </>
    )
}