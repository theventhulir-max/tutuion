import React from 'react';
import { Users, Home, FileText, UserCheck, GraduationCap, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero({ lang, onOpenAdmission }) {
  return (
    <section
      id="home"
      className="hero-section-custom"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <div className="container hero-inner-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        
        {/* Main Content Wrapper */}
        <div className="hero-left-content">
          
          {/* Top Headline Box (Full Width & Perfectly Centered on Mobile with Top Gap) */}
          <div className="hero-headline-center-box">
            
            {/* Tagline with Clean High-Contrast Color (No underline) */}
            <div style={{ marginBottom: '8px' }}>
              <span
                className={lang === 'ta' ? 'hero-tagline-ta' : 'font-script hero-tagline-en'}
                style={{
                  fontWeight: 800,
                  color: '#c2410c',
                  display: 'inline-block',
                  lineHeight: 1.25,
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                {lang === 'ta' ? 'உங்கள் எதிர்காலத்தை பிரகாசமாக்குங்கள்' : 'Build Your Future With'}
              </span>
            </div>

            {/* Main Bold Headline with 2 Clean Explicit Single Lines */}
            <h1 className="hero-main-h1" style={{
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#093f7c',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              margin: '0 0 20px 0'
            }}>
              {lang === 'ta' ? (
                <>
                  <span className="hero-h1-line-1" style={{ display: 'block' }}>
                    மாணவர்களின் <span style={{ color: '#00875a' }}>கல்வி மேன்மைக்கும்</span>
                  </span>
                  <span className="hero-h1-line-2" style={{ display: 'block' }}>
                    100% தேர்ச்சிக்கும் முழு வழிகாட்டல்!
                  </span>
                </>
              ) : (
                <>
                  <span className="hero-h1-line-1" style={{ display: 'block' }}>
                    Empowering Students with
                  </span>
                  <span className="hero-h1-line-2" style={{ display: 'block' }}>
                    <span style={{ color: '#00875a' }}>Academic Excellence</span> & Top Scores!
                  </span>
                </>
              )}
            </h1>

          </div>

          {/* Middle Left Content (Subtitle & Badges on Left, keeping student on right visible) */}
          <div className="hero-mid-left-box">
            {/* Subtitle Paragraph */}
            <p className="hero-subtitle" style={{
              color: '#1e293b',
              lineHeight: 1.55,
              margin: '0 0 16px 0',
              fontWeight: 700
            }}>
              {lang === 'ta'
                ? '6 முதல் 12ம் வகுப்பு வரை (State Board & CBSE), அண்ணா பல்கலைக்கழக பொறியியல் கணிதம் (M1, M2), பாலிடெக்னிக் & டிகிரி கணிதத்திற்கான முதன்மை பயிற்சி மையம் - கொருக்குப்பேட்டை & தண்டையார்பேட்டை.'
                : 'Premier coaching for 6th–12th Std (State Board & CBSE), Engineering Mathematics (Anna Univ), Diploma & Degree courses in Korukkupet & Tondiarpet.'}
            </p>

            {/* 4 Feature Badges */}
            <div className="hero-four-badges-row">
              
              {/* Badge 1: Separate Batches */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #00875a 0%, #10b981 100%)',
                  boxShadow: '0 4px 12px rgba(0, 135, 90, 0.28)'
                }}>
                  <Users size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'ஆண், பெண் தனித்தனி வகுப்பு' : 'Separate Batches for Boys & Girls'}
                </span>
              </div>

              {/* Badge 2: Doorstep Home Tuition */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #5c54db 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 12px rgba(92, 84, 219, 0.28)'
                }}>
                  <Home size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'வீட்டுக்கே வந்து கற்பிக்கும் வசதி' : 'Doorstep Home Tuition Available'}
                </span>
              </div>

              {/* Badge 3: March Night Study Camps */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.28)'
                }}>
                  <FileText size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'மார்ச் இரவு நேர சிறப்பு முகாம்' : 'March Board Exam Night Study Camps'}
                </span>
              </div>

              {/* Badge 4: Dedicated PG Specialist Teachers */}
              <div className="hero-badge-col">
                <div className="hero-badge-icon" style={{
                  background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                  boxShadow: '0 4px 12px rgba(234, 88, 12, 0.28)'
                }}>
                  <UserCheck size={21} color="#ffffff" />
                </div>
                <span className="hero-badge-text">
                  {lang === 'ta' ? 'முதுகலை பட்டதாரி ஆசிரியர்கள்' : 'Dedicated PG Specialist Teachers'}
                </span>
              </div>

            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="hero-actions-container">
            
            {/* Primary Enroll Button */}
            <button
              onClick={onOpenAdmission}
              className="hero-enroll-btn"
              style={{
                width: '100%',
                background: '#093f7c',
                color: '#ffffff',
                borderRadius: '999px',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 6px 18px rgba(9, 63, 124, 0.28)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <GraduationCap size={20} />
              <span>{lang === 'ta' ? '2025–26 புதிய வகுப்பில் சேரவும்' : 'Enroll for Batch 2025–26'}</span>
              <ArrowRight size={16} />
            </button>

            {/* Row 2: Call & WhatsApp */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              width: '100%'
            }}>
              {/* Call Button */}
              <a
                href="tel:9840052675"
                className="hero-call-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#ffffff',
                  color: '#0056b3',
                  border: '2px solid #0056b3',
                  borderRadius: '999px',
                  fontWeight: 900,
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(0, 86, 179, 0.1)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f0f7ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone size={15} style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap' }}>98400 52675</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919840052675?text=Hi%20JP%20Goodwill%20Tuition%20Centre,%20I%20want%20to%20know%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="hero-wa-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#00875a',
                  color: '#ffffff',
                  borderRadius: '999px',
                  fontWeight: 900,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 135, 90, 0.25)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(0, 135, 90, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 135, 90, 0.25)';
                }}
              >
                <MessageCircle size={16} style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap' }}>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        /* Desktop View */
        .hero-section-custom {
          background-image: url('/images/hero_bg_desktop.png');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          min-height: 590px;
        }
        .hero-inner-container {
          padding: 38px 24px;
        }
        .hero-left-content {
          max-width: 740px;
          width: 62%;
        }
        .hero-tagline-en {
          font-size: 1.85rem;
        }
        .hero-tagline-ta {
          font-size: 1.35rem;
          font-family: var(--font-heading);
          letter-spacing: -0.01em;
        }
        .hero-main-h1 {
          font-size: clamp(2.45rem, 3.6vw, 3.25rem);
          line-height: 1.18;
        }
        .hero-h1-line-1, .hero-h1-line-2 {
          white-space: nowrap;
          display: block;
        }
        .hero-subtitle {
          font-size: 0.96rem;
          max-width: 520px;
          font-weight: 700;
          color: #1e293b;
        }
        
        /* 4 Badges in 1 Single Row on Desktop with Centered Icons */
        .hero-four-badges-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
          max-width: 560px;
        }
        .hero-badge-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
        }
        .hero-badge-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .hero-badge-col:hover .hero-badge-icon {
          transform: translateY(-2px);
        }
        .hero-badge-text {
          font-size: 0.76rem;
          font-weight: 800;
          color: #093f7c;
          line-height: 1.3;
          text-align: center;
        }

        .hero-actions-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 480px;
        }
        .hero-enroll-btn {
          padding: 13px 22px;
          font-size: 0.98rem;
        }
        .hero-call-btn, .hero-wa-btn {
          padding: 11px 14px;
          font-size: 0.92rem;
        }

        /* Mobile View (max-width: 959px) */
        @media (max-width: 959px) {
          .hero-section-custom {
            background-image: url('/images/hero_bg_mobile.png');
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
            min-height: calc(100dvh - 65px) !important;
            height: auto !important;
            padding: 16px 0 24px 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
          }
          .hero-inner-container {
            padding: 16px 16px 16px 16px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            height: 100% !important;
            flex: 1 !important;
          }
          .hero-left-content {
            width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            height: 100% !important;
            flex: 1 !important;
          }
          
          /* ONLY THIS HEADLINE & TAGLINE IS FULL-WIDTH CENTERED ON MOBILE */
          .hero-headline-center-box {
            width: 100% !important;
            max-width: 100% !important;
            margin: 16px auto 26px auto !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-tagline-en {
            font-size: 1.6rem !important;
            line-height: 1.2 !important;
            text-align: center !important;
            display: block !important;
            margin: 0 auto 6px auto !important;
          }
          .hero-tagline-ta {
            font-size: 1.2rem !important;
            line-height: 1.25 !important;
            text-align: center !important;
            display: block !important;
            margin: 0 auto 6px auto !important;
          }
          .hero-main-h1 {
            font-size: clamp(1.32rem, 5.6vw, 2.05rem) !important;
            line-height: 1.24 !important;
            margin-bottom: 24px !important;
            text-align: center !important;
            width: 100% !important;
          }
          .hero-h1-line-1, .hero-h1-line-2 {
            white-space: nowrap !important;
            display: block !important;
          }

          /* SUBTITLE & BADGES REMAIN ON LEFT (62% width) SO RIGHT STUDENT STAYS VISIBLE */
          .hero-mid-left-box {
            max-width: 62% !important;
            width: 62% !important;
            align-self: flex-start !important;
            margin-top: 24px !important;
          }
          .hero-subtitle {
            font-size: 0.86rem !important;
            line-height: 1.48 !important;
            margin-bottom: 16px !important;
            color: #0f172a !important;
            font-weight: 700 !important;
            text-align: left !important;
          }
          
          /* 2x2 grid on mobile within left 60% */
          .hero-four-badges-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px 10px !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 20px !important;
          }
          .hero-badge-col {
            align-items: flex-start !important;
            text-align: left !important;
            gap: 6px !important;
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }
          .hero-badge-icon {
            width: 36px !important;
            height: 36px !important;
            margin: 0 !important;
          }
          .hero-badge-icon svg {
            width: 18px !important;
            height: 18px !important;
          }
          .hero-badge-text {
            font-size: 0.74rem !important;
            line-height: 1.25 !important;
            font-weight: 800 !important;
            text-align: left !important;
          }
          
          .hero-actions-container {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-top: auto !important;
            gap: 10px !important;
          }
          .hero-enroll-btn {
            width: 100% !important;
            padding: 13px 18px !important;
            font-size: 0.95rem !important;
          }
          .hero-call-btn, .hero-wa-btn {
            width: 100% !important;
            padding: 11px 8px !important;
            font-size: 0.85rem !important;
            white-space: nowrap !important;
            gap: 6px !important;
            letter-spacing: -0.01em !important;
            box-sizing: border-box !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section-custom {
            min-height: calc(100dvh - 60px) !important;
            padding: 14px 0 20px 0 !important;
          }
          .hero-inner-container {
            padding: 16px 14px 16px 14px !important;
          }
          .hero-headline-center-box {
            margin: 14px auto 24px auto !important;
          }
          .hero-tagline-en {
            font-size: 1.45rem !important;
          }
          .hero-tagline-ta {
            font-size: 1.1rem !important;
          }
          .hero-main-h1 {
            font-size: clamp(1.20rem, 5.3vw, 1.65rem) !important;
            margin-bottom: 22px !important;
          }
          .hero-mid-left-box {
            max-width: 62% !important;
            width: 62% !important;
            margin-top: 22px !important;
          }
          .hero-subtitle {
            font-size: 0.83rem !important;
            line-height: 1.45 !important;
            text-align: left !important;
            font-weight: 700 !important;
            color: #0f172a !important;
          }
          .hero-four-badges-row {
            gap: 10px 8px !important;
          }
          .hero-badge-col {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .hero-badge-icon {
            margin: 0 !important;
          }
          .hero-badge-text {
            font-size: 0.70rem !important;
            text-align: left !important;
          }
          .hero-call-btn, .hero-wa-btn {
            font-size: 0.82rem !important;
            padding: 10px 6px !important;
          }
        }
      `}</style>
    </section>
  );
}
