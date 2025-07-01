import React from 'react';
import { WhatsAppIcon, TelegramIcon, InstagramIcon, PhoneIcon } from './SocialIcons.jsx';

const Footer = () => {
  const organizer = "Жанна Ким";
  const phone = "+7(951)620-33-39";
  const phoneLink = "tel:+79516203339";
  const whatsappLink = "https://wa.me/79516203339";
  const telegramLink = "https://t.me/+79516203339";
  const instagramLink = "https://instagram.com/svetlanish";

  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 md:px-8 border-t-2 border-line text-brand-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Блок 1: Организатор и телефон */}
        <div className="space-y-2">
          <p className="font-bold text-accent">Организатор</p>
          <p>{organizer}</p>
          <a href={phoneLink} className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
            <PhoneIcon className="h-4 w-4" />
            <span>{phone}</span>
          </a>
        </div>

        {/* Блок 2: Копирайт */}
        <div className="flex items-center justify-center text-sm">
          <p>&copy; 2025 Мастер-класс Светланы Цыреновой. Все права защищены.</p>
        </div>

        {/* Блок 3: Социальные сети */}
        <div className="flex items-center justify-center md:justify-end gap-6">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon className="h-6 w-6 hover:text-accent transition-colors" />
          </a>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <TelegramIcon className="h-6 w-6 hover:text-accent transition-colors" />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon className="h-6 w-6 hover:text-accent transition-colors" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 