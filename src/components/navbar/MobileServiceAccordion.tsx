import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { MainService } from '../../data/navigation';

interface MobileServiceAccordionProps {
  service: MainService;
  isActive: boolean;
  onToggle: () => void;
}

export function MobileServiceAccordion({ 
  service, 
  isActive, 
  onToggle
}: MobileServiceAccordionProps) {
  return (
    <div className="space-y-2">
      <button
        onClick={onToggle}
        className="w-full text-left text-white hover:text-indigo-400 transition-colors flex justify-between items-center"
      >
        <span>{service.name}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isActive ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 space-y-2"
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}