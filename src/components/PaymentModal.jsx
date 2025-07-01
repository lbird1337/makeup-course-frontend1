import React, { useState } from 'react';

const PaymentModal = ({ tariff, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({
        customerName: name,
        customerEmail: email,
        amount: tariff.amount,
        description: tariff.description,
      });
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-brand-50 text-brand-900 p-8 rounded-none w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="font-heading text-2xl font-bold mb-2">Подтверждение заказа</h2>
        <p className="font-body mb-6 border-b border-line pb-4">Тариф: <span className="font-bold">{tariff.description}</span></p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-body font-bold mb-1">Ваше имя</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-2 border-black"
              required 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block font-body font-bold mb-1">Ваш Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-2 border-black"
              required 
            />
          </div>
          <button type="submit" className="btn-primary w-full !bg-black !text-white hover:!scale-100">
            Перейти к оплате ({tariff.amount} руб)
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal; 