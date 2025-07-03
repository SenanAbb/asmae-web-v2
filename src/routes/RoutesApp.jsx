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
import HonorairesPage from '../pages/HonorairesPage/HonorairesPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';

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
          <Route path="/expertises" element={<ServicesPage />} />
          <Route path="/honoraires" element={<HonorairesPage />} />

          {/* Services routes */}
          {/* Affaires & Societes*/}
          <Route
            path="/expertises/developpement-strategie"
            element={<DeveloppementStrategie />}
          />
          <Route
            path="/expertises/acquisitions-cessions"
            element={<AcquisitionsCessions />}
          />
          <Route
            path="/expertises/droit-commercial"
            element={<DroitCommercial />}
          />
          <Route
            path="/expertises/droit-fiscal-patrimonial"
            element={<DroitFiscalPatrimonial />}
          />

          {/* Etrangers */}
          <Route path="/expertises/visa" element={<VisasEtRefusDeVisa />} />
          <Route
            path="/expertises/regroupement-familial"
            element={<RegroupementFamilial />}
          />
          <Route
            path="/expertises/asile-CNDA"
            element={<DemandeAsileRecoursCNDA />}
          />
          <Route
            path="/expertises/sejour-OQTF"
            element={<TitresSejourOQTF />}
          />

          {/* Fonction publique */}
          <Route
            path="/expertises/procedure-disciplinaire"
            element={<ProceduresDisciplinaires />}
          />
          <Route
            path="/expertises/harcelement-moral"
            element={<HarcelementMoral />}
          />
          <Route
            path="/expertises/maladie-accident"
            element={<MaladieProfessionnelleAccident />}
          />

          {/* Privacy Policy */}
          <Route
            path="/privacy"
            element={
              <h1 style={{ margin: '12dvh 0 5dvh 0' }}>
                <PrivacyPage />
              </h1>
            }
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
