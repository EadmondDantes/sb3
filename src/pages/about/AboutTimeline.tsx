import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences'
  },
  {
    year: '2017',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients worldwide'
  },
  {
    year: '2019',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovative solutions'
  },
  {
    year: '2021',
    title: 'Team Growth',
    description: 'Reached 100+ team members globally'
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Launched new R&D center for emerging technologies'
  }
];

export function AboutTimeline() {
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of our growth and achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-indigo-500/50 to-purple-500/50" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                      <div className="text-2xl font-bold text-indigo-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}