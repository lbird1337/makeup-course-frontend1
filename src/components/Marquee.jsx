import React from 'react';

const Marquee = () => {
  const marqueeText = "WEDDING MAKEUP  •  SEXY SMOKEY EYES  •  ПРОДАЮЩЕЕ ПОРТФОЛИО  •  ";
  
  return (
    <section className="py-4 border-t-2 border-b-2 border-brand-accent overflow-x-hidden">
      <div className="flex">
        {/* Мы используем два идентичных блока span. Когда первый полностью уходит за левый край,
          второй занимает его место, создавая иллюзию бесконечного цикла.
        */}
        <span className="animate-marquee font-body text-fluid-xl font-bold text-brand-accent uppercase whitespace-nowrap">
          {marqueeText.repeat(5)}
        </span>
        <span className="animate-marquee font-body text-fluid-xl font-bold text-brand-accent uppercase whitespace-nowrap" aria-hidden="true">
          {marqueeText.repeat(5)}
        </span>
      </div>
    </section>
  );
};

export default Marquee; 