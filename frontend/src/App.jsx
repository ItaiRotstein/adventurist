import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from "./layout/Footer";
import { Header } from "./layout/header/Header";
import { HomePage } from "./pages/HomePage";
import { SurfPage } from "./pages/SurfPage";
import { ClimbPage } from "./pages/ClimbPage";
import { ParamotorPage } from "./pages/ParamotorPage";
import { SpotsPage } from "./pages/SpotsPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { SpotPage } from "./pages/SpotPage";
import { ParaglidePage } from "./pages/ParaglidePage";
import { BicyclePage } from "./pages/BicyclePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SpotProvider } from './context/SpotContext'; 
import { NorthPage } from "./pages/NorthPage";
import { CenterPage } from "./pages/CenterPage";
import { SouthPage } from "./pages/SouthPage";

export default function App() {
  return (
    <SpotProvider>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/spot/:id" element={<SpotPage />} />
          <Route path="/פעילות/גלישה" element={<SurfPage />} />
          <Route path="/פעילות/טיפוס" element={<ClimbPage />} />
          <Route path="/פעילות/מצנח-ממונע" element={<ParamotorPage />} />
          <Route path="/פעילות/מצנח-רחיפה" element={<ParaglidePage />} />
          <Route path="/פעילות/אופניים" element={<BicyclePage />} />
          <Route path="/פעילויות/" element={<SpotsPage />} />
          <Route path="/region/צפון" element={<NorthPage />} />
          <Route path="/region/מרכז" element={<CenterPage />} />
          <Route path="/region/דרום" element={<SouthPage />} />
          <Route path="/search_results" element={<SearchResultsPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </SpotProvider>
  );
}