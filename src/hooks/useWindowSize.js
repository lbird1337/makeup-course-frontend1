import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Обработчик, который будет вызываться при изменении размера окна
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Добавляем подписчика на событие
    window.addEventListener("resize", handleResize);
    
    // Вызываем обработчик сразу после монтирования, чтобы получить начальный размер
    handleResize();
    
    // Удаляем подписчика при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании

  return windowSize;
}; 