import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShopify, FaCode, FaPalette, FaChartLine, FaSearchDollar, FaHeadset } from 'react-icons/fa';

const services = [
  {
    title: 'Custom Shopify Development',
    description: 'Tailored Shopify solutions that drive conversions and enhance user experience.',
    icon: FaShopify
  },
  {
    title: 'Theme Development',
    description: 'Custom Shopify themes built for performance and brand identity.',
    icon: FaCode
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers.',
    icon: FaPalette
  },
  {
    title: 'Store Optimization',
    description: 'Data-driven strategies to maximize your online store performance.',
    icon: FaChartLine
  },
  {
    title: 'SEO & Marketing',
    description: 'Comprehensive digital marketing to drive traffic and sales.',
    icon: FaSearchDollar
  },
  {
    title: '24/7 Support',
    description: 'Expert support to keep your store running smoothly.',
    icon: FaHeadset
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black" id="services">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Your Shopify Success Partner
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver end-to-end Shopify solutions that help brands scale their e-commerce presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <service.icon className="text-5xl text-indigo-500 mb-4" />
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