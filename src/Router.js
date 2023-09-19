import Main from './pages/Main/Main';
import Hair from './pages/Hair/Hair';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hair" element={<Hair />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
