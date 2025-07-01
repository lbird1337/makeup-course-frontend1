import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Eye, 
  Users, 
  Camera, 
  TrendingUp 
} from 'lucide-react';

// Animation variants for staggered card appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Value = () => {
  const benefits = [
    {
      title: 'Сияющая кожа',
      text: 'Освоишь приёмы для создания ухоженного и живого тона лица.',
      icon: Sparkles,
      delay: 0
    },
    {
      title: 'Пошаговая система',
      text: 'Поймешь, как выстраивать макияж логично: от базы до деталей.',
      icon: Layers,
      delay: 0.1
    },
    {
      title: 'Естественная выразительность',
      text: 'Научишься подчёркивать достоинства, не перегружая образ.',
      icon: Eye,
      delay: 0.2
    },
    {
      title: 'Практика на моделях',
      text: 'Закрепишь всё на практике — получишь уверенность и результат.',
      icon: Users,
      delay: 0.3
    },
    {
      title: 'Портфолио и визуал',
      text: 'Научишься делать макияж, который выглядит идеально в кадре.',
      icon: Camera,
      delay: 0.4
    },
    {
      title: 'Первые клиенты',
      text: 'Узнаешь, как оформлять кейсы и вести соцсети для привлечения клиентов.',
      icon: TrendingUp,
      delay: 0.5
    },
  ];

  return (
    <section className="py-20 bg-brand-50 border-t border-line" id="value">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-accent mb-6">
            Что даст тебе этот мастер-класс?
          </h2>
          <p className="text-brand-900/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Практические навыки и знания, которые помогут тебе создавать профессиональный макияж
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map(({title, text, icon: IconComponent, delay}, index) => (
            <motion.div 
              key={title} 
              className="group relative"
              variants={cardVariants}
              style={{ 
                transform: `translateY(${index % 2 === 1 ? '20px' : '0px'})` 
              }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 lg:p-8 border border-line/30 hover:border-accent/20 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="font-heading text-lg lg:text-xl text-brand-900 mb-3 leading-tight">
                    {title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-brand-900/70 leading-relaxed flex-grow">
                    {text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Value; 