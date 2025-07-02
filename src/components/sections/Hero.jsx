import React, { useEffect, useState, useRef } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
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
    <div className="flex flex-col items-center min-w-[48px] backdrop-blur-sm/30 bg-white/40 ring-1 ring-brand-900/10 rounded-md px-3 py-1 text-center">
      <span className="text-3xl font-bold font-heading tabular-nums">{String(value).padStart(2, '0')}</span>
      <span className="text-xs text-[#4A353C]/70 uppercase tracking-wider font-body">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (sectionRef.current) {
      sectionRef.current.style.backgroundImage =
        "linear-gradient(135deg, rgba(237,66,100,0.7), rgba(255,237,188,0.7))";
      sectionRef.current.style.backgroundSize = "cover";
      sectionRef.current.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none z-0"></div>
      <motion.section
        ref={sectionRef}
        className="relative min-h-[85vh] flex flex-col md:flex-row items-stretch overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Radial blush background (with opacity) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-accent/20 via-accent/5 to-brand-50 mask-radial pointer-events-none z-0 opacity-80"></div>
        {/* Subtle diagonal pattern overlay (with opacity) */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-80"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 2px)' }}
        />
        {/* Editorial, Classic Mobile Hero (md:hidden) with boxed card and lines */}
        <section className="md:hidden min-h-screen w-full flex flex-col justify-center items-center bg-brand-50 px-0 py-8">
          {/* Hero Card */}
          <div className="relative z-10 w-full max-w-xs mx-auto bg-gradient-to-t from-pink-100/80 to-transparent backdrop-blur-sm bg-white/80 ring-0 rounded-2xl py-8 px-2 sm:px-4 space-y-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-hero font-extrabold tracking-wide text-2xl sm:text-3xl md:text-4xl leading-tight text-center mx-auto text-rose-600"
            >
              Интенсивный <span className="text-accent">двухдневный</span> мастер-класс <br />от <span className="text-accent">звездного визажиста России</span>
            </motion.h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-base sm:text-lg md:text-xl font-semibold text-accent">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>22–23 октября 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Улан-Удэ, Бурятия</span>
              </div>
            </div>
            <p className="font-subtitle text-base sm:text-lg md:text-xl text-brand-900/80 mt-4 text-center mx-auto max-w-xs sm:max-w-md">
              Создай образ, который продаёт — от повседневного до красной дорожки.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-8" aria-label="Countdown timer">
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-900 tabular-nums transition-all duration-500">{String(time.days).padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Дней</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-900 tabular-nums transition-all duration-500">{String(time.hours).padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Часов</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-900 tabular-nums transition-all duration-500">{String(time.minutes).padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Минут</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-900 tabular-nums transition-all duration-500">{String(time.seconds).padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Секунд</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-8">
              <a href="#contact" style={{ color: '#fff' }} className="bg-accent hover:bg-rose-700 rounded-xl px-10 py-5 text-base sm:text-lg font-semibold font-heading uppercase tracking-wide shadow-2xl hover:scale-105 transition w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-accent">Забронировать место</a>
              <a href="#program" className="bg-white text-rose-600 border-2 border-rose-600 rounded-xl px-8 py-4 text-base sm:text-lg font-semibold hover:bg-rose-100 hover:scale-105 transition shadow-md w-full sm:w-auto text-center">ПРОГРАММА КУРСА</a>
            </div>
          </div>
        </section>

        {/* Desktop Layout (refactored, upscale and anchor image to bottom) */}
        <div className="hidden md:flex w-full justify-center items-stretch bg-[#fefdfc] overflow-hidden">
          <div className="relative flex justify-between items-end gap-10 max-w-[1440px] mx-auto px-6 w-full min-h-[750px]">
            {/* Text Block */}
            <div className="flex-1 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-20 space-y-8 max-w-4xl mx-auto">
              <h1 className="font-hero font-extrabold tracking-wide text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-[90vw] mx-auto text-brand-900">
                Интенсивный двухдневный мастер-класс от звездного визажиста России
              </h1>
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-base md:text-lg text-brand-900">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>22–23 октября 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Улан-Удэ, Бурятия</span>
                </div>
              </div>
              <p className="font-subtitle font-normal text-brand-900/80 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl mx-auto text-center">
                Создай образ, который продаёт — от повседневного до красной дорожки.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-8">
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-brand-900 tabular-nums">{String(time.days).padStart(2, '0')}</span>
                  <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Дней</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-brand-900 tabular-nums">{String(time.hours).padStart(2, '0')}</span>
                  <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Часов</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-brand-900 tabular-nums">{String(time.minutes).padStart(2, '0')}</span>
                  <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Минут</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-brand-900 tabular-nums">{String(time.seconds).padStart(2, '0')}</span>
                  <span className="text-xs sm:text-sm font-semibold uppercase mt-1 text-brand-900/70">Секунд</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-8">
                <motion.button
                  className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 text-brand-50 rounded-full px-8 py-3 text-lg font-heading font-semibold uppercase tracking-wide hover:scale-[1.03] transition w-full sm:w-auto"
                >Забронировать место</motion.button>
                <motion.a
                  href="#program"
                  className="border-2 border-accent text-brand-900 rounded-full px-8 py-3 text-lg font-heading font-semibold uppercase tracking-wide hover:bg-accent/10 transition w-full sm:w-auto text-center"
                >Программа курса</motion.a>
              </div>
            </div>
            {/* Model Image as Large Background, Anchored to Bottom */}
            <motion.div
              className="absolute md:static right-0 bottom-0 w-[360px] md:w-[480px] lg:w-[560px] pointer-events-none select-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={modelImage} alt="Светлана Цыренова" className="mask-radial object-contain w-full" />
            </motion.div>
          </div>
        </div>
        <a href="#value" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-brand-900/50">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.section>
    </div>
  );
}
