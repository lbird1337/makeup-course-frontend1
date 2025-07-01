import React from 'react';
import PaymentComponent from './PaymentComponent';

const RegistrationSection = () => {
  return (
    <section className="bg-brand-900 text-brand-50">
      <div className="max-w-2xl mx-auto py-12 md:py-16 px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Забронируйте свое место
        </h2>
        
        <p className="font-body text-lg mb-8">
          Полная стоимость участия: 15 000 руб. Для бронирования места необходимо 
          внести предоплату в размере 5 000 руб.
        </p>

        <PaymentComponent />
      </div>
    </section>
  );
};

export default RegistrationSection; 