import React from 'react';
import { Send, MessageCircle, PhoneCall } from "lucide-react";
import { motion } from 'framer-motion';

const CTA = ({ handleOpenModal }) => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="h2 text-center mb-12 text-fluid-2xl">Готовы начать?</h2>
        <p className="font-body text-lg mb-8">
          Чтобы гарантировать свое участие, внесите предоплату. Если у Вас остались вопросы - обязательно ответим на них!
        </p>
        {/* ✨ Contact CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Telegram */}
            <a
              href="https://t.me/janna_kim_03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/30 bg-accent/10 px-6 py-3 font-heading font-semibold text-accent hover:bg-accent hover:text-brand-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Связаться через Telegram"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79516203339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/30 bg-accent/10 px-6 py-3 font-heading font-semibold text-accent hover:bg-accent hover:text-brand-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Связаться через WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>

            {/* Phone */}
            <a
              href="tel:+79516203339"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/30 bg-accent/10 px-6 py-3 font-heading font-semibold text-accent hover:bg-accent hover:text-brand-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Позвонить по телефону"
            >
              <PhoneCall className="w-5 h-5" />
              Позвонить
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 