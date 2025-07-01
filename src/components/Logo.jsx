import React from 'react';

const Logo = ({ className = '', fill1 = 'fill-brand-900', fill2 = 'fill-brand-50' }) => {
  return (
    <svg
      viewBox="0 0 1140 240"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${className}`}
      aria-label="Светлана Цыренова логотип"
      style={{ display: 'block' }}
    >
      <style>{`
        .logo-text { font-family: 'Cormorant Garamond', 'PT Serif', serif; font-weight: 700; }
        .logo-line1 { font-size: 60px; }
        .logo-line2 { font-size: 60px; }
        @media (min-width: 640px) {
          .logo-line1, .logo-line2 { font-size: 96px; }
        }
        @media (min-width: 1024px) {
          .logo-line1, .logo-line2 { font-size: 120px; }
        }
      `}</style>
      <text
        x="0"
        y="100"
        fontSize="90"
        className={`logo-text ${fill1}`}
      >
        СВЕТЛАНА
      </text>
      <text
        x="0"
        y="210"
        fontSize="90"
        className={`logo-text ${fill1}`}
      >
        ЦЫРЕНОВА
      </text>
    </svg>
  );
};

export default Logo; 