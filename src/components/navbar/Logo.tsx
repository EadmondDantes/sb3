import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold text-white">
      Dominate<span className="text-indigo-500">com</span>
    </Link>
  );
}