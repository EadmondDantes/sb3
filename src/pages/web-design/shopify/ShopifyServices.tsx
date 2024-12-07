import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: FaPaintBrush,
    title: 'Custom UX & UI',
    description: 'Tailored user experience and interface design that reflects your brand and drives conversions.'
  },
  {
    icon: FaCode,
    title: 'Shopify Migration',
    description: 'Seamless migration of your existing store to Shopify with zero downtime and data loss.'
  },
  {
    icon: FaRocket,
    title: 'Development & Integrations',
    description: 'Custom Shopify development and third-party integrations to enhance your store functionality.'
  }
];

export function ShopifyServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="relative container mx-auto px-4 z-10">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Our Shopify Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end Shopify solutions to help your business grow
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <service.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}