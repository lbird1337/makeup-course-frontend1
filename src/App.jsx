import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Value from './components/sections/Value';
import AboutMe from './components/AboutMe';
import Marquee from './components/Marquee';
import Program from './components/Program';
import Pricing from './components/Pricing';
import Details from './components/Details';
import CTA from './components/CTA';
import Footer from './components/Footer';
import YooKassaWidget from './components/YooKassaWidget.jsx';
import { createPayment } from './api/payment.js';
import PaymentModal from './components/PaymentModal.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationToken, setConfirmationToken] = useState('');
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState(null);

  const openModal = (tariff) => {
    setSelectedTariff(tariff);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTariff(null);
  };

  const handlePayment = async ({ amount, description, customerName, customerEmail }) => {
    closeModal();
    setIsLoading(true);
    try {
      const data = await createPayment({ amount, description, customerName, customerEmail });
      setConfirmationToken(data.confirmationToken);
      setIsWidgetVisible(true);
    } catch (error) {
      console.error('Ошибка при создании платежа:', error);
      alert('Не удалось начать оплату. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeWidget = () => setIsWidgetVisible(false);
  
  const handleSuccess = () => {
    alert('Спасибо за оплату! Мы свяжемся с вами для подтверждения.');
    closeWidget();
  };
  
  const handleError = (error) => {
    alert('Произошла ошибка во время оплаты.');
    closeWidget();
  };

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Value />
        <AboutMe />
        <Marquee />
        <Program />
        <Portfolio />
        <Pricing handleOpenModal={openModal} />
        <Details />
        <CTA handleOpenModal={openModal} />
      </main>
      <Footer />

      {isModalOpen && (
        <PaymentModal 
          tariff={selectedTariff} 
          onClose={closeModal} 
          onSubmit={handlePayment} 
        />
      )}

      {isWidgetVisible && (
        <YooKassaWidget
          confirmation_token={confirmationToken}
          onSuccess={handleSuccess}
          onError={handleError}
          onClose={closeWidget}
        />
      )}
    </div>
  );
}

export default App; 