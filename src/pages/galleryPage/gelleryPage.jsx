import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

import { PhotoGallery } from "../../components/photoGallery/photoGallery"

import { galleryiesItems } from "../../assets/arrays";

export const GalleryPage = () => {
    const { id } = useParams();
    const gallery = galleryiesItems.find(item => item.id === id);
    const { pathname } = useLocation();
        
    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <PhotoGallery
                items={gallery.imgSet}
            />
        </>
    )
}