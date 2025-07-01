import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white bg-opacity-70 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <a 
            href="/" 
            className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200"
          >
            Светлана Цыренова
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#program" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Программа
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              О курсе
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Стоимость
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#program" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Программа
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О курсе
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Стоимость
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 