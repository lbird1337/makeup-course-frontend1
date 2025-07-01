import React from 'react';

// Оптимизированная структура данных. Все детали в одном месте.
const detailsData = [
  {
    title: 'День 1: Расписание',
    items: [
      'Сбор гостей и мини-фуршет для знакомства.',
      'Первый полноценный показ с подробным объяснением.',
      'Перерыв на обед и неформальное общение.',
      'Второй полноценный показ с разбором техник.',
      'Вручение сертификатов, подарки и фотосессия.',
    ]
  },
  {
    title: 'День 2: Отработка',
    items: [
      'Время: с 12:00 до 18:00.',
      'Вы самостоятельно отрабатываете 1-2 образа на своей модели.',
      'Светлана лично курирует вашу работу, ставит руку и отвечает на вопросы.',
      'Помощь в создании контента: научим снимать Reels и делать продающие фото.',
    ]
  },
  {
    title: 'Что взять с собой',
    items: [
      'Ваш полный набор кистей для макияжа.',
      'Расходники: ватные диски, палочки, мицеллярная вода.',
      'Ресницы, клей, пинцет.',
      'Личный портативный видеосвет (по возможности).',
    ]
  },
  {
    title: 'Предоставляемая косметика',
    items: [
      'На обучении вы сможете поработать косметикой лучших мировых брендов.',
      'В вашем распоряжении будут все необходимые текстуры для коммерческих работ.',
    ]
  }
];

const Details = () => {
  return (
    <section id="details" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="font-heading text-fluid-2xl font-black text-accent uppercase tracking-widest whitespace-nowrap">Важные детали</h2>
          <div className="flex-grow h-px bg-line ml-8"></div>
        </div>

        {/* Адаптивная сетка для карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailsData.map((section, sectionIndex) => (
            // --- НОВАЯ КАРТОЧКА-ОБЕРТКА ---
            <div key={sectionIndex} className="border border-line p-8 h-full">
              <h3 className="h3 mb-6 text-brand-900">{section.title}</h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-4">
                    <p className="font-heading font-black text-xl text-accent pt-1">
                      {String(itemIndex + 1).padStart(2, '0')}.
                    </p>
                    <p className="font-body text-brand-900 flex-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            // --- КОНЕЦ КАРТОЧКИ ---
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details; 