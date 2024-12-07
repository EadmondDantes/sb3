import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export function NavLink({ href, children, mobile, onClick }: NavLinkProps) {
  const baseClasses = "text-white hover:text-indigo-400 transition-colors";
  const mobileClasses = mobile ? "block" : "";
  
  return (
    <Link 
      to={href} 
      className={`${baseClasses} ${mobileClasses}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}