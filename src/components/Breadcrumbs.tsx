import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="container mx-auto px-4 py-4 flex items-center space-x-2 text-sm text-gray-400">
      <Link to="/" className="hover:text-white transition-colors">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        // Create a unique key using the full path up to this point
        const key = pathnames.slice(0, index + 1).join('-');
        
        const formattedName = name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        return (
          <div key={key} className="flex items-center space-x-2">
            <FaChevronRight className="text-gray-600" />
            {isLast ? (
              <span className="text-white">{formattedName}</span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-white transition-colors"
              >
                {formattedName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}