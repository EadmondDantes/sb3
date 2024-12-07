import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Davis',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Wilson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

export function AboutTeam() {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The talented individuals behind our success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full transform group-hover:scale-105 transition-transform duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-cover rounded-full p-1"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}