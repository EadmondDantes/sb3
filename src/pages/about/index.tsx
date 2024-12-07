import { AboutHero } from './AboutHero';
import { AboutStats } from './AboutStats';
import { AboutTeam } from './AboutTeam';
import { AboutValues } from './AboutValues';
import { AboutTimeline } from './AboutTimeline';
import { AboutTestimonials } from './AboutTestimonials';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
      <AboutTestimonials />
    </div>
  );
}