import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import { Work } from '../../components/Work';
import { About } from '../../components/About';
import { Contact } from '../../components/Contact';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </div>
  );
}