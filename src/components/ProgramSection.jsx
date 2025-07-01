import React from 'react';

const programCards = [
  {
    title: "День 1: Основы и теория",
    description: "Инструменты визажиста. Типы кожи. Цветовой круг и колористика. Идеальный тон: подготовка кожи, выбор и нанесение основы."
  },
  {
    title: "День 2: Техники макияжа",
    description: "Коррекция и моделирование лица. Дневной и вечерний макияж. Техника \"смоки айс\". Работа с бровями."
  },
  {
    title: "День 3: Креатив и практика",
    description: "Тренды 2024. Работа с цветом и текстурами. Создание полного образа на модели. Ответы на вопросы и вручение сертификатов."
  }
];

const ProgramSection = () => {
  return (
    <section className="bg-brand-50 border-t-2 border-b-2 border-line">
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-brand-900">
          Программа мастер-класса
        </h2>
        
        <div className="space-y-8">
          {programCards.map((card, index) => (
            <div key={index} className="bg-brand-50 border-2 border-line p-6">
              <h3 className="font-heading font-bold text-2xl mb-2 text-brand-900">
                {card.title}
              </h3>
              <p className="font-body text-base text-brand-900">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection; 