import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hair from './pages/Hair/Hair';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Basket from './pages/Basket/Basket';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PayMent from './pages/PayMent/PayMent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecieverCheck from './pages/RecieverCheck/RecieverCheck';
import PayMentCheck from './pages/PayMentCheck/PayMentCheck';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/hair/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/payMent" element={<PayMent />} />
        <Route path="/recieverCheck" element={<RecieverCheck />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/payMentCheck" element={<PayMentCheck />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
