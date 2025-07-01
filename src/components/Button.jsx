import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-brand-900 text-brand-50 font-body font-bold uppercase tracking-widest transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 