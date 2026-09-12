import React from 'react';
import { Users, Moon, UserCheck, CalendarCheck, Home, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function HighlightsSection({ lang, onOpenAdmission }) {
  const highlights = [
    {
      num: '01',
      titleTa: 'ஆண் பெண் மாணவர்களுக்கு தனித்தனி வகுப்பு',
      titleEn: 'Separate Batches for Boys & Girls',
      desc: 'Dedicated classrooms and independent batch timings for boys and girls to foster an attentive, disciplined, and safe academic environment.',
      tag: 'Discipline & Safety',
      tagBg: '#e6f7ef',
      tagColor: '#00875a',
      icon: <Users size={22} />
    },
    {
      num: '02',
      titleTa: 'மார்ச் தேர்வு நேரங்களில் இரவு தங்கி படிக்கும் வசதி',
      titleEn: 'March Board Exam Night Study Camps',
      desc: 'Supervised overnight study camp facility during 10th & 12th board exams with round-the-clock teacher guidance, rapid doubt clearance, and free refreshments.',
      tag: 'Centum Score Booster',
      tagBg: '#e0f2fe',
      tagColor: '#0284c7',
      icon: <Moon size={22} />
    },
    {
      num: '03',
      titleTa: 'ஒவ்வொரு பாடத்திற்கும் தனித்தனி ஆசிரியர்கள்',
      titleEn: '1 Dedicated PG Teacher per Subject',
      desc: 'No single teacher handles multiple subjects. Each subject is taught exclusively by experienced Post-Graduate specialists (M.Sc., M.Phil., M.Ed., M.Com.).',
      tag: 'Subject Mastery',
      tagBg: '#f3e8ff',
      tagColor: '#7c3aed',
      icon: <UserCheck size={22} />
    },
    {
      num: '04',
      titleTa: 'சனி & ஞாயிறு சிறப்பு பயிற்சி மற்றும் தேர்வுகள்',
      titleEn: 'Weekend Special Coaching & Test Series',
      desc: 'Rigorous weekend unit tests, question paper blueprint analysis, formula drill sessions, and continuous parent progress reporting.',
      tag: 'Continuous Evaluation',
      tagBg: '#fef3c7',
      tagColor: '#b45309',
      icon: <CalendarCheck size={22} />
    },
    {
      num: '05',
      titleTa: 'வீட்டுக்கே வந்து கற்பிக்கும் வசதி',
      titleEn: 'Doorstep 1-on-1 Home Tuition',
      desc: 'Personalized private tutoring directly at your residence across North Chennai for all school classes, college mathematics, and engineering subjects.',
      tag: 'Personalized 1-on-1',
      tagBg: '#ffedd5',
      tagColor: '#c2410c',
      icon: <Home size={22} />
    }
  ];

  return (
    <section id="highlights" style={{
      background: '#f8fafc',
      padding: '85px 0 95px 0',
      borderTop: '1px solid #e2e8f0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Top Tag & Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span className="font-script" style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#0056b3',
                display: 'inline-block',
                position: 'relative'
              }}>
                Key Highlights
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
              fontSize: 'clamp(2.1rem, 3.8vw, 2.9rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#093f7c',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              முக்கிய அம்சங்கள் • <span style={{ color: '#00875a' }}>Institutional Advantages</span>
            </h2>
          </div>

          <p style={{
            fontSize: '0.98rem',
            color: '#64748b',
            maxWidth: '480px',
            lineHeight: 1.6,
            margin: 0
          }}>
            Five signature advantages that make JP Goodwill the most trusted tuition centre in North Chennai since 2013.
          </p>
        </div>

        {/* 2-Column Split Showcase Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '35px',
          alignItems: 'start'
        }} className="highlights-split-layout">
          
          {/* Left Column: Sticky Trust Showcase Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '36px 30px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 10px 30px rgba(9, 63, 124, 0.05)',
            position: 'sticky',
            top: '100px',
            alignSelf: 'start'
          }} className="highlights-trust-card">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#e6f7ef',
              color: '#00875a',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '20px'
            }}>
              <Award size={16} />
              <span>ESTD 2013 • 13+ YEARS OF TRUST</span>
            </div>

            <h3 style={{
              fontSize: '1.65rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#093f7c',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}>
              Why Hundreds of Parents Choose <span style={{ color: '#00875a' }}>JP Goodwill</span>
            </h3>

            <p style={{
              fontSize: '0.94rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '28px'
            }}>
              Our structured approach combines dedicated subject teachers, regular test evaluations, disciplined separate batches, and night study camps to ensure 100% board exam success.
            </p>

            {/* 3 Key Stats Box */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginBottom: '28px'
            }}>
              <div style={{
                background: '#f8fafc',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#093f7c', fontFamily: 'var(--font-heading)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginTop: '2px' }}>
                  Pass Record
                </div>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#00875a', fontFamily: 'var(--font-heading)' }}>
                  567/600
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginTop: '2px' }}>
                  Top Board Score
                </div>
              </div>
            </div>

            {/* Quick Enrol CTA */}
            <button
              onClick={onOpenAdmission}
              style={{
                width: '100%',
                background: '#093f7c',
                color: '#ffffff',
                padding: '14px 20px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.96rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 14px rgba(9, 63, 124, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span>Enrol for New Batch 2025–26</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 5 Clean Numbered Feature Strips that scroll naturally past the sticky left card */}
          <div className="highlights-cards-list" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  padding: '26px 28px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(9, 63, 124, 0.03)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                className="highlight-card-row"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#93c5fd';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(9, 63, 124, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(9, 63, 124, 0.03)';
                }}
              >
                {/* Numbered Indicator with Sleek Soft Badge */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.45rem',
                  fontWeight: 950,
                  fontFamily: 'var(--font-heading)',
                  color: '#093f7c',
                  flexShrink: 0,
                  border: '1px solid #e2e8f0'
                }} className="highlight-num-badge">
                  {item.num}
                </div>

                {/* Content - Fully Visible & Clearly Formatted */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  
                  {/* Top Header: Tamil Title & Tag Badge */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{
                      fontSize: '1.18rem',
                      fontWeight: 900,
                      color: '#093f7c',
                      lineHeight: 1.3,
                      margin: 0
                    }}>
                      {item.titleTa}
                    </h3>

                    <span style={{
                      background: item.tagBg,
                      color: item.tagColor,
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <CheckCircle2 size={14} />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* English Title */}
                  <div style={{
                    fontSize: '0.96rem',
                    fontWeight: 800,
                    color: '#00875a',
                    marginBottom: '8px'
                  }}>
                    {item.titleEn}
                  </div>

                  {/* Description Paragraph (Always 100% visible with crisp readability) */}
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#334155',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .highlights-split-layout {
            grid-template-columns: 0.85fr 1.15fr !important;
            align-items: start !important;
          }
          .highlights-trust-card {
            position: sticky !important;
            top: 110px !important;
            align-self: flex-start !important;
          }
        }
        @media (max-width: 959px) {
          .highlights-trust-card {
            position: relative !important;
            top: 0 !important;
            padding: 24px 18px !important;
            margin-bottom: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .highlight-card-row {
            flex-direction: column !important;
            gap: 14px !important;
            padding: 20px 18px !important;
          }
          .highlight-num-badge {
            width: 44px !important;
            height: 44px !important;
            font-size: 1.25rem !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
