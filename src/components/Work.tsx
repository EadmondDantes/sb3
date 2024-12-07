import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Fashion Boutique',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    stats: ['200% ROI', '350K Sales', '45% Conversion']
  },
  {
    title: 'Tech Store',
    category: 'Shopify Plus',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
    stats: ['1M+ Revenue', '65% Growth', '4.9 Rating']
  },
  {
    title: 'Beauty Brand',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    stats: ['90% Retention', '2x AOV', '300k+ Users']
  },
  {
    title: 'Jewelry Collection',
    category: 'Shopify Plus',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
    stats: ['150% Growth', '$2M Sales', '55% ROI']
  }
];

export function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black" id="work">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
              style={{ top: `${i * 25}%` }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful Shopify stores and digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-500/30 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
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

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}