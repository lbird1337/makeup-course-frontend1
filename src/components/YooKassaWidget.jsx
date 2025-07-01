import { useEffect } from 'react';
import { useYooKassa } from '../hooks/useYooKassa';

const YooKassaWidget = ({ confirmation_token, onSuccess, onClose, onError }) => {
  const status = useYooKassa();

  useEffect(() => {
    if (status !== 'ready' || !confirmation_token) {
      return;
    }

    // Сохраняем экземпляр виджета, чтобы иметь к нему доступ в функции очистки
    let widgetInstance = null;

    try {
      widgetInstance = new window.YooMoneyCheckoutWidget({
        confirmation_token: confirmation_token,
        customization: {
          modal: true,
        },
        error_callback: (error) => {
          if (onError) {
            onError(error);
          }
        },
      });

      // Просто передаем управление наверх при успехе
      widgetInstance.on('success', onSuccess);
      
      // Если пользователь просто закрывает виджет (крестик), 
      // это не является ни успехом, ни ошибкой. Мы обработаем это в CTA.jsx
      // через состояние видимости.

      widgetInstance.render('root');

    } catch (e) {
      console.error("Failed to initialize YooKassa widget", e);
      if (onError) onError(e);
    }
    
    // Функция очистки. Сработает, когда компонент будет удален с экрана.
    return () => {
      if (widgetInstance) {
        console.log('Destroying widget instance.');
        widgetInstance.destroy();
      }
    };
    
  }, [status, confirmation_token, onSuccess, onClose, onError]);

  return null; // Компонент ничего не рендерит сам
};

export default YooKassaWidget; 