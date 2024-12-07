import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { FaPaintBrush, FaShopify, FaStore } from 'react-icons/fa';

const services = [
  {
    icon: FaPaintBrush,
    title: 'Custom Website Design',
    description: 'Tailored web solutions that reflect your brand and drive results',
    link: '/services/web-design/custom'
  },
  {
    icon: FaShopify,
    title: 'Shopify Website Design',
    description: 'Expert Shopify development for high-converting online stores',
    link: '/services/web-design/shopify'
  },
  {
    icon: FaStore,
    title: 'eCommerce Website Design',
    description: 'Powerful online stores built for growth and conversions',
    link: '/services/web-design/ecommerce'
  }
];

export function WebDesignServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Web Design Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Create stunning, high-performance websites that drive results and engage your audience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <Link to={service.link}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                    <service.icon className="text-4xl text-indigo-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/quote"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}