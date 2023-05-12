import { BrowserRouter, Route, Routes  } from 'react-router-dom';


import { HomePage } from './pages/homePage/home';
import { ProductsPage } from './pages/productsPage/productsPage';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';
import { AboutPage } from './pages/aboutPage/aboutPage';
import { GalleryPage } from './pages/gallery/galleryPage';
import { ProductPage } from './pages/productPage/productPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/product/:id' element={<ProductPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
