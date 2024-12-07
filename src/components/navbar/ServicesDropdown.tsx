import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { MainService } from '../../data/navigation';

interface ServicesDropdownProps {
  services: MainService[];
  onMouseLeave: () => void;
}

export function ServicesDropdown({ services, onMouseLeave }: ServicesDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-0 mt-2 w-[800px] bg-black/95 border border-gray-800 rounded-xl p-6 grid grid-cols-4 gap-6"
      onMouseLeave={onMouseLeave}
    >
      {services.map((service) => (
        <div key={service.name}>
          <Link
            to={service.href}
            className="font-semibold text-white hover:text-indigo-400 transition-colors block mb-3"
          >
            {service.name}
          </Link>
          <ul className="space-y-2">
            {service.children.map((subService) => (
              <li key={subService.name}>
                <Link
                  to={subService.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors block"
                >
                  {subService.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}