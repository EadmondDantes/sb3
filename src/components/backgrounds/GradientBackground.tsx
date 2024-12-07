import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  children?: React.ReactNode;
}

export function GradientBackground({ children }: GradientBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(168, 85, 247, 0.1)'
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}