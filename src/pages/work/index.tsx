import { WorkHero } from './WorkHero';
import { WorkPortfolio } from './WorkPortfolio';
import { WorkStats } from './WorkStats';
import { WorkTestimonials } from './WorkTestimonials';

export function WorkPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <WorkHero />
      <WorkPortfolio />
      <WorkStats />
      <WorkTestimonials />
    </div>
  );
}