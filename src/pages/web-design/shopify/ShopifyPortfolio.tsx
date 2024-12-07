import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Enchant Christmas',
    description: 'Christmas Light Store & Village',
    image: '/enchant-preview.jpg',
    stats: ['200% ROI', '350K Sales', '45% Conversion']
  },
  {
    title: 'Urban Living',
    description: 'Real Estate Development',
    image: '/urban-preview.jpg',
    stats: ['1M+ Revenue', '65% Growth', '4.9 Rating']
  }
];

export function ShopifyPortfolio() {
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest Shopify success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="bg-gradient-to-r from-indigo-600/50 to-purple-600/50 px-3 py-1 rounded-full text-sm"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}