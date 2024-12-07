import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { FaChartLine, FaTasks, FaRoad, FaUsers, FaDatabase, FaChartBar } from 'react-icons/fa';

const features = [
  {
    icon: FaChartLine,
    title: 'Prioritize ideas',
    description: 'Liftmap allows you to engage the broader team by capturing test ideas and hypotheses, and prioritizing them to ensure your backlog will maximize your ROI.'
  },
  {
    icon: FaTasks,
    title: 'Manage workflows',
    description: 'Choose from our proven streamlined process to ensure experiments are made with consistency, or create your own custom workflows.'
  },
  {
    icon: FaRoad,
    title: 'Build-out roadmaps',
    description: 'Build a work-schedule for upcoming experiments or get a real-time overview of your current pipeline to help avoid experiment conflicts and provide visibility to stakeholders.'
  },
  {
    icon: FaUsers,
    title: 'Improve collaboration',
    description: 'Liftmap allows you to keep all your experiment communication in one location by tagging team members, assigning tasks, tracking workload, and more.'
  },
  {
    icon: FaDatabase,
    title: 'Grow your knowledge database',
    description: 'Centralize all your experiment information, including results and key insights, to easily share across your team or organization.'
  },
  {
    icon: FaChartBar,
    title: 'Improve program reporting',
    description: 'Prove the ROI of your experimentation efforts with real evidence – get reporting on velocity, win-rate, and progress against organizational objectives.'
  }
];

export function LiftmapPage() {
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
          <div className="grid grid-cols-8 grid-rows-8 h-full opacity-20">
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
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Scale your experimentation program with Liftmap
            </h1>
            <p className="text-xl text-gray-400">
              Liftmap helps facilitate your CRO program success. Like many companies, you probably began managing your CRO program through a frankenstein-mix of project management tools and spreadsheets. But as your CRO program has grown, you are probably finding that it has outgrown your current setup. Liftmap provides an architecture for growth, inspired and refined by some of the world's largest testing organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <feature.icon className="text-4xl text-indigo-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Improve collaboration and grow your experimentation program efficiently
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Built for conversion optimization and personalization teams to manage experiments from ideation to analysis. Prioritize hypotheses, store experiment details, comment on tests, and share results and insights with the broader organization. Liftmap has everything you need to effectively manage and grow your testing program, effortlessly.
            </p>
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