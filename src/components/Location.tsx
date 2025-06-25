import React from 'react';
import { useTranslation } from 'react-i18next';

const Location: React.FC = () => {
  const { t } = useTranslation();
  
  const iframeStyle: React.CSSProperties = { border: 0 };

  return (
    <section className="py-12 px-4 bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">{t('location.title')}</h2>
      <div className="max-w-4xl mx-auto">
        {/* Google Maps embed for Calle Cobre 7, Torrejón de Ardoz */}
        <iframe
          title="V&A Autohaus Location - Calle Cobre 7, Torrejón de Ardoz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8!2d-3.4754967!3d40.4567552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzI0LjMiTiAzwrAyOCczMS44Ilc!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses&q=Calle+Cobre+7,+28850+Torrejón+de+Ardoz,+Madrid,+Spain"
          width="100%"
          height="450"
          style={iframeStyle}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-lg font-semibold">{t('location.address')}</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-gray-400">
            <div>
              <p className="font-semibold text-yellow-400 mb-2">Horario de Atención</p>
              <p>Lunes - Viernes: 9:00 - 19:00</p>
              <p>Sábados: 10:00 - 14:00</p>
              <p>Domingos: Cerrado</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-400 mb-2">Contacto</p>
              <p>Teléfono: +34 91 XXX XX XX</p>
              <p>Email: info@va-autohaus.es</p>
              <p>Cita previa recomendada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
