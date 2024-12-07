import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Their expertise in e-commerce design and development helped us achieve a 200% increase in online sales.",
    author: "Sarah Chen",
    role: "CEO, Glow Beauty",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    title: "Modern Living",
    quote: "The team's attention to detail and understanding of our brand vision exceeded our expectations.",
    author: "Michael Thompson",
    role: "Founder, Modern Living",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    quote: "Working with them transformed our online presence and significantly boosted our conversion rates.",
    author: "Emily Rodriguez",
    role: "Marketing Director, Urban Style",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export function WorkTestimonials() {
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
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <FaQuoteLeft className="text-3xl text-indigo-500 mb-6" />
                <p className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}