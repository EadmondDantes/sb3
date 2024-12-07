import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

export function SocialMedia() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden">
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Social Media Marketing
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Build your brand presence and engage with your audience across social platforms.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}