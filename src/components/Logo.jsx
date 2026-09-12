import React from 'react';

export default function Logo({ size = 52, showText = true, isWhite = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} className="brand-logo-container">
      
      {/* Official JP Goodwill HD Logo */}
      <img
        src="/images/logo.png"
        alt="JP Goodwill Tuition Centre Logo"
        width={size}
        height={size}
        style={{
          objectFit: 'contain',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(9, 63, 124, 0.22)',
          flexShrink: 0
        }}
        className="brand-logo-img"
      />

      {/* Brand Text Beside Emblem */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }} className="brand-text-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'nowrap' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: isWhite ? '#ffffff' : '#093F7C',
              lineHeight: 1.1
            }} className="brand-name-title">
              JP GOODWILL
            </span>
            <span style={{
              fontSize: '0.62rem',
              background: isWhite ? 'rgba(251, 191, 36, 0.2)' : '#FEF3C7',
              color: isWhite ? '#FDE047' : '#92400E',
              padding: '1px 6px',
              borderRadius: '4px',
              fontWeight: 800,
              border: isWhite ? '1px solid rgba(251, 191, 36, 0.4)' : '1px solid #FDE68A',
              letterSpacing: '0.02em'
            }} className="brand-estd-badge">
              ESTD 2013
            </span>
          </div>
          <div style={{
            fontWeight: 800,
            color: isWhite ? '#34D399' : '#00875A',
            letterSpacing: '0.04em',
            marginTop: '2px'
          }} className="brand-subtitle">
            TUITION CENTRE • CHENNAI
          </div>
        </div>
      )}

      <style>{`
        .brand-logo-img {
          width: ${size}px;
          height: ${size}px;
        }
        .brand-name-title {
          font-size: 1.38rem;
        }
        .brand-subtitle {
          font-size: 0.80rem;
        }
        @media (max-width: 600px) {
          .brand-logo-img {
            width: 38px !important;
            height: 38px !important;
          }
          .brand-name-title {
            font-size: 1.08rem !important;
          }
          .brand-subtitle {
            font-size: 0.65rem !important;
          }
          .brand-estd-badge {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

