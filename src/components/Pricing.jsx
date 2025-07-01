import React from 'react';

const Pricing = ({ handleOpenModal }) => {
  return (
    <section id="pricing" className="bg-accent text-brand-50 py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12 text-fluid-2xl">Стоимость участия</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="border-2 border-brand-50 p-8 flex flex-col">
            <div className="py-10 md:py-12 space-y-4">
              <h3 className="font-heading text-3xl font-bold mb-2">Без отработки</h3>
              <p className="font-body text-sm uppercase tracking-wide text-brand-50/70 mb-4">40 мест</p>
              <p className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-50">7900 руб</p>
              <p className="font-body text-sm mt-6">Полноценный просмотр двух дней мастер-класса. Сертификат участника.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border-2 border-brand-50 p-8 flex flex-col bg-brand-50 text-accent">
            <div className="py-10 md:py-12 space-y-4">
              <h3 className="font-heading text-3xl font-bold mb-2">С отработкой</h3>
              <p className="font-body text-sm uppercase tracking-wide text-brand-900/70 mb-4">Всего 4 места!</p>
              <p className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-accent">35000 руб</p>
              <p className="font-body text-sm mt-6">Просмотр, полноценная отработка под руководством Светланы, помощь в съемке Reels, подарки.</p>
            </div>
          </div>
        </div>
        
        <hr className="mt-12 w-1/6 mx-auto border-t-2 border-brand-50/40" />
        
        <p className="text-center mt-8 font-body text-sm text-brand-50/80">
          Бронирование места осуществляется по предоплате 10.000 руб.
        </p>
      </div>
    </section>
  );
};

export default Pricing; 