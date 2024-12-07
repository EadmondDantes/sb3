import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartBar, FaPaintBrush, FaUsers, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: FaChartBar,
    title: 'Conversion Rate Optimization',
    description: 'Data-driven strategies to increase your website\'s conversion rate through continuous testing and optimization.'
  },
  {
    icon: FaPaintBrush,
    title: 'Conversion Centered Design',
    description: 'Design principles and patterns proven to drive user actions and increase conversions.'
  },
  {
    icon: FaUsers,
    title: 'User Experience Research',
    description: 'In-depth analysis of user behavior to identify and eliminate conversion barriers.'
  },
  {
    icon: FaCogs,
    title: 'Tech Stack Consulting',
    description: 'Expert guidance on selecting and implementing the right tools for your optimization needs.'
  }
];

export function CROServices() {
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
            Our CRO Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to optimize your conversion funnel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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