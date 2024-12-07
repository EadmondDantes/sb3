import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { FaBullhorn, FaSearch, FaHashtag, FaLightbulb, FaImages } from 'react-icons/fa';

const services = [
  {
    icon: FaBullhorn,
    title: 'Integrated Marketing',
    description: 'Comprehensive marketing solutions across all channels',
    link: '/services/marketing/integrated'
  },
  {
    icon: FaSearch,
    title: 'Search Engine Optimization',
    description: 'Drive organic traffic and improve rankings',
    link: '/services/marketing/seo'
  },
  {
    icon: FaHashtag,
    title: 'Social Media Marketing',
    description: 'Engage your audience on social platforms',
    link: '/services/marketing/social-media'
  },
  {
    icon: FaLightbulb,
    title: 'Consulting Services',
    description: 'Expert guidance for your marketing strategy',
    link: '/services/marketing/consulting'
  },
  {
    icon: FaImages,
    title: 'Before & After Designs',
    description: 'See our transformative impact',
    link: '/services/marketing/designs'
  }
];

export function MarketingServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Marketing Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic marketing solutions to grow your brand and drive results
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
                <Link to={service.link}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                    <service.icon className="text-4xl text-indigo-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/quote"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}