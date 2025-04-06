import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderCompletePage from './pages/OrderCompletePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order/complete" element={<OrderCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
