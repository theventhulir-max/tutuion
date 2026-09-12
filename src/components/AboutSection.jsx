import React from 'react';
import { Users, BookOpen, UserCheck, Award, ArrowRight, CheckCircle2, Sparkles, Target, GraduationCap } from 'lucide-react';

export default function AboutSection({ lang, onOpenAdmission }) {
  const features = [
    {
      icon: <Users size={20} />,
      title: lang === 'ta' ? 'அனுபவமிக்க ஆசிரியர்கள்' : 'Experienced Faculty',
      desc: lang === 'ta' ? 'ஒவ்வொரு பாடத்திற்கும் M.Sc., M.Phil. முதுகலை சிறப்பு ஆசிரியர்கள்.' : 'Dedicated Post-Graduate specialists for every subject.',
      bg: '#e6f7ef',
      color: '#00875a'
    },
    {
      icon: <BookOpen size={20} />,
      title: lang === 'ta' ? 'முறையான கற்றல் முறை' : 'Structured Learning',
      desc: lang === 'ta' ? 'பாடத்திட்ட வினாத்தாள் பகுப்பாய்வு & வாராந்திர அலகு தேர்வுகள்.' : 'Systematic blueprint syllabus & weekly unit evaluations.',
      bg: '#e0f2fe',
      color: '#0284c7'
    },
    {
      icon: <UserCheck size={20} />,
      title: lang === 'ta' ? 'தனிநபர் கவனம்' : 'Personalized Attention',
      desc: lang === 'ta' ? 'ஆண், பெண் தனித்தனி வகுப்புகள் & உடனடி சந்தேக தெளிவுபடுத்தல்.' : 'Independent batches for boys & girls with rapid doubt clearance.',
      bg: '#f3e8ff',
      color: '#7c3aed'
    },
    {
      icon: <Award size={20} />,
      title: lang === 'ta' ? '100% சாதனை முடிவுகள்' : 'Proven Results',
      desc: lang === 'ta' ? '2013 முதல் அரசு பொதுத்தேர்வுகளில் தொடர் 100% தேர்ச்சி சாதனை.' : 'Consistent 100% board exam pass record since 2013.',
      bg: '#fef3c7',
      color: '#b45309'
    }
  ];

  const stats = [
    { num: '13+ Years', label: lang === 'ta' ? 'கல்வி சாதனை' : 'Academic Excellence' },
    { num: '100%', label: lang === 'ta' ? 'தேர்ச்சி சாதனை' : 'Board Pass Record' },
    { num: '6th–12th Std', label: lang === 'ta' ? 'State Board & CBSE' : 'State Board & CBSE' },
    { num: 'PG Faculty', label: lang === 'ta' ? 'முதுகலை ஆசிரியர்கள்' : 'Dedicated PG Teachers' }
  ];

  return (
    <section id="about" style={{
      background: '#ffffff',
      padding: '85px 0 75px 0',
      borderTop: '1px solid #eef2f6',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* 2-Column Desktop Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '60px'
        }} className="about-main-grid">
          
          {/* Left Column: Heading, Story, 2x2 Feature Grid & CTA */}
          <div>
            
            {/* About Us Script Tag with Yellow Highlighter Accent */}
            <div style={{ marginBottom: '6px' }}>
              <span className="font-script" style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.2rem)',
                fontWeight: 700,
                color: '#0056b3',
                display: 'inline-block',
                position: 'relative',
                lineHeight: 1.1
              }}>
                {lang === 'ta' ? 'எங்களை பற்றி' : 'About Us'}
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

            {/* Strong Headline */}
            <h2 style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#093f7c',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              margin: '0 0 16px 0'
            }}>
              {lang === 'ta' ? (
                <>
                  மாணவர்களின் சிறந்த <br />
                  எதிர்காலத்திற்கு <span style={{ color: '#00875a' }}>நம்பகமான வழிகாட்டல்</span>
                </>
              ) : (
                <>
                  Guiding Students <br />
                  Towards a <span style={{ color: '#00875a' }}>Brighter Future</span>
                </>
              )}
            </h2>

            {/* Supporting Paragraph */}
            <p style={{
              fontSize: '0.98rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '28px',
              maxWidth: '540px'
            }}>
              {lang === 'ta'
                ? '2013 முதல் வடசென்னையில் 13 ஆண்டுகளுக்கும் மேலாக 100% தேர்ச்சி சாதனை படைத்து வரும் முதன்மை பயிற்சி மையம் JP Goodwill. பள்ளி மாணவர்கள் (6 முதல் 12ம் வகுப்பு வரை State Board & CBSE), கல்லூரி கணிதம், பொறியியல் கணிதம் ஆகியவற்றிற்கு பிரத்யேக வழிகாட்டல், தனித்தனி வகுப்புகள் மற்றும் தேர்வு முகாம்களுடன் சிறந்த பயிற்சி வழங்கப்படுகிறது.'
                : "Since 2013, JP Goodwill Tuition Centre has been North Chennai's most trusted coaching institution. We provide concept-oriented coaching for school students (6th–12th Std State Board & CBSE), college mathematics, and engineering subjects with personal mentorship, disciplined batches, and supervised board exam camps."}
            </p>

            {/* Clean 2x2 Feature Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '28px',
              maxWidth: '540px'
            }} className="about-2x2-features">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '16px',
                    padding: '16px 14px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    transition: 'all 0.25s ease'
                  }}
                  className="about-feature-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = '#93c5fd';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 50, 120, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: item.bg,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#093f7c', lineHeight: 1.25, marginBottom: '3px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: Highlight Trust Text & Learn More CTA */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '18px'
            }}>
              <button
                onClick={onOpenAdmission}
                style={{
                  background: '#093f7c',
                  color: '#ffffff',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.94rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(9, 63, 124, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span>{lang === 'ta' ? 'சேர்க்கை முன்பதிவு' : 'Enrol for New Batch'}</span>
                <ArrowRight size={16} />
              </button>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#00875a',
                fontSize: '0.86rem',
                fontWeight: 800
              }}>
                <CheckCircle2 size={16} />
                <span>13+ Years of Trusted Academic Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Rounded Classroom Photo with Soft Glow & Floating Badges */}
          <div style={{ position: 'relative' }} className="about-image-wrapper">
            
            {/* Soft Blue-Green Gradient Glow Behind Image */}
            <div style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              width: '90%',
              height: '90%',
              background: 'radial-gradient(ellipse at center, rgba(0, 135, 90, 0.15) 0%, rgba(2, 132, 199, 0.12) 50%, rgba(255, 255, 255, 0) 75%)',
              filter: 'blur(30px)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            {/* Main Rounded Image Container */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(9, 63, 124, 0.15)',
              border: '2px solid #e2e8f0',
              background: '#ffffff'
            }}>
              <img
                src="/images/faculty_classroom.jpg"
                alt="Students learning in JP Goodwill Tuition Centre classroom"
                style={{
                  width: '100%',
                  height: '390px',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  display: 'block'
                }}
              />

              {/* Bottom Subtle Gradient Branding Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(9, 63, 124, 0.85) 0%, rgba(9, 63, 124, 0) 100%)',
                padding: '40px 24px 20px 24px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                    JP Goodwill Tuition Centre
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#e2e8f0', marginTop: '2px' }}>
                    Korukkupet & Tondiarpet • Estd 2013
                  </div>
                </div>

                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  padding: '3px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img src="/images/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                </div>
              </div>
            </div>

            {/* Floating Top Badge: 13+ Years of Excellence */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              right: '18px',
              zIndex: 3,
              background: '#ffffff',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 8px 24px rgba(0, 50, 120, 0.12)',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Award size={18} style={{ color: '#00875a' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#093f7c' }}>
                13+ Years of Excellence
              </span>
            </div>

            {/* Floating Bottom Left Badge: 100% Student Focus */}
            <div style={{
              position: 'absolute',
              bottom: '-14px',
              left: '18px',
              zIndex: 3,
              background: '#ffffff',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 8px 24px rgba(0, 50, 120, 0.12)',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Target size={18} style={{ color: '#0284c7' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#093f7c' }}>
                100% Student Focus
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Statistics Strip (Converts to 2x2 on Mobile) */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '20px',
          border: '1.5px solid #e2e8f0',
          padding: '24px 30px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            alignItems: 'center',
            textAlign: 'center'
          }} className="about-stats-grid">
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  borderRight: i < 3 ? '1px solid #e2e8f0' : 'none',
                  padding: '0 10px'
                }}
                className="about-stat-col"
              >
                <div style={{
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  color: i % 2 === 0 ? '#093f7c' : '#00875a',
                  lineHeight: 1.2,
                  marginBottom: '4px'
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontSize: '0.82rem',
                  color: '#64748b',
                  fontWeight: 700
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-main-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 768px) {
          .about-2x2-features {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .about-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          .about-stat-col {
            border-right: none !important;
            border-bottom: 1px solid #e2e8f0 !important;
            padding-bottom: 12px !important;
          }
          .about-stat-col:nth-child(3),
          .about-stat-col:nth-child(4) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
