import React from 'react';

const testimonials = [
  {
    text: "Это лучший мастер-класс, который я посещала! Анна — настоящий профессионал, объясняет все доступно и понятно. Я наконец-то научилась делать идеальные стрелки!",
    author: "Екатерина С."
  },
  {
    text: "Огромное спасибо за знания и вдохновение! Программа очень насыщенная, много практики. Ушла с новыми идеями и полной уверенностью в своих силах.",
    author: "Мария П."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-brand-50 border-t-2 border-b-2 border-line">
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-brand-900">
          Что говорят ученики
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-50 border-2 border-line p-8 shadow-brutal"
            >
              <p className="font-body text-lg mb-4 text-brand-900">
                {testimonial.text}
              </p>
              <p className="font-body font-bold text-right text-brand-900">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 