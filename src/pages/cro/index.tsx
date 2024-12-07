import { Routes, Route } from 'react-router-dom';
import { ConversionHero } from './ConversionHero';
import { OptimizationProcess } from './OptimizationProcess';
import { CROServices } from './CROServices';
import { CROStats } from './CROStats';
import { CROTestimonials } from './CROTestimonials';
import { LiftmapPage } from './liftmap';
import { TechStackPage } from './tech-stack';

export function CROPage() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black pt-20">
          <ConversionHero />
          <OptimizationProcess />
          <CROServices />
          <CROStats />
          <CROTestimonials />
        </div>
      } />
      <Route path="/liftmap" element={<LiftmapPage />} />
      <Route path="/tech-stack" element={<TechStackPage />} />
    </Routes>
  );
}