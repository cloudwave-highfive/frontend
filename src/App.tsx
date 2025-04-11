import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderCompletePage from './pages/OrderCompletePage';
import ProductDetailPage from './pages/ProductDetailPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order/complete" element={<OrderCompletePage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path='/order' element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
