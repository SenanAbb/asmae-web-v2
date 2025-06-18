import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import CabinetPage from '../pages/CabinetPage/CabinetPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import DeveloppementStrategie from '../pages/DeveloppementStrategie/DeveloppementStrategie';
import AcquisitionsCessions from '../pages/AcquisitionsCessions/AcquisitionsCessions';
import DroitCommercial from '../pages/DroitCommercial/DroitCommercial';
import DroitFiscalPatrimonial from '../pages/DroitFiscalPatrimonial/DroitFiscalPatrimonial';
import { Footer } from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import VisasEtRefusDeVisa from '../pages/VisasEtRefusDeVisa/VisasEtRefusDeVisa';
import RegroupementFamilial from '../pages/RegroupementFamilial/RegroupementFamilial';
import DemandeAsileRecoursCNDA from '../pages/DemandeAsileRecoursCNDA/DemandeAsileRecoursCNDA';
import TitresSejourOQTF from '../pages/TitresSejourOQTF/TitresSejourOQTF';
import ProceduresDisciplinaires from '../pages/ProceduresDisciplinaires/ProceduresDisciplinaires';
import HarcelementMoral from '../pages/HarcelementMoral/HarcelementMoral';
import MaladieProfessionnelleAccident from '../pages/MaladieProfessionnelleAccident/MaladieProfessionnelleAccident';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* Services routes */}
          {/* Affaires & Societes*/}
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

          {/* Etrangers */}
          <Route path="/services/visa" element={<VisasEtRefusDeVisa />} />
          <Route
            path="/services/regroupement-familial"
            element={<RegroupementFamilial />}
          />
          <Route
            path="/services/asile-CNDA"
            element={<DemandeAsileRecoursCNDA />}
          />
          <Route path="/services/sejour-OQTF" element={<TitresSejourOQTF />} />

          {/* Fonction publique */}
          <Route
            path="/services/procedure-disciplinaire"
            element={<ProceduresDisciplinaires />}
          />
          <Route
            path="/services/harcelement-moral"
            element={<HarcelementMoral />}
          />
          <Route
            path="/services/maladie-accident"
            element={<MaladieProfessionnelleAccident />}
          />

          <Route
            path="*"
            element={<h1 style={{ margin: '12dvh 0 5dvh 0' }}>404</h1>}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
