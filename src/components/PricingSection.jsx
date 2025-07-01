import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-brand-50">
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-brand-900">
          Стоимость участия
        </h2>
        <div className="bg-brand-50 border-2 border-line p-8 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4 text-brand-900">
            15 000 руб.
          </h3>
          <p className="font-body text-lg mb-6 text-brand-900">
            В стоимость включены все материалы, питание и сертификат
          </p>
          <p className="font-body text-brand-900">
            Предоплата: 5 000 руб.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 