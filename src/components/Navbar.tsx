import { useState } from 'react';
import { motion } from 'framer-motion';
import { DesktopNav } from './navbar/DesktopNav';
import { MobileNav } from './navbar/MobileNav';
import { Logo } from './navbar/Logo';
import { Link } from 'react-router-dom';
import { useScrollEffect } from '../utils/hooks/useScrollEffect';

export function Navbar() {
  const isScrolled = useScrollEffect(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          <DesktopNav 
            activeService={activeService}
            setActiveService={setActiveService}
          />

          <div className="hidden md:block">
            <Link
              to="/quote"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <MobileNav
          isOpen={isMobileMenuOpen}
          activeService={activeService}
          setActiveService={setActiveService}
        />
      </div>
    </motion.nav>
  );
}