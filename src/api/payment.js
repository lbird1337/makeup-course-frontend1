export const createPayment = async ({ amount, description }) => {
  try {
    const BACKEND_URL = 'http://localhost:3001/api/create-payment';
    
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, description }), 
    });

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const data = await response.json();

    if (!data.confirmationToken) {
      throw new Error('Токен подтверждения не был получен от сервера.');
    }
    
    return data;

  } catch (error) {
    console.error('Не удалось выполнить запрос на создание платежа:', error);
    throw error;
  }
}; 