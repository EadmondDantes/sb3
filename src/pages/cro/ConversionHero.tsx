import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ConversionHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Animated Background */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Conversion Rate Optimization Services
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Turn More Website Visitors into Paying Customers
            </h2>
            <div className="text-xl text-gray-400 space-y-4">
              <p>
                We specialize in transforming digital traffic into measurable revenue through strategic, data-driven optimization. Our proven methodology has helped businesses unlock hidden potential and drive significant financial growth.
              </p>
              <p>
                Since 2016, we've developed a proprietary approach that has generated over $500 million in added revenue for our clients. Our high-velocity testing programs are laser-focused on one critical objective: increasing your conversions and maximizing your online performance.
              </p>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
                Start Optimizing Today
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 transform group-hover:scale-105 transition-transform duration-300" />
              <img
                src="/cro-hero.jpg"
                alt="Conversion Rate Optimization"
                className="relative z-10 w-full h-full object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold">500M+</p>
              <p className="text-gray-200">Revenue Generated</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}