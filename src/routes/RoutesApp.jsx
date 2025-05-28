import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar/Navbar';

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

      <footer style={{height: '100dvh'}}>
        <p>Footer</p>
      </footer>
    </BrowserRouter>
  );
}
