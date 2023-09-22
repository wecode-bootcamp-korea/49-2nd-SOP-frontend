import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hair from './pages/Hair/Hair';
import DetailPage from './pages/DetailPage/DetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
