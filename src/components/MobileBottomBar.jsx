import React from 'react';
import { Phone, MessageCircle, Megaphone } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function MobileBottomBar({ lang = 'ta', onOpenAdmission }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      padding: '10px 16px',
      display: 'none',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
    }} className="mobile-bottom-bar">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.15fr 1.25fr',
        gap: '10px',
        alignItems: 'center'
      }}>
        {/* 1. Call Button */}
        <a
          href={`tel:${tuitionData.phones[0]}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: '#ffffff',
            color: '#093f7c',
            border: '2px solid #0056b3',
            borderRadius: '999px',
            padding: '11px 8px',
            fontSize: '0.86rem',
            fontWeight: 900,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0, 86, 179, 0.08)',
            whiteSpace: 'nowrap'
          }}
        >
          <Phone size={15} />
          <span>{lang === 'ta' ? 'அழைக்க' : 'Call'}</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={`https://wa.me/${tuitionData.whatsappNumber}?text=Hi%20JP%20Goodwill%20Tuition%20Centre,%20I%20want%20to%20know%20about%20admissions.`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: '#00875a',
            color: '#ffffff',
            borderRadius: '999px',
            padding: '11px 8px',
            fontSize: '0.86rem',
            fontWeight: 900,
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0, 135, 90, 0.25)',
            whiteSpace: 'nowrap'
          }}
        >
          <MessageCircle size={16} />
          <span>{lang === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
        </a>

        {/* 3. Apply Now Button */}
        <button
          onClick={onOpenAdmission}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: '#093f7c',
            color: '#ffffff',
            borderRadius: '999px',
            padding: '11px 10px',
            fontSize: '0.86rem',
            fontWeight: 900,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(9, 63, 124, 0.25)',
            whiteSpace: 'nowrap'
          }}
        >
          <Megaphone size={16} style={{ color: '#fde047' }} />
          <span>{lang === 'ta' ? 'சேர்க்கை' : 'Apply Now'}</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: block !important;
          }
          body {
            padding-bottom: 70px !important;
          }
        }
      `}</style>
    </div>
  );
}
