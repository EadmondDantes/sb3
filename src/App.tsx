import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/home';
import { BrandingPage } from './pages/branding';
import { WebDesignPage } from './pages/web-design';
import { CROPage } from './pages/cro';
import { MarketingPage } from './pages/marketing';
import { WorkPage } from './pages/work';
import { AboutPage } from './pages/about';
import { QuotePage } from './pages/quote';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/branding/*" element={<BrandingPage />} />
          <Route path="/services/web-design/*" element={<WebDesignPage />} />
          <Route path="/services/cro/*" element={<CROPage />} />
          <Route path="/services/marketing/*" element={<MarketingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}