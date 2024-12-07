import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { ParticlesBackground } from '../../../components/backgrounds/ParticlesBackground';
import { FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: FaPaintBrush,
    title: 'Custom UX & UI',
  },
  {
    icon: FaCode,
    title: 'Shopify Migration',
  },
  {
    icon: FaRocket,
    title: 'Development & Integrations',
  }
];

export function ShopifyHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden bg-black">
        <ParticlesBackground />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Shopify Web Design & Development Company
              </h1>
              <p className="text-xl text-gray-400">
                We are a top-rated Shopify website design company to create a scalable custom e-store that's fully optimized for both search engines and conversions.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-2xl text-indigo-500" />
                    </div>
                    <span className="text-sm text-gray-400">{feature.title}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/quote"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 transform group-hover:scale-105 transition-transform duration-300" />
                <img
                  src="/enchant-preview.jpg"
                  alt="Shopify Design"
                  className="relative z-10 w-full h-full object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}