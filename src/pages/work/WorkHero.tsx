import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParticlesBackground } from '../../components/backgrounds/ParticlesBackground';

export function WorkHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden">
        <ParticlesBackground />
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Our Work
            </h1>
            <p className="text-xl text-gray-400">
              Explore our portfolio of successful projects across various industries. 
              From beauty to fashion, home decor to toys, we've helped businesses 
              achieve remarkable growth through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}