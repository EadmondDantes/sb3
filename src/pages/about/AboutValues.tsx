import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaHandshake, FaRocket, FaHeart } from 'react-icons/fa';

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
  },
  {
    icon: FaHandshake,
    title: 'Partnership',
    description: 'We build long-term relationships with our clients, becoming true partners in their success.'
  },
  {
    icon: FaRocket,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from design to development to support.'
  },
  {
    icon: FaHeart,
    title: 'Passion',
    description: "We are deeply passionate about our craft and committed to delivering exceptional results."
  }
];

export function AboutValues() {
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
            Our Values
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center">
                <value.icon className="text-4xl text-indigo-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}