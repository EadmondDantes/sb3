import { motion } from 'framer-motion';

export function GridBackground() {
  return (
    <div className="absolute inset-0">
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
  );
}