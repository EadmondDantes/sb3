import { Routes, Route } from 'react-router-dom';
import { BrandingServices } from './services';
import { LogoDesign } from './logo-design';
import { BrandIdentity } from './identity';
import { GraphicDesign } from './graphic-design';
import { BrandMarketing } from './marketing';

export function BrandingPage() {
  return (
    <Routes>
      <Route path="/" element={<BrandingServices />} />
      <Route path="/services" element={<BrandingServices />} />
      <Route path="/logo-design" element={<LogoDesign />} />
      <Route path="/identity" element={<BrandIdentity />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
      <Route path="/marketing" element={<BrandMarketing />} />
    </Routes>
  );
}