import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from "./layout/Footer";
import { Header } from "./layout/header/Header";
import { HomePage } from "./pages/HomePage";
import { SpotsPage } from "./pages/SpotsPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { SpotPage } from "./pages/SpotPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SpotProvider } from './context/SpotContext';
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PostsPage } from "./pages/post/PostsPage";
import { FavoritePage } from "./pages/FavoritePage";
import { PostPage } from "./pages/post/PostPage";
import { ActivityTypePage } from "./pages/ActivityTypePage";
import { ScrollToTop } from "./cmps/ScrollToTop";

export default function App() {
  return (
    <SpotProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/activity/:type" element={<ActivityTypePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/spot/:id" element={<SpotPage />} />
              <Route path="/spots/" element={<SpotsPage />} />
              <Route path="/blog" element={<PostsPage />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/favorites" element={<FavoritePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search_results" element={<SearchResultsPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </BrowserRouter>
    </SpotProvider>
  );
}