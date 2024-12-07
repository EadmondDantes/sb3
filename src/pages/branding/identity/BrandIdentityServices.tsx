import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPalette, FaSwatchbook, FaFont, FaImages, FaFileAlt, FaBox } from 'react-icons/fa';

const services = [
  {
    icon: FaPalette,
    title: 'Color Palette Development',
    description: 'Create a distinctive color scheme that reflects your brand personality and resonates with your target audience.'
  },
  {
    icon: FaSwatchbook,
    title: 'Visual Elements',
    description: 'Design unique visual elements and patterns that strengthen your brand recognition and consistency.'
  },
  {
    icon: FaFont,
    title: 'Typography Selection',
    description: 'Choose and implement typography that enhances your brand message and improves readability.'
  },
  {
    icon: FaImages,
    title: 'Image Style Guidelines',
    description: 'Develop consistent image guidelines that maintain your brand visual integrity across all platforms.'
  },
  {
    icon: FaFileAlt,
    title: 'Brand Guidelines',
    description: 'Create comprehensive brand guidelines to ensure consistent application of your visual identity.'
  },
  {
    icon: FaBox,
    title: 'Brand Assets Creation',
    description: 'Design and develop all necessary brand assets for various applications and platforms.'
  }
];

export function BrandIdentityServices() {
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
            Our Brand Identity Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive brand identity solutions to help your business stand out
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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