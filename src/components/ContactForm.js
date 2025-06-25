import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">{t('contact.title')}</h2>
      <form className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300">{t('contact.nameLabel')}:</label>
          <input type="text" className="w-full mt-1 p-2 rounded bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">{t('contact.emailLabel')}:</label>
          <input type="email" className="w-full mt-1 p-2 rounded bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">{t('contact.phoneLabel')}:</label>
          <input type="tel" className="w-full mt-1 p-2 rounded bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">{t('contact.messageLabel')}:</label>
          <textarea className="w-full mt-1 p-2 rounded bg-gray-800 text-white" rows="4"></textarea>
        </div>
        <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg">
          {t('contact.submit')}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
