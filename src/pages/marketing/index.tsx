import { Routes, Route } from 'react-router-dom';
import { MarketingServices } from './services';
import { IntegratedMarketing } from './integrated';
import { SEOServices } from './seo';
import { SocialMedia } from './social-media';
import { ConsultingServices } from './consulting';
import { BeforeAfter } from './designs';

export function MarketingPage() {
  return (
    <Routes>
      <Route path="/" element={<MarketingServices />} />
      <Route path="/services" element={<MarketingServices />} />
      <Route path="/integrated" element={<IntegratedMarketing />} />
      <Route path="/seo" element={<SEOServices />} />
      <Route path="/social-media" element={<SocialMedia />} />
      <Route path="/consulting" element={<ConsultingServices />} />
      <Route path="/designs" element={<BeforeAfter />} />
    </Routes>
  );
}