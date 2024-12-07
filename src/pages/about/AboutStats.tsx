import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaGlobe, FaStar } from 'react-icons/fa';

const stats = [
  {
    icon: FaTrophy,
    value: '500+',
    label: 'Projects Completed'
  },
  {
    icon: FaUsers,
    value: '100+',
    label: 'Team Members'
  },
  {
    icon: FaGlobe,
    value: '30+',
    label: 'Countries Served'
  },
  {
    icon: FaStar,
    value: '98%',
    label: 'Client Satisfaction'
  }
];

export function AboutStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center">
                <stat.icon className="text-4xl text-indigo-500 mb-4 mx-auto" />
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}