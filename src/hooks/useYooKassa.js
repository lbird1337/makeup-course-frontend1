import { useState, useEffect } from 'react';

const SCRIPT_URL = 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js';
let scriptStatus = null; // null | 'loading' | 'ready' | 'error'

export const useYooKassa = () => {
  const [status, setStatus] = useState(scriptStatus);

  useEffect(() => {
    if (status === 'ready' || status === 'loading') {
      return;
    }

    scriptStatus = 'loading';
    setStatus('loading');

    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      scriptStatus = 'ready';
      setStatus('ready');
    };

    script.onerror = () => {
      scriptStatus = 'error';
      setStatus('error');
    };

    document.head.appendChild(script);
    
    return () => {
      // В данном случае мы не удаляем скрипт, 
      // так как он может быть нужен на протяжении всей сессии
    };
  }, []);

  return status;
}; 