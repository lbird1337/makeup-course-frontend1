import React from 'react';
// Импортируем Swiper и его компоненты
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Award, Clock, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutPoints = [
  'Профессиональный визажист-стилист: накрасила 1000+ девушек',
  '8 лет создаю образы для совершенно разных девушек с любой внешностью и обучаю макияжу логично и системно.',
  'Веду трансляции для Золотого Яблока, где регулярно обучаю 100+ девушек секретам макияжа',
  'Создавала образы для таких девушек как: Равшана Куркова, Екатерина Варнава, Елена Блиновская, Наташа Королева и др.',
];

const stats = [
  { value: 'ТОП-30', text: 'лучших свадебных стилистов' },
  { value: '8 ЛЕТ', text: 'опыта преподавания' },
  { value: '500+', text: 'выпускниц курса' },
];

// Insert StatCircle sub-component
function StatCircle({ value, caption }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[150px]">
      <div
        className="w-20 h-20 md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center border border-accent/50"
      >
        <span className="flex flex-col items-center justify-center w-full">
          {/* Icon and value, responsive size */}
          <span className="mb-1">
            {/* Render icon based on value */}
            {value === 'ТОП-30' && (
              <Award className="inline-block text-accent" size={20} md:size={40} />
            )}
            {value === '8 ЛЕТ' && (
              <Clock className="inline-block text-accent" size={20} md:size={40} />
            )}
            {value === '500+' && (
              <Users className="inline-block text-accent" size={20} md:size={40} />
            )}
          </span>
          <span className="font-sans font-semibold text-base md:text-2xl text-brand-900">
            {value}
          </span>
        </span>
      </div>
      <p className="mt-3 text-sm leading-snug text-brand-900/80 font-body">
        {caption}
      </p>
    </div>
  );
}

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="font-heading text-fluid-2xl font-black text-accent uppercase tracking-widest whitespace-nowrap">О Светлане</h2>
          <span className="hidden md:inline-block align-middle w-full bg-brand-900/25 ml-6" style={{height: '1.2px'}} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          
          {/* Левая колонка: Текст */}
          <div className="md:col-span-3 max-w-[580px] px-6 lg:px-0 mb-12 lg:mb-0">
            <ul className="text-left space-y-4">
              {aboutPoints.map((point, index) => (
                <li key={index} className="flex items-start leading-relaxed text-[16px] sm:text-[18px] text-brand-900/90 font-light before:content-['—'] before:mr-3 before:text-brand-900">
                  {point}
                </li>
              ))}
            </ul>
            {/* Decorative line under bullet list, if present */}
            <div className="w-full bg-brand-900/25 mt-8" style={{height: '1.2px'}} />
            <div
              id="about-stats"
              className="flex flex-row flex-wrap justify-between md:justify-center gap-6 md:gap-10 mt-8 md:mt-10"
              role="group"
              aria-label="Основные факты о преподавателе"
            >
              <div className="flex flex-col items-center text-center mx-auto">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#CFAFA0] flex items-center justify-center mx-auto">
                  <span className="font-body font-normal text-lg md:text-2xl">ТОП-30</span>
                </div>
                <p className="mt-2 text-xs md:text-sm md:text-base text-center text-brand-900/80 leading-snug max-w-[110px] md:max-w-[160px] font-body">лучших свадебных стилистов России</p>
              </div>
              <div className="flex flex-col items-center text-center mx-auto">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#CFAFA0] flex items-center justify-center mx-auto">
                  <span className="font-body font-normal text-lg md:text-2xl">8 ЛЕТ</span>
                </div>
                <p className="mt-2 text-xs md:text-sm md:text-base text-center text-brand-900/80 leading-snug max-w-[110px] md:max-w-[160px] font-body">создаю роскошные образы</p>
              </div>
              <div className="flex flex-col items-center text-center mx-auto">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#CFAFA0] flex items-center justify-center mx-auto">
                  <span className="font-body font-normal text-lg md:text-2xl">500+</span>
                </div>
                <p className="mt-2 text-xs md:text-sm md:text-base text-center text-brand-900/80 leading-snug max-w-[110px] md:max-w-[160px] font-body">девушек прошли обучение макияжу для себя</p>
              </div>
            </div>
          </div>

          {/* Правая колонка: Слайдер */}
          <div className="md:col-span-2 w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              className="w-full"
            >
              <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}about/1.jpg`} alt="Светлана Цыренова 1" className="w-full h-full object-cover aspect-[4/5]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}about/2.jpg`} alt="Светлана Цыренова 2" className="w-full h-full object-cover aspect-[4/5]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}about/3.jpg`} alt="Светлана Цыренова 3" className="w-full h-full object-cover aspect-[4/5]" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 