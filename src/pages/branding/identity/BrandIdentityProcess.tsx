import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaPencilAlt, FaMagic, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Discovery',
    description: 'Research your market, competitors, and target audience to inform the brand identity design.'
  },
  {
    icon: FaPencilAlt,
    title: 'Concept Development',
    description: 'Create initial concepts and explore different directions for your brand identity.'
  },
  {
    icon: FaMagic,
    title: 'Refinement',
    description: 'Refine and perfect the chosen direction with your feedback and input.'
  },
  {
    icon: FaRocket,
    title: 'Implementation',
    description: 'Roll out your new brand identity across all platforms and materials.'
  }
];

export function BrandIdentityProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to creating powerful brand identities
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