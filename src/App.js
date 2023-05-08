import { BrowserRouter, Route, Routes  } from 'react-router-dom';


import { HomePage } from './pages/homePage/home';
import { ProductsPage } from './pages/productsPage/productsPage';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;