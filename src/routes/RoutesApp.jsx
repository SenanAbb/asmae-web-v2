import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage';
import CabinetPage from '../pages/CabinetPage/CabinetPage';
import { Footer } from '../components/Footer/Footer';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
