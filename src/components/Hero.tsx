import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-black opacity-90" />
      <div className="absolute inset-0">
        <div className="grid grid-cols-3 h-full opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative overflow-hidden">
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 20 + i * 5,
                  ease: "linear"
                }}
                className="space-y-4"
              >
                {[...Array(8)].map((_, j) => (
                  <div key={j} className="h-64 mx-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Leading Shopify Agency
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Crafting Digital Excellence
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            We transform visions into high-converting Shopify stores through expert design, development and optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-sm text-gray-400 mb-6">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap gap-8 items-center opacity-70">
            {/* Add client logos here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}