import { Link } from 'react-router-dom';
import { mainServices } from '../../data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  activeService: string | null;
  setActiveService: (service: string | null) => void;
}

export function MobileNav({ isOpen, activeService, setActiveService }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden absolute top-full left-0 w-full bg-black/95 p-4">
      <div className="space-y-4">
        {mainServices.map((service) => (
          <div key={service.name} className="space-y-2">
            <button
              className="block text-white hover:text-indigo-400 font-semibold w-full text-left"
              onClick={() => setActiveService(activeService === service.name ? null : service.name)}
            >
              {service.name}
            </button>
            {activeService === service.name && (
              <div className="pl-4 space-y-2">
                {service.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.href}
                    className="block text-gray-400 hover:text-white text-sm"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          to="/work"
          className="block text-white hover:text-indigo-400 font-semibold"
        >
          Work
        </Link>
        <Link
          to="/about"
          className="block text-white hover:text-indigo-400 font-semibold"
        >
          About
        </Link>
        <Link
          to="/quote"
          className="block px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white hover:opacity-90 transition-opacity text-center"
        >
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}