import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contacto() {
  const mensajeGeneralWsp = "¡Hola! Quiero más información sobre Botillería El Pingüino";

  return (
    <main className="page-main">
      <div className="contact-container">
        <div className="contact-card">
          <div style={{ textAlign: 'center' }}>
            <span className="heroBadge">Atención Personalizada</span>
            <h1 className="hero-title">Ubicación & Contacto</h1>
            <p className="hero-subtitle">
              Estamos listos para atenderte. Visítanos en nuestro local o comunícate vía WhatsApp.
            </p>
          </div>

          <div className="contact-grid">
            {/* Dirección / Google Maps */}
            <div className="info-item">
              <div>
                <div className="info-icon-wrapper">
                  <MapPin size={26} />
                </div>
                <h2 className="info-title">Nuestra Dirección</h2>
                <p className="info-desc">
                  <strong>Andrés Marambio 4158</strong><br />
                  Santiago, Chile
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Andres+Marambio+4158"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action secondary"
              >
                Abrir en Google Maps <ExternalLink size={18} />
              </a>
            </div>

            {/* Teléfono / WhatsApp Directo */}
            <div className="info-item">
              <div>
                <div className="info-icon-wrapper">
                  <Phone size={26} />
                </div>
                <h2 className="info-title">Atención por WhatsApp</h2>
                <p className="info-desc">
                  <strong>+56 9 9099 3668</strong><br />
                  Escríbenos para consultas directas y pedidos.
                </p>
              </div>

              <a
                href={`https://wa.me/56990993668?text=${encodeURIComponent(mensajeGeneralWsp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action primary"
              >
                Enviar mensaje por WhatsApp <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}