import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParticlesBackground } from '../../components/backgrounds/ParticlesBackground';
import { FaRocket, FaLock, FaClock } from 'react-icons/fa';

const benefits = [
  {
    icon: FaRocket,
    title: 'Fast Turnaround',
    description: 'Get your detailed proposal within 24 hours'
  },
  {
    icon: FaLock,
    title: 'No Commitment',
    description: 'Free consultation with no strings attached'
  },
  {
    icon: FaClock,
    title: 'Flexible Timeline',
    description: 'Projects scheduled according to your needs'
  }
];

export function QuotePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden">
        <ParticlesBackground />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              ref={ref}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  Let's Create Something Amazing Together
                </h1>
                <p className="text-xl text-gray-400">
                  Tell us about your project and we'll get back to you within 24 hours with a comprehensive proposal.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                      <benefit.icon className="text-3xl text-indigo-500 mb-4" />
                      <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors">
                        <option value="">Select a service</option>
                        <option value="branding">Branding</option>
                        <option value="web-design">Web Design</option>
                        <option value="cro">CRO</option>
                        <option value="marketing">Marketing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details</label>
                      <textarea
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors h-32"
                        placeholder="Tell us about your project requirements"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors">
                        <option value="">Select a budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}