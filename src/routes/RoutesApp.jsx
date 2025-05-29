import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
