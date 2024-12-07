import { Link } from 'react-router-dom';
import { mainServices } from '../../data/navigation';

interface DesktopNavProps {
  activeService: string | null;
  setActiveService: (service: string | null) => void;
}

export function DesktopNav({ activeService, setActiveService }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center justify-center space-x-8">
      {mainServices.map((service) => (
        <div 
          key={service.name} 
          className="relative group"
          onMouseEnter={() => setActiveService(service.name)}
          onMouseLeave={() => setActiveService(null)}
        >
          <Link
            to={service.href}
            className="text-white hover:text-indigo-400 transition-colors font-termina"
          >
            {service.name}
          </Link>
          {activeService === service.name && (
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/95 rounded-lg shadow-xl border border-gray-800/50 z-50"
              onMouseEnter={() => setActiveService(service.name)}
              onMouseLeave={() => setActiveService(null)}
            >
              {service.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.href}
                  className="block px-4 py-3 text-white hover:bg-indigo-500/20 transition-colors"
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
        className="text-white hover:text-indigo-400 transition-colors font-termina"
      >
        Work
      </Link>
      <Link
        to="/about"
        className="text-white hover:text-indigo-400 transition-colors font-termina"
      >
        About
      </Link>
    </nav>
  );
}