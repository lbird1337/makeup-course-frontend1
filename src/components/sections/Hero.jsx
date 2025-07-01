import React, { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import modelImage from "/images/main.png";

const TARGET_DATE = new Date("2025-10-22T10:00:00+08:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(TARGET_DATE - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Countdown({ targetDate }) {
  const [time, setTime] = React.useState(getTimeLeft());
  React.useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);
  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(targetDate.getTime() - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  return (
    <div className="flex justify-center space-x-4 text-[#4A353C] font-heading text-2xl font-bold drop-shadow-sm" aria-label="Countdown timer">
      <TimeUnit value={time.days} label="дней" />
      <TimeUnit value={time.hours} label="часов" />
      <TimeUnit value={time.minutes} label="минут" />
      <TimeUnit value={time.seconds} label="секунд" />
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[48px]">
      <span className="text-3xl font-bold font-heading tabular-nums">{String(value).padStart(2, '0')}</span>
      <span className="text-xs text-[#4A353C]/70 uppercase tracking-wider font-body">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative bg-brand-50 min-h-[85vh] flex flex-col md:flex-row items-stretch overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Editorial, Classic Mobile Hero (md:hidden) with boxed card and lines */}
      <section className="md:hidden min-h-screen w-full flex flex-col justify-center items-center bg-brand-50 px-0 py-8">
        {/* Top border line */}
        <div className="w-full border-t border-line mb-6" />
        {/* Hero Card */}
        <div className="w-full max-w-md mx-auto bg-white/80 border border-line rounded-xl shadow-sm px-4 py-6 flex flex-col items-center text-center space-y-4">
          <h1 className="h2 font-heading font-bold text-accent leading-snug lg:leading-[1.15]">Эксклюзивный мастер‑класс по макияжу для всех уровней</h1>
          <div className="font-body text-fluid-base text-brand-900 font-light">Сделай свой образ своей визиткой — от новичка до профи</div>
          <div className="space-y-1 text-sm mt-2">
            <div className="flex justify-center items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="font-body">22–23 октября 2025</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-body">Улан-Удэ, Бурятия</span>
            </div>
          </div>
          {/* Countdown and buttons remain unchanged, but are inside the card */}
          <div className="mt-4 w-full">
            {/* Use the same countdown as desktop, but only for mobile */}
            <div className="flex justify-center space-x-4 text-brand-900 font-heading text-2xl font-bold drop-shadow-sm" aria-label="Countdown timer">
              <div className="flex flex-col items-center min-w-[48px]">
                <span className="text-3xl font-bold font-heading tabular-nums">{String(time.days).padStart(2, '0')}</span>
                <span className="text-xs text-brand-900/70 uppercase tracking-wider font-body">дней</span>
              </div>
              <div className="flex flex-col items-center min-w-[48px]">
                <span className="text-3xl font-bold font-heading tabular-nums">{String(time.hours).padStart(2, '0')}</span>
                <span className="text-xs text-brand-900/70 uppercase tracking-wider font-body">часов</span>
              </div>
              <div className="flex flex-col items-center min-w-[48px]">
                <span className="text-3xl font-bold font-heading tabular-nums">{String(time.minutes).padStart(2, '0')}</span>
                <span className="text-xs text-brand-900/70 uppercase tracking-wider font-body">минут</span>
              </div>
              <div className="flex flex-col items-center min-w-[48px]">
                <span className="text-3xl font-bold font-heading tabular-nums">{String(time.seconds).padStart(2, '0')}</span>
                <span className="text-xs text-brand-900/70 uppercase tracking-wider font-body">секунд</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 w-full">
            <button className="btn btn-primary w-full font-heading text-base rounded-full py-3 shadow-md">Забронировать место</button>
            <a href="#program" className="btn btn-secondary w-full font-heading text-base rounded-full py-3 bg-white text-center">Программа курса</a>
          </div>
        </div>
        {/* Bottom border line */}
        <div className="w-full border-b border-line mt-6" />
      </section>

      {/* Desktop Layout (refactored, upscale and anchor image to bottom) */}
      <div className="hidden md:flex w-full justify-center items-stretch bg-[#fefdfc] overflow-hidden">
        <div className="relative flex justify-between items-end gap-10 max-w-[1440px] mx-auto px-6 w-full min-h-[750px]">
          {/* Text Block */}
          <div className="flex-1 max-w-[600px] pl-10 lg:pl-16 space-y-4 self-center">
            <h1 className="font-heading font-bold text-5xl leading-tight text-accent mb-2">
              Эксклюзивный мастер-класс по макияжу
            </h1>
            <div className="flex flex-col sm:flex-row sm:space-x-6 text-brand-900 text-base font-body mb-2">
              <div className="flex items-center mt-2 sm:mt-0">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="ml-2">22–23 октября 2025</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="ml-2">Улан-Удэ, Бурятия</span>
              </div>
            </div>
            <div className="mb-1 text-brand-900/60 text-xs font-medium tracking-wide uppercase font-body">
              До начала осталось:
            </div>
            {/* Countdown Timer */}
            <div className="flex space-x-2 sm:space-x-4 mb-4" aria-label="Countdown timer">
              {[
                { label: "дней", value: time.days },
                { label: "часов", value: time.hours },
                { label: "минут", value: time.minutes },
                { label: "секунд", value: time.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center min-w-[48px]"
                >
                  <span className="text-2xl md:text-3xl font-bold text-brand-900 font-mono tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-brand-900/60 uppercase tracking-wider font-body">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-2">
              <motion.button
                className="w-full sm:w-auto bg-accent text-brand-50 rounded-full px-8 py-3 text-lg font-heading font-semibold uppercase tracking-wide transition-transform duration-200 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Забронировать место"
              >
                Забронировать место
              </motion.button>
              <motion.a
                href="#program"
                className="w-full sm:w-auto border-2 border-accent text-brand-900 rounded-full px-8 py-3 text-lg font-heading font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-accent hover:text-brand-50 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Программа курса"
              >
                Программа курса
              </motion.a>
            </div>
          </div>
          {/* Model Image as Large Background, Anchored to Bottom */}
          <div className="relative shrink-0 min-w-[500px] w-[500px] min-h-[750px] flex items-end bg-gradient-to-l from-[#fefdfc] via-[#f3ebe5] to-[#fefdfc]">
            <div
              className="absolute inset-0 bg-no-repeat bg-contain bg-bottom"
              style={{ backgroundImage: `url(${modelImage})`, backgroundSize: 'contain', backgroundPosition: 'bottom right' }}
            />
            {/* Soft mask/gradient fade on right edge */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fff] via-transparent" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
