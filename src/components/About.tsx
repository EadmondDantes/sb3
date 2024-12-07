import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaGlobe } from 'react-icons/fa';

const stats = [
  {
    icon: FaTrophy,
    value: '150+',
    label: 'Successful Projects'
  },
  {
    icon: FaUsers,
    value: '50+',
    label: 'Team Members'
  },
  {
    icon: FaGlobe,
    value: '30+',
    label: 'Countries Served'
  }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black" id="about">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="border-[0.5px] border-indigo-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{
                duration: 4,
                delay: i * 0.05,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Leading Shopify Agency Since 2015
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're more than developers – we're your e-commerce growth partners. Our team of Shopify experts combines technical excellence with strategic thinking to deliver exceptional results.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-6 text-center">
                    <stat.icon className="text-4xl text-indigo-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
              <img
                src="/about-team.jpg"
                alt="Our Team"
                className="relative z-10 object-cover w-full h-full"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold">8+ Years</p>
              <p className="text-gray-200">of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}