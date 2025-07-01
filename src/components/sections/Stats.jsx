import React from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 'ТОП-30', caption: 'Визажистов России' },
  { value: '8 лет', caption: 'Опыт преподавания' },
  { value: '500+', caption: 'Выпускников курса' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Stats = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.ul
      ref={ref}
      role="list"
      className="flex flex-row flex-nowrap justify-center items-start gap-x-2 sm:gap-x-4 md:gap-x-8 overflow-x-auto min-w-[min-content] px-2"
      style={{ minWidth: 0 }}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {stats.map((stat) => (
        <motion.li
          key={stat.value}
          role="listitem"
          className="flex flex-col items-center w-16 shrink-0"
          variants={itemVariants}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-accent flex items-center justify-center">
            <span className="text-accent font-heading text-xs sm:text-base md:text-lg tracking-wider select-none">
              {stat.value}
            </span>
          </div>
          <div className="mt-2 text-brand-900 text-center leading-snug text-xs font-body max-w-[4.5rem] sm:max-w-[6rem] md:max-w-[8rem]">
            {stat.caption}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Stats; 