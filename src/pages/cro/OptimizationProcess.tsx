import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaSearch, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Research & Analysis',
    description: 'Deep dive into your data to identify conversion bottlenecks and opportunities.'
  },
  {
    icon: FaChartLine,
    title: 'Strategy Development',
    description: 'Create a data-driven optimization roadmap based on research findings.'
  },
  {
    icon: FaCode,
    title: 'Implementation',
    description: 'Execute A/B tests and optimizations with our proprietary framework.'
  },
  {
    icon: FaRocket,
    title: 'Growth & Scale',
    description: 'Continuously monitor, iterate, and scale successful optimizations.'
  }
];

export function OptimizationProcess() {
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
            Our Optimization Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to increasing your conversion rates and revenue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <step.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}