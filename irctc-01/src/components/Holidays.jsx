import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Holidays = () => {
  const { t } = useLanguage();

  const packages = [
    {
      title: "Maharajas' Express",
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&w=700&q=80',
      description: "Redefining Royalty, Luxury and Comfort, Maharajas' Express takes you on a sojourn to the era of bygone stately splendour of princely states.",
      link: 'https://www.irctctourism.com/maharaja-express'
    },
    {
      title: 'International Packages',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&w=700&q=80',
      description: 'Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, UK, Europe, USA, Australia etc.',
      link: 'https://www.irctctourism.com/international'
    },
    {
      title: 'Domestic Air Packages',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&w=700&q=80',
      description: 'Be it the spiritual devotee seeking blessings or the leisure traveller wanting to relish the Blue mountains, Sand-dunes, or Picturesque Islands — IRCTC has it all.',
      link: 'https://www.irctctourism.com/domestic'
    },
    {
      title: 'Bharat Gaurav Tourist Train',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&w=700&q=80',
      description: 'IRCTC operates Bharat Gaurav Tourist Train on various theme based circuits covering pilgrimage and heritage destinations in 5–20 day trips.',
      link: 'https://www.irctctourism.com/bharat-gaurav'
    },
    {
      title: 'Rail Tour Packages',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&w=700&q=80',
      description: 'IRCTC offers exclusive Rail tour packages with confirmed train tickets, sightseeing and meals for Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir and more.',
      link: 'https://www.irctctourism.com/rail-tours'
    },
  ];

  return (
    <section style={{ backgroundColor: 'var(--blue-navy)', padding: 'clamp(40px,5vw,60px) clamp(12px,3vw,20px)', position: 'relative', zIndex: 10 }} className="holidays-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem,4vw,2.2rem)', fontWeight: 800, textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('services.holidays')}</h2>
        
        <div className="holidays-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className="holiday-card">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="holiday-img" />
              </div>
              <div style={{ padding: 'clamp(16px,3vw,32px)' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>{pkg.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.8rem,1.5vw,0.95rem)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {pkg.description}
                </p>
                <a href={pkg.link} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--orange-primary)', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none' }}>
                  Read More <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .holidays-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .holiday-card {
          background: var(--blue-navy-light);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-glass);
          transition: all 0.4s ease;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .holidays-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .holidays-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .holiday-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.4);
          border-color: rgba(255, 109, 0, 0.3) !important;
        }
        .holiday-card:hover .holiday-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
};

export default Holidays;
