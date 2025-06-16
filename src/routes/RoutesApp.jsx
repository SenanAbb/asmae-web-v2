import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import CabinetPage from '../pages/CabinetPage/CabinetPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import DeveloppementStrategie from '../pages/DeveloppementStrategie/DeveloppementStrategie';
import AcquisitionsCessions from '../pages/AcquisitionsCessions/AcquisitionsCessions';
import DroitCommercial from '../pages/DroitCommercial/DroitCommercial';
import DroitFiscalPatrimonial from '../pages/DroitFiscalPatrimonial/DroitFiscalPatrimonial';
import DroitEtrangers from '../pages/DroitEtrangers/DroitEtrangers';
import FonctionPublique from '../pages/FonctionPublique/FonctionPublique';
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
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/developpement-strategie"
            element={<DeveloppementStrategie />}
          />
          <Route
            path="/services/acquisitions-cessions"
            element={<AcquisitionsCessions />}
          />
          <Route
            path="/services/droit-commercial"
            element={<DroitCommercial />}
          />
          <Route
            path="/services/droit-fiscal-patrimonial"
            element={<DroitFiscalPatrimonial />}
          />
          <Route
            path="/services/droit-etrangers"
            element={<DroitEtrangers />}
          />
          <Route
            path="/services/fonction-publique"
            element={<FonctionPublique />}
          />
          <Route
            path="*"
            element={
              <h1 style={{ margin: '12dvh 0 5dvh 0' }}>404</h1>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
