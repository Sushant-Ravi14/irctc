import React from 'react';
import { Plane, BedDouble, Lightbulb, Utensils, Bus, Umbrella, Train, Mountain, PlaySquare, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BentoGrid = () => {
  const { t } = useLanguage();

  const services = [
    { name: t('services.flights'), icon: Plane },
    { name: 'Retiring Room', icon: BedDouble },
    { name: t('services.rail_drishti'), icon: Lightbulb },
    { name: t('services.e_catering'), icon: Utensils },
    { name: t('services.bus'), icon: Bus },
    { name: t('services.holidays'), icon: Umbrella },
    { name: t('services.tourist_train'), icon: Train },
    { name: t('services.hill_railways'), icon: Mountain },
    { name: t('services.charter_train'), icon: PlaySquare },
    { name: t('services.gallery'), icon: ImageIcon },
  ];

  return (
    <section style={{ padding: 'clamp(40px,6vw,80px) 16px', backgroundColor: 'var(--blue-navy)', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'var(--blue-navy)', padding: 'clamp(32px,4vw,60px) 0', borderRadius: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,4vw,2.4rem)', fontWeight: 800, marginBottom: '8px' }}>{t('services.heading1')}</h2>
          <h2 style={{ fontSize: 'clamp(1.4rem,4vw,2.4rem)', fontWeight: 800, color: 'var(--text-muted)' }}>{t('services.heading2')}</h2>
        </div>

        <div className="bento-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-icon-wrapper">
              <div className="service-circle slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <service.icon className="service-svg" />
              </div>
              <span className="service-name">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
          padding: 0 40px;
        }
        .service-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .service-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .service-svg {
          color: var(--orange-primary);
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }
        .service-name {
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.5px;
          color: var(--text-main);
          text-align: center;
          line-height: 1.3;
        }

        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(4, 1fr); gap: 28px; padding: 0 20px; }
        }
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 0 12px; }
          .service-circle { width: 80px; height: 80px; }
          .service-svg { width: 32px; height: 32px; }
        }
        @media (max-width: 480px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; padding: 0 4px; }
          .service-circle { width: 68px; height: 68px; }
          .service-svg { width: 26px; height: 26px; }
          .service-name { font-size: 0.75rem; }
        }
        @media (max-width: 360px) {
          .service-circle { width: 56px; height: 56px; }
          .service-svg { width: 22px; height: 22px; }
          .service-name { font-size: 0.68rem; }
        }

        .service-icon-wrapper:hover .service-circle {
          background-color: var(--orange-primary);
          border-color: var(--orange-primary);
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(255, 109, 0, 0.4);
        }
        .service-icon-wrapper:hover .service-svg {
          color: white;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
