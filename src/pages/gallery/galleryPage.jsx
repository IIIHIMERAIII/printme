import { PhotoGallery } from "../../components/photoGallery/photoGallery"

import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';

 const items = [ 
    { original: p1, thumbnail:p1, title: 'Title' , id:1 },
    { original: p2, thumbnail:p2 , title: 'Title' , id:2 },
    { original: p3, thumbnail:p3 , title: 'Title' , id:3 },
    { original: p4, thumbnail:p4 , title: 'Title' , id:4 },
    { original: p5, thumbnail:p5 , title: 'Title' , id:5 },
    { original: p6, thumbnail:p6 , title: 'Title' , id:6 },
    { original: p1, thumbnail:p1 , title: 'Title' , id:7 },
    { original: p2, thumbnail:p2 , title: 'Title' , id:8 },
    { original: p3, thumbnail:p3 , title: 'Title' , id:9 },
    { original: p4, thumbnail:p4 , title: 'Title' , id:10 },
    { original: p5, thumbnail:p5 , title: 'Title' , id: 11},
    { original: p6, thumbnail:p6 , title: 'Title' , id:12 },
    { original: p1, thumbnail:p1 , title: 'Title' , id:13 },
    { original: p2, thumbnail:p2 , title: 'Title' , id:14 },
    { original: p3, thumbnail:p3, title: 'Title' , id:15 },
    { original: p4, thumbnail:p4, title: 'Title' , id:16 },
    { original: p5, thumbnail:p5, title: 'Title' , id: 17},
    { original: p6, thumbnail:p6, title: 'Title' , id: 18},
    { original: p1, thumbnail:p1, title: 'Title' , id: 19},
    { original: p2, thumbnail:p2 , title: 'Title' , id: 20},
    { original: p3, thumbnail:p3 , title: 'Title' , id: 21},
    { original: p4, thumbnail:p4, title: 'Title' , id: 22},
    { original: p5, thumbnail:p5 , title: 'Title' , id: 23},
    { original: p6, thumbnail:p6 , title: 'Title' , id: 24},
];




export const GalleryPage = () => {
    return (
        <>
            <PhotoGallery
                items={items}
            />
        </>
    )
}