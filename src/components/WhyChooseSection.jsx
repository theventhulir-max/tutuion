import React from 'react';
import { CheckCircle2, XCircle, Award, Sparkles, Phone, ArrowRight, Shield, BookOpen, Clock, Users, Flame } from 'lucide-react';

export default function WhyChooseSection({ lang, onOpenAdmission }) {
  const comparisonRows = [
    {
      featureTa: 'பாடவாரியாக ஆசிரியர்கள்',
      featureEn: 'Subject Faculty System',
      others: 'ஒரே ஆசிரியர் பல பாடங்கள் (Single teacher handles multiple subjects)',
      goodwill: 'ஒவ்வொரு பாடத்திற்கும் தனித்தனி முதுகலை PG ஆசிரியர்கள் (Dedicated PG Specialist for each subject)',
      badge: 'Subject Mastery'
    },
    {
      featureTa: 'மாணவர் - மாணவியர் வகுப்பறை',
      featureEn: 'Batch Separation',
      others: 'கலப்பு வகுப்புகள் (Mixed batches)',
      goodwill: 'ஆண் - பெண் மாணவர்களுக்கு 100% தனித்தனி வகுப்பறைகள் (100% Independent batches for Boys & Girls)',
      badge: 'Discipline & Safety'
    },
    {
      featureTa: 'மார்ச் அரசு பொதுத்தேர்வு பயிற்சி',
      featureEn: 'Board Exam Preparation',
      others: 'வழக்கமான வகுப்புகள் மட்டும் (Standard daily classes only)',
      goodwill: 'இலவச இரவு தங்கி படிக்கும் முகாம் (Supervised Night Study Camps with refreshments & doubt sessions)',
      badge: 'Score Booster'
    },
    {
      featureTa: 'தேர்வு மற்றும் முன்னேற்றம்',
      featureEn: 'Weekly Test Evaluations',
      others: 'அவ்வப்போது நடக்கும் தேர்வுகள் (Occasional tests)',
      goodwill: 'வாராந்திர மாதிரி தேர்வுகள் & பெற்றோர் கையொப்பம் (Sunday unit tests with question paper blueprint)',
      badge: '100% Pass Record'
    },
    {
      featureTa: 'கட்டண அமைப்பு',
      featureEn: 'Fee Structure',
      others: 'மறைமுக கூடுதல் கட்டணங்கள் (Hidden extra charges)',
      goodwill: 'குறைந்த வெளிப்படையான கட்டணம் + தவணை வசதி (Pocket-friendly fees with easy monthly installments)',
      badge: 'Affordable'
    }
  ];

  return (
    <section id="why-choose" style={{
      background: '#f8fafc',
      padding: '85px 0',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 45px auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <span className="font-script" style={{
              fontSize: '1.9rem',
              fontWeight: 700,
              color: '#0056b3',
              display: 'inline-block',
              position: 'relative'
            }}>
              Why JP Goodwill Stands Apart
              <span style={{
                position: 'absolute',
                bottom: '2px',
                left: '10%',
                width: '80%',
                height: '7px',
                background: '#fde047',
                borderRadius: '999px',
                zIndex: -1,
                opacity: 0.95
              }} />
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.6vw, 2.7rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: '#093f7c',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0'
          }}>
            சாதாரண டியூஷன் vs <span style={{ color: '#00875a' }}>குட்வில் பயிற்சி மையம்</span>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            lineHeight: 1.6,
            margin: 0
          }}>
            How our structured 13-year coaching methodology consistently delivers 100% board exam results for 10th & 12th students in North Chennai.
          </p>
        </div>

        {/* Comparison Table / Matrix Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 12px 35px rgba(9, 63, 124, 0.06)',
          overflow: 'hidden',
          marginBottom: '35px'
        }}>
          
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr 1.3fr',
            background: '#093f7c',
            color: '#ffffff',
            padding: '18px 24px',
            alignItems: 'center',
            fontWeight: 800,
            fontSize: '0.94rem'
          }} className="comparison-header-grid">
            <div style={{ color: '#e2e8f0', letterSpacing: '0.03em', textTransform: 'uppercase', fontSize: '0.82rem' }}>
              அம்சங்கள் (Key Parameters)
            </div>
            <div style={{ color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <XCircle size={16} />
              <span>மற்ற சாதாரண வகுப்புகள்</span>
            </div>
            <div style={{ color: '#86efac', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} />
              <span>JP Goodwill Coaching Standard</span>
            </div>
          </div>

          {/* Table Rows */}
          <div>
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr 1.3fr',
                  padding: '20px 24px',
                  borderTop: idx > 0 ? '1px solid #f1f5f9' : 'none',
                  background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'background 0.2s ease'
                }}
                className="comparison-row-grid"
              >
                {/* Parameter */}
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 900, color: '#093f7c', marginBottom: '3px' }}>
                    {row.featureTa}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700 }}>
                    {row.featureEn}
                  </div>
                </div>

                {/* Other standard tuition */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  color: '#64748b',
                  fontSize: '0.88rem',
                  lineHeight: 1.45
                }}>
                  <XCircle size={17} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  <span>{row.others}</span>
                </div>

                {/* JP Goodwill advantage */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  color: '#064e3b',
                  background: '#f0fdf4',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid #bbf7d0',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  lineHeight: 1.45
                }}>
                  <CheckCircle2 size={18} style={{ color: '#00875a', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span>{row.goodwill}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Fast Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #093f7c 0%, #004899 100%)',
          borderRadius: '20px',
          padding: '24px 30px',
          color: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: '0 10px 25px rgba(9, 63, 124, 0.18)'
        }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>
              அட்மிஷன் மற்றும் கட்டண விவரங்களுக்கு அழைக்கவும்
            </div>
            <div style={{ fontSize: '0.88rem', color: '#bfdbfe' }}>
              Limited seats per batch to maintain personal student attention • Korukkupet & Tondiarpet
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="tel:9840052675"
              style={{
                background: '#ffffff',
                color: '#093f7c',
                padding: '12px 20px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Phone size={16} />
              <span>98400 52675</span>
            </a>

            <button
              onClick={onOpenAdmission}
              style={{
                background: '#00875a',
                color: '#ffffff',
                padding: '12px 22px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.92rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(0, 135, 90, 0.35)'
              }}
            >
              <span>Apply Online</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .comparison-header-grid {
            display: none !important;
          }
          .comparison-row-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
