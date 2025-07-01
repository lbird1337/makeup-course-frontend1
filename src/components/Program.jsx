import React from 'react';

const day1Program = [
  'Идеальная кожа-“glass skin”: экспресс-протокол подготовки + список проверенных средств',
  'Стойкость 12+ часов: «замок» из текстур, фиксирующие спреи и секрет "sandwich"-наслаивания',
  'Свадебный must-have kit: готовый шоп-лист тонов, консилеров и финишей для невесты',
  'Профессиональные кисти и аксессуары: что взять в кейтеринг-сумку стилиста',
  'Пучки без клеевых следов: авторская техника крепления за 3 минуты',
  'Light Definition Eyes: универсальная палитра, которая подчёркивает любую внешность',
  'Губы "all-day kiss proof": дуэт оттенка и топ-коута, сохраняющий объём до финального танца',
  'Маркетинг стилиста: 5 каналов, где невесты ищут мастера прямо сейчас',
];

const day2Program = [
  'Скульптурирование декольте: продукты + схема нанесения "а-ля V-shape"',
  'Second-Skin Coverage: как совместить тонкую вуаль и стойкость съёмочного грима',
  'Smokey 360°: пошаговый шаблон от тёмного омбре к нижней растушёвке',
  'Стрелка Soft Edge: выглядит люксово, выполняется за 2 минуты',
  'Коммерческие ресницы: идеальный изгиб, пучки VS лента, щипцы как финальный штрих',
  'Sensual Lips: матовый контур + сатиновый центр для объёма без филеров',
  '3D-коррекция: сочетание крема и пудры для «живого» контуринга на фото',
  'Целостный образ: что добавить, а что исключить, чтобы макияж продавал кадр',
  'Портфолио, которое бронируют: свет, ракурс, ретушь и storytelling в Instagram-сетке',
];

const Program = () => {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12 text-fluid-2xl">Программа мастер-класса</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Day 1 */}
          <div className="border border-line p-8">
            <h3 className="h3 mb-6 text-brand-900">День 1. Wedding makeup</h3>
            <ul className="space-y-4 font-body text-brand-900">
              {day1Program.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Day 2 */}
          <div className="border border-line p-8">
            <h3 className="h3 mb-6 text-brand-900">День 2. Sexy Smokey Eyes</h3>
            <ul className="space-y-4 font-body text-brand-900">
              {day2Program.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program; 